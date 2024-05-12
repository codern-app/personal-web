import { FactCheck } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { SkillItemComponent } from '../items/skill-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { theme } from '../../theme/theme';

type Props = {
  isExpanded?: boolean;
};

export const SkillsSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('skills');
  const { profile } = useFirebase();

  if (!profile?.skills) {
    return <></>;
  }

  return (
    <SectionComponent color="grey.200" id="skills">
      <SectionHeaderComponent title={t('title')} icon={<FactCheck />} isExpanded={isExpanded} />
      <Box
        mt={1}
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
        {profile?.skills?.map((skillItem) => (
          <SkillItemComponent key={skillItem.id} skill={skillItem} />
        ))}
      </Box>
    </SectionComponent>
  );
};
