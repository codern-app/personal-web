import { Recommend } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { RecommendationItemComponent } from '../items/recommendation-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';

type Props = {
  isExpanded?: boolean;
};

export const RecommendationSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('recommendations');
  const { recommendations } = useFirebase();

  if (!recommendations) {
    return <></>;
  }

  return (
    <SectionComponent color="grey.100" id="recommendations">
      <SectionHeaderComponent title={t('title')} icon={<Recommend />} isExpanded={isExpanded} />
      <Box mt={2}>
        {recommendations?.recommendations?.map((recommendationItem) => (
          <RecommendationItemComponent
            key={recommendationItem.id}
            recommendation={recommendationItem}
          />
        ))}
      </Box>
    </SectionComponent>
  );
};
