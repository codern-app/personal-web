import { Business, DateRange, Email } from "@mui/icons-material";
import { Box, Avatar, Typography, Chip, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useFirebase } from "../../features/firebase/providers/firebase.hook";
import { SectionComponent } from "../../features/navigation/components/section.component";
import { SkillItemComponent } from "../items/skill-item.component";

export const SkillsSectionComponent: React.FC = () => {
  const t = useTranslations("skills");
  const { profile } = useFirebase();

  return (
    <SectionComponent color="grey.200" id="skills">
      <Typography variant="h2" component="h2" mt={2}>
        {t("title")}
      </Typography>
      <Box mt={2}>
        {profile?.skills?.map((skillItem) => (
          <SkillItemComponent key={skillItem.id} skill={skillItem} />
        ))}
      </Box>
    </SectionComponent>
  );
};
