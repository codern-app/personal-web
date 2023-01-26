import { Card, Box, CardContent, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { Highlight } from "../../features/firebase/models/highlight.model";

type Props = {
  highlight: Highlight;
};

export const HighlightItemComponent: React.FC<Props> = ({ highlight }) => {
  const t = useTranslations("publication");

  return (
    <Box sx={{marginTop: 2, marginBottom: 2}}>
      <Typography component="h3" variant="h3">
        {highlight.title}
      </Typography>
      <Typography>
        {highlight.description}
      </Typography>
    </Box>
  );
};
