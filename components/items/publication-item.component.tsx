import { Business, DateRange } from '@mui/icons-material';
import { Card, Box, CardContent, Typography, Chip, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Publication } from '../../features/firebase/models/profile.model';

export type PublicationItemComponentProps = {
  publication: Publication;
};

export const PublicationItemComponent: React.FC<PublicationItemComponentProps> = ({
  publication,
}) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 0.5 }} className="card">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '4px 8px !important',
          }}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography component="h3" variant="h4">
              {publication.title}
            </Typography>
            <IconButton
              color="primary"
              target="_blank"
              size="small"
              href={publication.link}
              sx={{ marginRight: 1 }}
            >
              <OpenInNewIcon />
            </IconButton>
            {publication.journal && (
              <Chip icon={<Business />} label={publication.journal} size="small" variant="medium" />
            )}
            {publication.date && (
              <Chip icon={<DateRange />} label={publication.date} size="small" variant="medium" />
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
