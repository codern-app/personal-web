import { School } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { EducationItemComponent } from '../items/education-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';

type Props = {
  isExpanded?: boolean;
};

export const EducationSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('education');
  const { profile } = useFirebase();

  return (
    <SectionComponent color="grey.200" id="education">
      <SectionHeaderComponent title={t('title')} icon={<School />} isExpanded={isExpanded} />
      <Box mt={2}>
        {profile?.education?.map((educationItem) => (
          <EducationItemComponent key={educationItem.id} education={educationItem} />
        ))}
      </Box>
    </SectionComponent>
  );
};
