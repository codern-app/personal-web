import { Theme } from '@mui/material/styles/createTheme';
import { config } from '../configs/config';
import { violetTheme } from './theme-violet';
import { defaultTheme } from './theme-default';

export const theme: Theme = config.configTheme === 'VIOLET' ? violetTheme : defaultTheme;

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    medium: true;
    small: true;
  }
}
