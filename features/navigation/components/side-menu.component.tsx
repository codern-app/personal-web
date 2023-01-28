import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import { menuConfig } from '../configs/menu.config';

type Props = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isSideBarOpen: boolean) => void;
};
export const SideMenuComponent: React.FC<Props> = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const router = useRouter();
  return (
    <Drawer
      anchor="left"
      open={isSideBarOpen}
      onClose={() => {
        setIsSideBarOpen(false);
      }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {menuConfig.sideMenu.map((itemMenu) => (
            <ListItem
              key={itemMenu.title}
              disablePadding
              onClick={() => {
                router.push(itemMenu.link);
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <itemMenu.icon />
                </ListItemIcon>
                <ListItemText primary={itemMenu.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
