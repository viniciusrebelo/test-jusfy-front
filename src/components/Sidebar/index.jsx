import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Button, Collapse, Grid, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowIcon from './icons/arrow-left.svg'
import Logo from './icons/logo.svg'
import HomeIcon from './icons/home-2.svg'
import ClientesIcon from './icons/element-3.svg'
import CalculoIcon from './icons/receipt-text.svg'
import SubUserIcon from './icons/card.svg'
import JusMatchIcon from './icons/setting-2.svg'
import JusFileIcon from './icons/message.svg'
import Call from './icons/call.svg'
import NewCalc from './icons/note-favorite.svg'
import UserCard from './UserCard';
import Header from './Header';

const drawerWidth = 312;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: '#111219',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
});

const closedMixin = (theme) => ({
  background: '#111219',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: theme.spacing(3, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const LabelSetting = ({ children }) => (
  <div
    style={{
      width: '40px',
      height: '20px',
      //fontFamily: 'Poppins',
      paddingLeft: 40,
      marginTop: 7,
      marginBottom: 7,
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '13px',
      lineHeight: '20px',
      letterSpacing: '0.05em',
      color: '#898989',
    }}
  >
    {children}
  </div>
);

const ItemIcon = ({ children }) => <ListItemIcon
  sx={{
    pl: !open ? 0.4 : 4,
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
  }}
>
  {children}
</ListItemIcon>

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: '#111219',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const ScrollableList = styled(List)`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 2px;
    height: 8px;
  }

  &::-webkit-scrollbar:hover{
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: '#111219';
  }

  &::-webkit-scrollbar-thumb {
    //background-color: #aaa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover{
    background-color: #41C78F;
  }
`;



const Sidebar = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState('');

  const handleDrawerToagle = () => {
    setOpen(!open);
  };

  const DrawerFooter = styled('div')(({ theme, isopen }) => ({
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#111219',
    //padding: theme.spacing(3, 2),
    pl: 10,
    height: isopen ? 80 : 75,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const MenuItem = ({ children, item }) => <ListItemButton sx={{
    background: selectedItem === item ? 'linear-gradient(90deg, rgba(65, 199, 143, 0.12) 0%, #41C78F 100%)' : 'none',
    borderRadius: '4.09902px',
    minWidth: 0,
    height: 55,
    mr: open ? 0 : 'auto',
    justifyContent: 'center',
    color: '#898989',
    transition: 'background 0.3s ease-in-out',
    ':hover': {
      //boxShadow: '0px 0px 10px #41C78F, 0px 0px 20px #41C78F, 0px 0px 30px #41C78F, 0px 0px 40px #41C78F, 0px 0px 70px #41C78F, 0px 0px 80px #41C78F, 0px 0px 100px #41C78F, 0px 0px 150px #41C78F',
      background: selectedItem === item ? 'rgba(65, 199, 143, 0.12)' : 'rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
    },
  }}
    onClick={() => setSelectedItem(item)}
  >
    {children}
  </ListItemButton>;

  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          <Collapse orientation="horizontal" in={open}>
            <img src={Logo} alt="logo" />
          </Collapse>
          <IconButton onClick={handleDrawerToagle} disableFocusRipple style={{ '&:focus': 'none' }}>
            <img src={ArrowIcon} style={{ transform: !open ? 'scaleX(-1)' : 'none' }} alt="Arrow Icon" />
          </IconButton>
        </DrawerHeader>
        <Collapse orientation="horizontal" in={open}>
          <LabelSetting>MENU</LabelSetting>
        </Collapse>
        <ScrollableList style={{
          maxHeight: '165px'
        }}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="Início">
              <ItemIcon>
                <img src={HomeIcon} alt="HomeIcon" />
              </ItemIcon>
              <ListItemText primary="Início" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="Clientes">
              <ItemIcon>
                <img src={ClientesIcon} alt="ClientesIcon" />
              </ItemIcon>
              <ListItemText primary="Clientes" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="Cálculos">
              <ItemIcon>
                <img src={CalculoIcon} alt="CalculoIcon" />
              </ItemIcon>
              <ListItemText primary="Cálculos" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="Subusuários">
              <ItemIcon>
                <img src={SubUserIcon} alt="SubUserIcon" />
              </ItemIcon>
              <ListItemText primary="Subusuários" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
        </ScrollableList>
        <Collapse orientation="horizontal" in={open}>
          <LabelSetting>FERRAMENTAS</LabelSetting>
        </Collapse>
        <ScrollableList style={{
          //minHeight: '150px',
          maxHeight: '9.5rem'
        }}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="Jusmatch">
              <ItemIcon>
                <img src={JusMatchIcon} alt="JusMatchIcon" />
              </ItemIcon>
              <ListItemText primary="Jusmatch" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="JusDecision">
              <ItemIcon>
                <img src={JusFileIcon} alt="JusFileIcon" />
              </ItemIcon>
              <ListItemText primary="JusDecision" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="Jusfile">
              <ItemIcon>
                <img src={Call} alt="Jusfile" />
              </ItemIcon>
              <ListItemText primary="Jusfile" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="JusFinder">
              <ItemIcon>
                <img src={Call} alt="JusFinder" />
              </ItemIcon>
              <ListItemText primary="JusFinder" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="JusAgenda">
              <ItemIcon>
                <img src={Call} alt="JusAgenda" />
              </ItemIcon>
              <ListItemText primary="JusAgenda" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuItem item="JusSign">
              <ItemIcon>
                <img src={Call} alt="JusSign" />
              </ItemIcon>
              <ListItemText primary="JusSign" sx={{ opacity: open ? 1 : 0 }} />
            </MenuItem>
          </ListItem>
        </ScrollableList>
        <Button
          style={{
            position: 'absolute',
            bottom: open ? 80 : 77,
            width: '100%',
            height: 55,
            background: '#41C78F',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            fontWeight: 500,
            fontSize: '16.5px',
            padding: '16px',
            color: '#F7F7F7',


          }}
          startIcon={open && <img src={NewCalc} alt="NewCalc" />}>
          {open ? 'Novo Cálculo' : <img src={NewCalc} alt="NewCalc" />}
        </Button>
        <DrawerFooter isopen={open}>
          <UserCard
            src="https://s.ebiografia.com/img/au/to/autorretrato_van_gogh.jpg?auto_optimize=low"
            name="Dev"
            idade="Ver perfil"
            open={open} />
        </DrawerFooter>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: '24px',
          pl: 2,
          pr: 2,
          width: '100%',
          height: '100%',
          bgcolor: '#F3F6F9',
          overflowX: 'hidden'
        }}>
        <Header />
        <Grid container>
          {children}
        </Grid>
      </Box>
    </Box>
  );
}

export default Sidebar