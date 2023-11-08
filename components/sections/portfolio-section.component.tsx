import { Collections } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { PortfolioGroupItemComponent } from '../items/portfolio-group-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';

type Props = {
  isExpanded?: boolean;
};

export const PortfolioSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('portfolio');
  const { portfolios } = useFirebase();

  if (!portfolios) {
    return <></>;
  }

  return (
    <SectionComponent color="grey.200" id="portfolio">
      <SectionHeaderComponent title={t('title')} icon={<Collections />} isExpanded={isExpanded} />

      <Box mt={2}>
        {portfolios?.map((portfolio) => (
          <PortfolioGroupItemComponent key={portfolio.id} portfolioSection={portfolio} />
        ))}
      </Box>
    </SectionComponent>
  );
};
