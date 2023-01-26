import { Business, DateRange, Email } from "@mui/icons-material";
import { Box, Avatar, Typography, Chip } from "@mui/material";
import { useTranslations } from "next-intl";
import { useFirebase } from "../../features/firebase/providers/firebase.hook";
import { SectionComponent } from "../../features/navigation/components/section.component";
import { HighlightItemComponent } from "../items/highlight-item.component";
import { PublicationItemComponent } from "../items/publication-item.component";

export const PublicationSectionComponent: React.FC = () => {
  const t = useTranslations("publication");
  const { profile } = useFirebase();

  return (
    <SectionComponent color="grey.200" id="publication">
      <Typography variant="h2" component="h2" mt={2}>
        {t("title")}
      </Typography>
      <Box mt={2} mb={8}>
        {profile?.publications?.map((publication) => (
          <PublicationItemComponent
            key={publication.id}
            publication={publication}
          />
        ))}
      </Box>
    </SectionComponent>
  );
};
