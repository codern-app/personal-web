import { Box, Typography } from '@mui/material';
import { PortfolioSection } from '../../features/firebase/models/portfolio.model';
import { PortfolioItemComponent } from './portfolio-item.component';
import { theme } from '../../theme/theme';

export type PortfolioGroupItemComponentProps = {
  portfolioSection: PortfolioSection;
};

export const PortfolioGroupItemComponent: React.FC<PortfolioGroupItemComponentProps> = ({
  portfolioSection,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography component="h3" variant="h3" my={1}>
        {portfolioSection.title}
      </Typography>
      {portfolioSection.description && <Typography>{portfolioSection.description}</Typography>}
      <Box
        sx={{
          columnCount: 1,
          columnGap: 1,
          [theme.breakpoints.up('md')]: {
            columnCount: 2,
          },
          '@media print': {
            columnCount: 2,
          },
        }}
      >
        {portfolioSection.portfolio?.map((portfolio) => (
          <PortfolioItemComponent key={portfolio.id} portfolio={portfolio} />
        ))}
      </Box>
    </Box>
  );
};
