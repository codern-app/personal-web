import { Language } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { LanguageItemComponent } from '../items/language-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';

type Props = {
  isExpanded?: boolean;
};

export const LanguagesSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('languages');
  const { profile } = useFirebase();

  return (
    <SectionComponent color="grey.100" id="languages">
      <SectionHeaderComponent title={t('title')} icon={<Language />} isExpanded={isExpanded} />

      <Box mt={2} mb={2} display="flex" flexWrap="wrap">
        {profile?.languages?.map((language) => (
          <LanguageItemComponent key={language.id} language={language} />
        ))}
      </Box>
    </SectionComponent>
  );
};
