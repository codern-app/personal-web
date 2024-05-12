import { Business, DateRange, Place } from '@mui/icons-material';
import { Card, Box, CardContent, Typography, CardMedia, Chip, Tooltip } from '@mui/material';
import { Experience } from '../../features/firebase/models/experience.model';

export type ExperienceItemComponentProps = {
  experience: Experience;
};

export const ExperienceItemComponent: React.FC<ExperienceItemComponentProps> = ({ experience }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 0.5 }} className="card">
      <Tooltip title={experience.company.title}>
        <CardMedia
          component="img"
          sx={{ height: 64, width: 64, margin: '8px 0 0 8px' }}
          image={experience.company.image}
          alt={experience.company.title}
        />
      </Tooltip>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '4px 8px !important',
            minHeight: '80px',
          }}
        >
          <Typography component="h3" variant="h3">
            {experience.title}
          </Typography>
          <Box display="flex" color="text.secondary" alignItems="center" flexWrap="wrap">
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
              <Chip icon={<Place />} label={experience.location} size="small" variant="medium" />
            )}
          </Box>
          {experience.description &&
            experience.description
              ?.split('\n')
              ?.map((line) => <Typography key={experience.id + line}>{line}</Typography>)}
        </CardContent>
      </Box>
    </Card>
  );
};
