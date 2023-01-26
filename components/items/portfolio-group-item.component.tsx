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
import { PortfolioSection } from "../../features/firebase/models/portfolio.model";
import { PortfolioItemComponent } from "./portfolio-item.component";

type Props = {
  portfolioSection: PortfolioSection;
};

export const PortfolioGroupItemComponent: React.FC<Props> = ({
  portfolioSection,
}) => {
  const t = useTranslations("portfolio");

  return (
    <Card sx={{ display: "flex", marginBottom: "10px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: '100%' }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "8px !important",
            width: "100%",
          }}
        >
          <Typography component="h3" variant="h3">
            {portfolioSection.title}
          </Typography>
          <Box display="flex" flexDirection="column" sx={{flexGrow: 1}}>
            {portfolioSection.portfolio?.map((portfolio) => (
              <PortfolioItemComponent
                key={portfolio.id}
                portfolio={portfolio}
              />
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
