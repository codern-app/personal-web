import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { PortfolioGroupItemComponent } from '../items/portfolio-group-item.component';

export const PortfolioSectionComponent: React.FC = () => {
  const t = useTranslations('portfolio');
  const { portfolios } = useFirebase();

  return (
    <SectionComponent color="grey.200" id="portfolio">
      <Typography variant="h2" component="h2" mt={2}>
        {t('title')}
      </Typography>
      <Box mt={2}>
        {portfolios?.map((portfolio) => (
          <PortfolioGroupItemComponent key={portfolio.id} portfolioSection={portfolio} />
        ))}
      </Box>
    </SectionComponent>
  );
};
