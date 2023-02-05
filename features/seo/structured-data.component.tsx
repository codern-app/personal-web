import { useMemo } from 'react';
import { config } from '../../configs/config';
import { Portfolio } from '../firebase/models/portfolio.model';
import { useFirebase } from '../firebase/providers/firebase.hook';

export const StructuredDataComponent: React.FC = () => {
  const { profile, experience, portfolios, recommendations } = useFirebase();

  const socials = useMemo(() => {
    if (!profile?.social) {
      return [];
    }
    return profile.social.map((item) => item.link);
  }, [profile]);

  const lastExperience = useMemo(() => {
    if (!experience) {
      return undefined;
    }
    return experience[0];
  }, [experience]);

  const currentCompany = useMemo(() => {
    if (!lastExperience) {
      return undefined;
    }
    return {
      '@type': 'Organization',
      name: lastExperience.company.title,
      url: lastExperience.company.link,
      description: lastExperience.description,
    };
  }, [lastExperience]);

  const lastUniversity = useMemo(() => {
    if (!profile?.education) {
      return undefined;
    }
    const education = profile.education[0];
    return {
      '@type': 'CollegeOrUniversity',
      name: education.university,
      alumni: {
        '@type': 'Alumni',
        alumniOf: education.university,
        educationLevel: education.level,
        fieldOfStudy: education.topic,
      },
    };
  }, [profile]);

  const address = useMemo(() => {
    if (!profile?.location) {
      return undefined;
    }
    const splitAddress = profile?.location.split(',');
    return {
      '@type': 'PostalAddress',
      addressLocality: splitAddress[0],
      addressCountry: splitAddress[1]?.split(' '),
    };
  }, [profile]);

  const skills = useMemo(() => {
    if (!profile?.skills) {
      return undefined;
    }
    const list: string[] = [];
    profile.skills.forEach((item) => {
      list.push(...item.tags);
    });
    return list;
  }, [profile]);

  const portfolioItems = useMemo(() => {
    if (!portfolios) {
      return undefined;
    }
    const list: Portfolio[] = [];
    portfolios.forEach((item) => {
      list.push(...item.portfolio);
    });
    return list.map((item) => {
      return {
        '@type': 'CreativeWork',
        name: item.title,
        description: item.description,
        url: item.link,
      };
    });
  }, [portfolios]);

  const publications = useMemo(() => {
    if (!profile?.publications) {
      return undefined;
    }
    return profile.publications.map((item) => {
      return {
        '@type': 'ScholarlyArticle',
        name: item.title,
        author: {
          '@type': 'Person',
          name: config.siteName,
        },
        publisher: {
          '@type': 'Organization',
          name: item.journal,
        },
        datePublished: item.date,
        url: item.link,
      };
    });
  }, [profile]);

  const languages = useMemo(() => {
    if (!profile?.languages) {
      return undefined;
    }
    return profile.languages.map((item) => item.title);
  }, [profile]);

  const recommendationItems = useMemo(() => {
    if (!recommendations?.recommendations) {
      return undefined;
    }
    return recommendations.recommendations.map((item) => {
      return {
        '@type': 'Recommendation',
        recommendationType: 'Endorsement',
        author: {
          '@type': 'Person',
          name: item.name,
          jobTitle: item.title,
        },
        text: item.recommendation,
      };
    });
  }, [recommendations]);

  const data = useMemo(() => {
    const dataObj = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      name: config.siteName,
      url: config.siteUrl,
      sameAs: socials,
      jobTitle: config.userTitle,
      worksFor: currentCompany,
      description: config.userDescription,
      address: address,
      email: profile?.email,
      telephone: profile?.phone,
      skill: skills,
      hasOccupation: {
        '@type': 'Occupation',
        name: config.userTitle,
        description: config.userDescription,
      },
      alumniOf: lastUniversity,
      knowsAbout: skills,
      portfolio: portfolioItems,
      publishes: publications,
      recommendation: recommendationItems,
      language: languages,
    };
    return JSON.stringify(dataObj);
  }, [
    address,
    currentCompany,
    languages,
    lastUniversity,
    portfolioItems,
    profile,
    publications,
    recommendationItems,
    skills,
    socials,
  ]);

  return <script type="application/ld+json">{data}</script>;
};
