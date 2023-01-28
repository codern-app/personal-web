import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { LanguageItemComponent } from '../items/language-item.component';

export const LanguagesSectionComponent: React.FC = () => {
  const t = useTranslations('languages');
  const { profile } = useFirebase();

  return (
    <SectionComponent color="grey.100" id="languages">
      <Typography variant="h2" component="h2" mt={2}>
        {t('title')}
      </Typography>
      <Box mt={2} mb={2} display="flex" flexWrap="wrap">
        {profile?.languages?.map((language) => (
          <LanguageItemComponent key={language.id} language={language} />
        ))}
      </Box>
    </SectionComponent>
  );
};
