import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c37b7c',
    },
    secondary: {
      main: '#c7b9b7',
    },
  },
  typography: {
    fontSize: 12,
    h1: { fontSize: 24, fontWeight: 'bold', lineHeight: 1.5 },
    h2: { fontSize: 18, fontWeight: 'bold', lineHeight: 1.5 },
    h3: { fontSize: 14, fontWeight: 'bold', lineHeight: 1.5 },
    h4: { fontSize: 12, fontWeight: 'bold', lineHeight: 1.5 },
    body1: { fontSize: 12 },
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'medium' },
          style: { padding: '0 2px 0 4px', margin: '4px 8px 4px 0', height: '22px' },
        },
        {
          props: { variant: 'small' },
          style: {
            padding: '0 1px 0 2px',
            margin: '2px 4px 2px 0',
            fontSize: '10px',
            height: '18px',
          },
        },
      ],
    },
  },
});
