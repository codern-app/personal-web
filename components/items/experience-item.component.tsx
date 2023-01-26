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

type Props = {
  experience: Experience;
};

export const ExperienceItemComponent: React.FC<Props> = ({ experience }) => {
  const t = useTranslations("experience");

  return (
    <Card sx={{ display: "flex", marginBottom: "10px" }} className="card">
      <CardMedia
        component="img"
        sx={{ height: 64, width: 64, margin: "8px 0 0 8px" }}
        image={experience.company.image}
        alt={experience.company.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "4px 8px !important",
            minHeight: "80px",
          }}
        >
          <Typography component="h3" variant="h3">
            {experience.title}
          </Typography>
          <Box
            display="flex"
            color="text.secondary"
            alignItems="center"
            flexWrap="wrap"
          >
            {experience.company.title && (
              <Chip
                icon={<Business />}
                label={experience.company.title}
                size="small"
                variant="medium"
              />
            )}
            {experience.duration && (
              <Chip
                icon={<DateRange />}
                label={experience.duration}
                size="small"
                variant="medium"
              />
            )}
            {experience.location && (
              <Chip
                icon={<Place />}
                label={experience.location}
                size="small"
                variant="medium"
              />
            )}
          </Box>
          {experience.description &&
            experience.description
              ?.split("\n")
              ?.map((line) => <Typography key={experience.id+line}>{line}</Typography>)}
        </CardContent>
      </Box>
    </Card>
  );
};
