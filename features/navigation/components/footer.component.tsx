import Box from "@mui/material/Box";
import {
  Button,
  Chip,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { menuConfig } from "../configs/menu.config";
import Link from "next/link";
import { useFirebase } from "../../../features/firebase/providers/firebase.hook";
import { useMemo } from "react";
import { Email, Home } from "@mui/icons-material";
import { config } from "../../../configs/config";

export const FooterComponent: React.FC = () => {
  const { profile, isLoading } = useFirebase();
  const t = useTranslations("general");
  if (isLoading) {
    return <></>;
  }

  return (
    <footer>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "secondary.main",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Container>
          <Typography variant="h2" component="h2">
            {profile?.firstName} {profile?.lastName}
          </Typography>
          <Typography>{profile?.description}</Typography>
          <Box display="flex">
            {profile?.email && (
              <Tooltip title={profile?.email}>
                <Chip
                  icon={<Email />}
                  label={profile?.email}
                  size="small"
                  variant="medium"
                />
              </Tooltip>
            )}
            {config?.siteUrl && (
              <Box className="show-print">
                <Tooltip title={config.siteUrl}>
                  <Chip
                    icon={<Home />}
                    label={config.siteUrl}
                    size="small"
                    variant="medium"
                  />
                </Tooltip>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "secondary.light",
          paddingTop: 2,
          paddingBottom: 12,
        }}
      >
        <Container>
          <Grid container spacing={2} columns={3}>
            <Grid item xs={1}>
              <Typography variant="h3" component="h3">
                {t("pages")}
              </Typography>
              {menuConfig.footerMenu.map((menuItem) => (
                <Box key={menuItem.link}>
                  <Tooltip title={menuItem.title}>
                    <Link href={menuItem.link}>
                      <Typography>{menuItem.title}</Typography>
                    </Link>
                  </Tooltip>
                </Box>
              ))}
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h3" component="h3">
                {t("external")}
              </Typography>
              {profile?.footer?.pageSource && (
                <Box>
                  <Tooltip title={t("pageSource")}>
                    <Link href={profile?.footer?.pageSource} target="_blank">
                      <Typography>{t("pageSource")}</Typography>
                    </Link>
                  </Tooltip>
                </Box>
              )}
              {profile?.footer?.googlePlay && (
                <Box>
                  <Tooltip title={t("googlePlay")}>
                    <Link href={profile?.footer?.googlePlay} target="_blank">
                      <Typography>{t("googlePlay")}</Typography>
                    </Link>
                  </Tooltip>
                </Box>
              )}
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h3" component="h3">
                {t("social")}
              </Typography>
              {profile?.social?.map((menuItem) => (
                <Box key={menuItem.link}>
                  <Tooltip title={menuItem.title}>
                    <Link href={menuItem.link}>
                      <Typography>{menuItem.title}</Typography>
                    </Link>
                  </Tooltip>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
