import { Business } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { ExperienceItemComponent } from '../items/experience-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';

type Props = {
  isExpanded?: boolean;
};

export const ExperienceSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('experience');
  const { experience } = useFirebase();

  return (
    <SectionComponent color="grey.100" id="experience">
      <SectionHeaderComponent title={t('title')} icon={<Business />} isExpanded={isExpanded} />
      <Box mt={2}>
        {experience?.map((experienceItem) => (
          <ExperienceItemComponent key={experienceItem.id} experience={experienceItem} />
        ))}
      </Box>
    </SectionComponent>
  );
};
