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
import { Experience } from "../features/firebase/models/experience.model";

type Props = {
  experience: Experience;
};

export const ExperienceItemComponent: React.FC<Props> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("experience");

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card sx={{ display: "flex", marginBottom: "10px" }}>
      <CardMedia
        component="img"
        sx={{ height: 64, width: 64, margin: "16px 0 0 8px" }}
        image={experience.company.image}
        alt={experience.company.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "8px !important",
            minHeight: "100px",
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
                variant="experience"
              />
            )}
            {experience.duration && (
              <Chip
                icon={<DateRange />}
                label={experience.duration}
                size="small"
                variant="experience"
              />
            )}
            {experience.location && (
              <Chip
                icon={<Place />}
                label={experience.location}
                size="small"
                variant="experience"
              />
            )}
          </Box>
          {experience.description && (
            <>
              <Collapse in={isExpanded} collapsedSize={24}>
                <Typography>{experience.description}</Typography>
              </Collapse>
              <Button
                onClick={toggleDescription}
                size="small"
                endIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
              >
                {isExpanded ? t("show_less") : t("show_more")}
              </Button>
            </>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};
