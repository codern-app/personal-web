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
  IconButton,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Experience } from "../../features/firebase/models/experience.model";
import { TagGroup } from "../../features/firebase/models/firebase.model";
import {
  Portfolio,
  PortfolioSection,
} from "../../features/firebase/models/portfolio.model";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Publication } from "../../features/firebase/models/profile.model";

type Props = {
  publication: Publication;
};

export const PublicationItemComponent: React.FC<Props> = ({ publication }) => {
  const t = useTranslations("publication");

  return (
    <Card sx={{ display: "flex", marginBottom: "10px" }} className="card">
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
            <Typography component="h3" variant="h4">
              {publication.title}
            </Typography>
            <IconButton
              color="primary"
              target="_blank"
              size="small"
              href={publication.link}
              sx={{marginRight: 1}}
            >
              <OpenInNewIcon />
            </IconButton>
            {publication.journal && (
              <Chip
                icon={<Business />}
                label={publication.journal}
                size="small"
                variant="medium"
              />
            )}
            {publication.date && (
              <Chip
                icon={<DateRange />}
                label={publication.date}
                size="small"
                variant="medium"
              />
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
