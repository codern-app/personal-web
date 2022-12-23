import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ExperienceItemComponent } from "../components/experience-item.component";
import { useFirebase } from "../features/firebase/providers/firebase.hook";
import { WrapperComponent } from "../features/navigation/components/wrapper.component";

export default function ExperiencePage() {
  const { experience } = useFirebase();
  const t = useTranslations("experience");

  return (
    <WrapperComponent>
      <Typography variant="h1" component="h1" mt={2}>
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
    </WrapperComponent>
  );
}
