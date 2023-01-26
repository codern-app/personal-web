import { Business, DateRange, Email } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { EducationSectionComponent } from "../components/sections/education-section.component";
import { ExperienceSectionComponent } from "../components/sections/experience-section.component";
import { HighlightSectionComponent } from "../components/sections/highlight-section.component";
import { LanguagesSectionComponent } from "../components/sections/languges-section.component";
import { PortfolioSectionComponent } from "../components/sections/portfolio-section.component";
import { ProfileSectionComponent } from "../components/sections/profile-section.component";
import { PublicationSectionComponent } from "../components/sections/publication-section.component";
import { SkillsSectionComponent } from "../components/sections/skills-section.component";
import { config } from "../configs/config";
import { useFirebase } from "../features/firebase/providers/firebase.hook";
import { WrapperComponent } from "../features/navigation/components/wrapper.component";

export default function Home() {
  const { isLoading, profile } = useFirebase();
  const t = useTranslations("profile");

  if (isLoading) {
    return (
      <WrapperComponent>
        <Head>
          <title>{config.siteName}</title>
        </Head>
        <Box sx={{ display: "flex", justifyContent: "center", marginY: 20 }}>
          <CircularProgress />
        </Box>
      </WrapperComponent>
    );
  }

  return (
    <WrapperComponent>
      <Head>
        <title>{config.siteName} | {profile?.title}</title>
      </Head>
      <ProfileSectionComponent />
      <HighlightSectionComponent />
      <ExperienceSectionComponent />
      <SkillsSectionComponent />
      <LanguagesSectionComponent />
      <EducationSectionComponent />
      <PortfolioSectionComponent />
      <PublicationSectionComponent />
    </WrapperComponent>
  );
}
