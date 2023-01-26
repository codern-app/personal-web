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
import { IconComponent } from "../shared/icon.component";

type Props = {
  skill: TagGroup;
};

export const SkillItemComponent: React.FC<Props> = ({ skill }) => {
  const t = useTranslations("skills");

  return (
    <Card sx={{ display: "flex", width: "100%", marginY: 1 }} className="card">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "4px 8px !important",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography component="h3" variant="h4" pr={1}>
              {skill.title}
            </Typography>
            {skill.tags?.map((tag) => (
              <Chip key={tag} size="small" variant="medium" color="primary" label={tag} />
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
