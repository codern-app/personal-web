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
import { useFirebase } from '../../firebase/providers/firebase.hook';
import { IconComponent } from "../../../components/shared/icon.component";

type Props = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isSideBarOpen: boolean) => void;
};
export const SideMenuComponent: React.FC<Props> = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const router = useRouter();
  const { profile } = useFirebase();

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
            <ListItem key={itemMenu.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(itemMenu.link);
                }}
              >
                <ListItemIcon>
                  <itemMenu.icon />
                </ListItemIcon>
                <ListItemText primary={itemMenu.title} />
              </ListItemButton>
            </ListItem>
          ))}
          {profile?.social?.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton href={item.link ?? ''} target="_blank">
                <ListItemIcon>
                  <IconComponent icon={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
