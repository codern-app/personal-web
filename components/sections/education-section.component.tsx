import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { EducationItemComponent } from '../items/education-item.component';

export const EducationSectionComponent: React.FC = () => {
  const t = useTranslations('education');
  const { profile } = useFirebase();

  return (
    <SectionComponent color="grey.200" id="education">
      <Typography variant="h2" component="h2" mt={2}>
        {t('title')}
      </Typography>
      <Box mt={2}>
        {profile?.education?.map((educationItem) => (
          <EducationItemComponent key={educationItem.id} education={educationItem} />
        ))}
      </Box>
    </SectionComponent>
  );
};
