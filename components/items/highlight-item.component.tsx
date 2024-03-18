import { Box, Typography } from '@mui/material';
import { Highlight } from '../../features/firebase/models/highlight.model';

export type HighlightItemComponentProps = {
  highlight: Highlight;
};

export const HighlightItemComponent: React.FC<HighlightItemComponentProps> = ({ highlight }) => {
  return (
    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography component="h2" variant="h3">
        {highlight.title}
      </Typography>
      <Typography>{highlight.description}</Typography>
    </Box>
  );
};
