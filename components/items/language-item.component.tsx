import {
  Business,
  DateRange,
  ExpandLess,
  ExpandMore,
  Place,
} from "@mui/icons-material";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Collapse,
  Button,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Experience } from "../../features/firebase/models/experience.model";
import { TagGroup } from "../../features/firebase/models/firebase.model";
import { Language } from "../../features/firebase/models/profile.model";
import { IconComponent } from "../shared/icon.component";

type Props = {
  language: Language;
};

export const LanguageItemComponent: React.FC<Props> = ({ language }) => {
  const t = useTranslations("languages");

  return (
    <Card sx={{marginRight: 1}}>
      <Box display="flex" p={1}>
        <Typography pr={1}>{language.title}</Typography>
        <Typography color="text.secondary">{language.level}</Typography>
      </Box>
    </Card>
    );
};
