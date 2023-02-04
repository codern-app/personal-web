import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { RecommendationItemComponent } from '../items/recommendation-item.component';

export const RecommendationSectionComponent: React.FC = () => {
  const t = useTranslations('recommendations');
  const { recommendations } = useFirebase();

  if (!recommendations) {
    return <></>;
  }

  return (
    <SectionComponent color="grey.100" id="recommendations">
      <Typography variant="h2" component="h2" mt={2}>
        {t('title')}
      </Typography>
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
