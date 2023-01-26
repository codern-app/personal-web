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
import { EducationItemComponent } from "../components/items/education-item.component";
import { ExperienceItemComponent } from "../components/items/experience-item.component";
import { HighlightItemComponent } from "../components/items/highlight-item.component";
import { PortfolioGroupItemComponent } from "../components/items/portfolio-group-item.component";
import { PublicationItemComponent } from "../components/items/publication-item.component";
import { SkillItemComponent } from "../components/items/skill-item.component";
import { EducationSectionComponent } from "../components/sections/education-section.component";
import { ExperienceSectionComponent } from "../components/sections/experience-section.component";
import { HighlightSectionComponent } from "../components/sections/highlight-section.component";
import { LanguagesSectionComponent } from "../components/sections/languges-section.component";
import { PortfolioSectionComponent } from "../components/sections/portfolio-section.component";
import { ProfileSectionComponent } from "../components/sections/profile-section.component";
import { PublicationSectionComponent } from "../components/sections/publication-section.component";
import { SkillsSectionComponent } from "../components/sections/skills-section.component";
import { useFirebase } from "../features/firebase/providers/firebase.hook";
import { WrapperComponent } from "../features/navigation/components/wrapper.component";

export default function Home() {
  const { isLoading } = useFirebase();
  const t = useTranslations("profile");

  if (isLoading) {
    return (
      <WrapperComponent>
        <Box sx={{ display: "flex", justifyContent: 'center', marginY: 20 }}>
          <CircularProgress />
        </Box>
      </WrapperComponent>
    );
  }

  return (
    <WrapperComponent>
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
