import { Card, Box, CardContent, Typography, Chip, IconButton } from '@mui/material';
import { Portfolio } from '../../features/firebase/models/portfolio.model';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export type PortfolioItemComponentProps = {
  portfolio: Portfolio;
};

export const PortfolioItemComponent: React.FC<PortfolioItemComponentProps> = ({ portfolio }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: '10px' }} className="card">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '4px 8px !important',
          }}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography component="h3" variant="h4" pr={1}>
              {portfolio.title}
            </Typography>
            {portfolio.tags?.map((tag) => (
              <Chip key={tag} size="small" variant="small" label={tag} />
            ))}
            <IconButton color="primary" target="_blank" size="small" href={portfolio.link}>
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography>{portfolio.description}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
