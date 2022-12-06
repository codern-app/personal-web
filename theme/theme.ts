import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: green[500],
    },
  },
  typography: {
    fontSize: 12,
    h1: { fontSize: 24, fontWeight: 'bold', lineHeight: 1.5 },
    h2: { fontSize: 20, fontWeight: 'bold', lineHeight: 1.5 },
    h3: { fontSize: 16, fontWeight: 'bold', lineHeight: 1.5 },
    h4: { fontSize: 12, fontWeight: 'bold', lineHeight: 1.5 },
  },
});
