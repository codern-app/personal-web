import { LocalLibrary } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useFirebase } from '../../features/firebase/providers/firebase.hook';
import { SectionComponent } from '../../features/navigation/components/section.component';
import { PublicationItemComponent } from '../items/publication-item.component';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { theme } from '../../theme/theme';

type Props = {
  isExpanded?: boolean;
};

export const PublicationSectionComponent: React.FC<Props> = ({ isExpanded }) => {
  const t = useTranslations('publication');
  const { profile } = useFirebase();

  if (!profile?.publications) {
    return <></>;
  }

  return (
    <SectionComponent color="grey.100" id="publication">
      <SectionHeaderComponent title={t('title')} icon={<LocalLibrary />} isExpanded={isExpanded} />
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
        {profile?.publications?.map((publication) => (
          <PublicationItemComponent key={publication.id} publication={publication} />
        ))}
      </Box>
    </SectionComponent>
  );
};
