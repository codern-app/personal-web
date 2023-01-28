import { Card, Box, Typography } from '@mui/material';
import { Language } from '../../features/firebase/models/profile.model';

type Props = {
  language: Language;
};

export const LanguageItemComponent: React.FC<Props> = ({ language }) => {
  return (
    <Card sx={{ marginRight: 1 }}>
      <Box display="flex" p={1}>
        <Typography pr={1}>{language.title}</Typography>
        <Typography color="text.secondary">{language.level}</Typography>
      </Box>
    </Card>
  );
};
