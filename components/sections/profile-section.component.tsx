import { Business, DateRange, Email, Home, Phone, Print } from '@mui/icons-material';
import { Box, Avatar, Typography, Chip, Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { config } from '../../configs/config';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { theme } from '../../theme/theme';
import { IconComponent } from '../shared/icon.component';

export const ProfileSectionComponent: React.FC = () => {
  const t = useTranslations('profile');
  const { profile } = useFirebase();

  const handlePrint = () => {
    window.print();
  };

  return (
    <SectionComponent color="secondary.light" id="profile">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 1,
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
          },
        }}
        className="profile-header"
      >
        <Avatar alt={profile?.firstName} src={profile?.image} sx={{ width: 180, height: 180 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flex: 1,
            [theme.breakpoints.up('md')]: {
              marginLeft: 2,
              display: 'block',
              textAlign: 'left',
            },
          }}
          className="profile-details"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography component="h1" variant="h1">
              {profile?.firstName} {profile?.lastName}
            </Typography>
            <Typography variant="h3" color="secondary.dark" pl={1} pt={1}>
              {profile?.nameTitle}
            </Typography>
          </Box>
          <Typography variant="h3" color="primary.dark">
            {profile?.title}
          </Typography>
          <Typography>{profile?.description}</Typography>
          <Box display="flex" flexWrap="wrap">
            {profile?.location && (
              <Chip
                icon={<Business />}
                label={profile.location}
                size="small"
                variant="medium"
                color="primary"
              />
            )}
            {profile?.yearOfBirth && (
              <Chip
                icon={<DateRange />}
                label={profile?.yearOfBirth}
                size="small"
                variant="medium"
                color="primary"
              />
            )}
            {profile?.email && (
              <Chip
                icon={<Email />}
                label={profile?.email}
                size="small"
                variant="medium"
                color="primary"
              />
            )}
            {profile?.phone && (
              <Chip
                icon={<Phone />}
                label={profile?.phone}
                size="small"
                variant="medium"
                color="primary"
              />
            )}
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Box className="show-print">
              <Button
                sx={{
                  color: 'text.secondary',
                  paddingY: 0,
                  textTransform: 'lowercase',
                }}
                startIcon={<Home />}
                href={config.siteUrl}
              >
                {config.siteUrl}
              </Button>
            </Box>
            {profile?.social?.map((item) => (
              <Button
                key={item.id}
                sx={{
                  color: 'text.secondary',
                  paddingY: 0,
                  textTransform: 'lowercase',
                }}
                startIcon={<IconComponent icon={item.icon} />}
                href={item.link}
                target="_blank"
              >
                {item.link}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}
            className="hide-print"
          >
            <Button startIcon={<Print />} color="primary" variant="contained" onClick={handlePrint}>
              {t('print')}
            </Button>
          </Box>
        </Box>
      </Box>
    </SectionComponent>
  );
};
