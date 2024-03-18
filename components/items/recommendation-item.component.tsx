import { Business, Person } from '@mui/icons-material';
import { Card, Box, CardContent, Typography, Chip, Tooltip, Avatar } from '@mui/material';
import { Recommendation } from '../../features/firebase/models/recommendation.model';

export type RecommendationItemComponentProps = {
  recommendation: Recommendation;
};

export const RecommendationItemComponent: React.FC<RecommendationItemComponentProps> = ({
  recommendation,
}) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: '10px' }} className="card">
      <Tooltip title={recommendation.name}>
        <Avatar
          sx={{ height: 64, width: 64, margin: '8px 0 0 8px' }}
          src={recommendation.image}
          alt={recommendation.name}
        />
      </Tooltip>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '8px !important',
            minHeight: '80px',
          }}
        >
          <Typography component="h3" variant="h3">
            {recommendation.name}
          </Typography>
          <Box display="flex" color="text.secondary" alignItems="center" flexWrap="wrap">
            {recommendation.title && (
              <Chip
                icon={<Person />}
                label={recommendation.title}
                size="small"
                variant="medium"
                color="secondary"
              />
            )}
            {recommendation.companyName && (
              <Chip
                icon={<Business />}
                label={recommendation.companyName}
                size="small"
                variant="medium"
              />
            )}
          </Box>
          {recommendation.recommendation &&
            recommendation.recommendation
              ?.split('\n')
              ?.map((line) => <Typography key={recommendation.id + line}>{line}</Typography>)}
        </CardContent>
      </Box>
    </Card>
  );
};
