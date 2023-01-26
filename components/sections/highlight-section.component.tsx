import { Business, DateRange, Email } from "@mui/icons-material";
import { Box, Avatar, Typography, Chip } from "@mui/material";
import { useTranslations } from "next-intl";
import { useFirebase } from "../../features/firebase/providers/firebase.hook";
import { SectionComponent } from "../../features/navigation/components/section.component";
import { HighlightItemComponent } from "../items/highlight-item.component";

export const HighlightSectionComponent: React.FC = () => {
  const t = useTranslations("highlight");
  const { highlights } = useFirebase();

  return (
    <SectionComponent color="secondary.light" id="highlight">
      {highlights?.map((highlight) => (
        <HighlightItemComponent key={highlight.id} highlight={highlight} />
      ))}
    </SectionComponent>
  );
};
