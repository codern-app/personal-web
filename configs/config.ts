const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const configExperience = process.env.NEXT_PUBLIC_CONFIG_EXPERIENCE;
const configHighlights = process.env.NEXT_PUBLIC_CONFIG_HIGHLIGHTS;
const configPortfolio = process.env.NEXT_PUBLIC_CONFIG_PORTFOLIO;
const configProfile = process.env.NEXT_PUBLIC_CONFIG_PROFILE;
const configRecommendations = process.env.NEXT_PUBLIC_CONFIG_RECOMMENDATIONS;

export const config = {
  siteName,
  siteUrl,
  configExperience,
  configHighlights,
  configPortfolio,
  configProfile,
  configRecommendations,
};
