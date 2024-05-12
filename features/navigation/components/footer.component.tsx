import Box from '@mui/material/Box';
import { Chip, Container, Grid, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { useTranslations } from 'next-intl';
import { menuConfig } from '../configs/menu.config';
import Link from 'next/link';
import { useFirebase } from '../../firebase/providers/firebase.hook';
import { Email, Home } from '@mui/icons-material';
import { config } from '../../../configs/config';
import { theme } from '../../../theme/theme';

export const FooterComponent: React.FC = () => {
  const { profile, isLoading } = useFirebase();
  const t = useTranslations('general');
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (isLoading) {
    return <></>;
  }

  return (
    <footer>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: 'secondary.main',
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
                <Chip icon={<Email />} label={profile?.email} size="small" variant="medium" />
              </Tooltip>
            )}
            {config?.siteUrl && (
              <Box className="show-print">
                <Tooltip title={config.siteUrl}>
                  <Chip icon={<Home />} label={config.siteUrl} size="small" variant="medium" />
                </Tooltip>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: 'secondary.light',
          paddingTop: 2,
          paddingBottom: 12,
          '@media print': {
            display: 'none',
          },
        }}
      >
        <Container>
          <Grid container spacing={1} columns={isDesktop ? 3 : 1}>
            <Grid item xs={1}>
              <Typography variant="h3" component="h3">
                {t('pages')}
              </Typography>
              {menuConfig.footerMenu.map((menuItem) => (
                <Box key={menuItem.link}>
                  <Link href={menuItem.link}>
                    <Typography>{menuItem.title}</Typography>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h3" component="h3">
                {t('external')}
              </Typography>
              {profile?.footer?.pageSource && (
                <Box>
                  <Link href={profile?.footer?.pageSource} target="_blank">
                    <Typography>{t('pageSource')}</Typography>
                  </Link>
                </Box>
              )}
              {profile?.footer?.storybook && (
                <Box>
                  <Link href={profile?.footer?.storybook} target="_blank">
                    <Typography>{t('storybook')}</Typography>
                  </Link>
                </Box>
              )}
              {profile?.footer?.googlePlay && (
                <Box>
                  <Link href={profile?.footer?.googlePlay} target="_blank">
                    <Typography>{t('googlePlay')}</Typography>
                  </Link>
                </Box>
              )}
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h3" component="h3">
                {t('social')}
              </Typography>
              {profile?.social?.map((menuItem) => (
                <Box key={menuItem.link}>
                  <Link href={menuItem.link}>
                    <Typography>{menuItem.title}</Typography>
                  </Link>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
