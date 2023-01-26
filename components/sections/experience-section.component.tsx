import { Business, DateRange, Email } from "@mui/icons-material";
import { Box, Avatar, Typography, Chip } from "@mui/material";
import { useTranslations } from "next-intl";
import { useFirebase } from "../../features/firebase/providers/firebase.hook";
import { SectionComponent } from "../../features/navigation/components/section.component";
import { ExperienceItemComponent } from "../items/experience-item.component";
import { HighlightItemComponent } from "../items/highlight-item.component";

export const ExperienceSectionComponent: React.FC = () => {
  const t = useTranslations("experience");
  const { experience } = useFirebase();

  return (
    <SectionComponent color="grey.100" id="experience">
      <Typography variant="h2" component="h2" mt={2}>
        {t("title")}
      </Typography>
      <Box mt={2}>
        {experience?.map((experienceItem) => (
          <ExperienceItemComponent
            key={experienceItem.id}
            experience={experienceItem}
          />
        ))}
      </Box>
    </SectionComponent>
  );
};
