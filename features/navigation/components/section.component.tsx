import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color?: string;
  id?: string;
};

export const SectionComponent: React.FC<Props> = ({ children, color, id }) => {
  return (
    <section id={id}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: color,
          paddingTop: 1,
          paddingBottom: 2,
        }}
      >
        <Container>{children}</Container>
      </Box>
    </section>
  );
};
