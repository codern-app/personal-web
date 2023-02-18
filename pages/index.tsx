import { Box, CircularProgress } from '@mui/material';
import { EducationSectionComponent } from '../components/sections/education-section.component';
import { ExperienceSectionComponent } from '../components/sections/experience-section.component';
import { HighlightSectionComponent } from '../components/sections/highlight-section.component';
import { LanguagesSectionComponent } from '../components/sections/languages-section.component';
import { PortfolioSectionComponent } from '../components/sections/portfolio-section.component';
import { ProfileSectionComponent } from '../components/sections/profile-section.component';
import { PublicationSectionComponent } from '../components/sections/publication-section.component';
import { RecommendationSectionComponent } from '../components/sections/recommendation-section.component';
import { SkillsSectionComponent } from '../components/sections/skills-section.component';
import { useFirebase } from '../features/firebase/providers/firebase.hook';
import { HeadComponent } from '../features/seo/head.component';
import { WrapperComponent } from '../features/navigation/components/wrapper.component';
import { StructuredDataComponent } from '../features/seo/structured-data.component';

export default function Home() {
  const { isLoading } = useFirebase();

  return (
    <>
      <WrapperComponent>
        <HeadComponent />
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 20 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <ProfileSectionComponent />
            <HighlightSectionComponent />
            <ExperienceSectionComponent />
            <SkillsSectionComponent />
            <LanguagesSectionComponent />
            <EducationSectionComponent />
            <RecommendationSectionComponent />
            <PortfolioSectionComponent />
            <PublicationSectionComponent />
          </>
        )}
        <StructuredDataComponent />
      </WrapperComponent>
    </>
  );
}
