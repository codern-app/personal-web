import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Tooltip, useMediaQuery } from '@mui/material';
import { config } from '../../../configs/config';
import { menuConfig } from '../configs/menu.config';
import { theme } from '../../../theme/theme';

type Props = {
  setIsSideBarOpen: (isSideBarOpen: boolean) => void;
};

export const HeaderComponent: React.FC<Props> = ({ setIsSideBarOpen }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <header className="hide-print">
      <Box
        sx={{
          flexGrow: 1,
          marginBottom: 7,
          [theme.breakpoints.up('md')]: {
            marginBottom: 8,
          },
        }}
      >
        <AppBar position="fixed">
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  setIsSideBarOpen(true);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                {config.siteName}
              </Typography>
              {isDesktop &&
                menuConfig.topMenu.map((menuItem) => (
                  <Tooltip key={menuItem.title} title={menuItem.title}>
                    <IconButton href={menuItem.link}>
                      <menuItem.icon />
                    </IconButton>
                  </Tooltip>
                ))}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </header>
  );
};
