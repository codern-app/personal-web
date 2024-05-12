import { Home } from '@mui/icons-material';
import { MenuItem } from '../models/menu.model';
import { config } from '../../../configs/config';

const homeMenuItem: MenuItem = {
  title: 'Home',
  link: config.siteUrl ?? '/',
  icon: Home,
};

const topMenu: MenuItem[] = [homeMenuItem];
const sideMenu: MenuItem[] = [homeMenuItem];
const footerMenu: MenuItem[] = [homeMenuItem];

export const menuConfig = {
  topMenu,
  sideMenu,
  footerMenu,
};
