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

type Props = {
  portfolio: Portfolio;
};

export const PortfolioItemComponent: React.FC<Props> = ({ portfolio }) => {
  const t = useTranslations("portfolio");

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
            <Typography component="h3" variant="h4" pr={1}>
              {portfolio.title}
            </Typography>
            {portfolio.tags?.map((tag) => (
              <Chip key={tag} size="small" variant="small" label={tag} />
            ))}
            <IconButton
              color="primary"
              target="_blank"
              size="small"
              href={portfolio.link}
            >
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography>{portfolio.description}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
