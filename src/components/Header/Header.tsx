import * as React from 'react';

import { createStyles, withStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, List } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';

import { ProfileContainer } from '../../features/profile/components';
import { useSignInService } from '../../features/signin/hooks/useSignInService';

const drawerWidth = 286;

const sideBarIndexEnum = {
  dashboard: 0,
  product: 12,
};

const styles = createStyles({
  formCompanyText: {
    padding: 16,
  },
});

type HeaderProps = {
  currentThemeMode: 'light' | 'dark';
  onChangeThemeClick: () => void;
  onChangeLanguage: (lang: string) => void;
  window?: () => Window;
  classes: any;
};

const Header = withStyles(styles)((props: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameRegex = location.pathname.replace(/^\//, '');
  const sideBarIndex = Object.keys(sideBarIndexEnum).indexOf(pathnameRegex);
  const [selectedIndex, setSelectedIndex] = React.useState(sideBarIndex);
  const { window, classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { handleLogout } = useSignInService();

  const handleListItemClick = (index: number, link: string) => {
    setSelectedIndex(index);
    navigate(link);
  };

  React.useEffect(() => {
    handleListItemClick(selectedIndex, pathnameRegex);
  }, [selectedIndex]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.formCompanyText}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link to="/dashboard">
          <Box
            component="img"
            sx={{
              height: 55,
              marginBottom: '32px',
            }}
            alt="Uxer"
            src="icons/logo.png"
          />
        </Link>
      </Toolbar>
      <List
        component="nav"
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          height: 'calc(100vh - 165px)',
          overflow: 'auto',
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: '#7108aa',
            '&, & .MuiListItemIcon-root': {
              color: '#fff',
            },
          },
          '& .MuiListItemButton-root': {
            borderRadius: '10px',
          },
          '& .MuiListItemButton-root:hover': {
            bgcolor: '#eeddf8',
            '&, & .MuiListItemIcon-root': {
              color: '#596780',
            },
          },
        }}
      >
        <ListItemButton
          onClick={() => handleListItemClick(0, 'dashboard')}
          selected={selectedIndex === 0}
        >
          <ListItemIcon>
            <img
              src="icons/home.svg"
              style={{
                filter: `${
                  selectedIndex === 0 ? 'brightness(0) invert(1)' : ''
                }`,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleListItemClick(1, 'product')}
          selected={selectedIndex === 1}
        >
          <ListItemIcon>
            <img
              src="icons/document-text.svg"
              style={{
                filter: `${
                  selectedIndex === 1 ? 'brightness(0) invert(1)' : ''
                }`,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
      </List>

      <List sx={{ width: '100%' }}>
        <Divider />
        <ListItem key={'text'} onClick={handleLogout} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img src="icons/logout.svg" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            flexWrap: 'wrap',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              color: '#000',
              '@media (max-width: 780px)': {
                mr: 1,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <nav>
            <ProfileContainer />
          </nav>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          '*::-webkit-scrollbar': {
            maxHeight: '8px',
            maxWidth: '8px',
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#f5f5f5',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            borderRadius: '10px',
            bgcolor: '#e4e4e4',
          },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: 0,
              overflowY: 'hidden',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { xs: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <main>
          <Box
            sx={{
              bcolor: '#f5f5f5',
            }}
          >
            <Outlet />
          </Box>
        </main>
      </Box>
    </Box>
  );
});

export default Header;
