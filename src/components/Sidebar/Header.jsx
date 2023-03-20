import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
//import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from './icons/search.svg'
import WalletIcon from './icons/wallet-3.svg'
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(0, 1),
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#B5B5C3',
  border: '1px solid #B5B5C3',
  borderRadius: 9,
  maxHeight: 40,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      '&:focus': {
        width: '100%',
      },
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: 30,
    },
    '&::placeholder': { // estilo para o placeholder
      color: '#B5B5C3',
      opacity: 1,
    }
  },
}));


const Header = () => {
  return (
    <AppBar position="static"
      sx={{
        boxShadow: 'none',
        bgcolor: 'inherit',
        width: '100%',
        pr: 0,
        pl: 0
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',

        }}>
        <Card
          sx={{
            width: 253,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            p: 1,
            bgcolor: 'inherit',
            boxShadow: 'none',
            border: '1px solid #E4E6EF',
            borderRadius: 2,

            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          <img src={WalletIcon} alt="WalletIcon" style={{ marginRight: 10 }} />
          <Typography
            sx={{
              lineHeight: 0,
              fontWeight: 500,
              fontSize: 13,
              color: '#B5B5C3'
            }} variant='caption'>
            Meus créditos: 199 disponíveis
          </Typography>
        </Card>
        <Search>
          <SearchIconWrapper>
            <img src={SearchIcon} alt="SearchIcon" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>

  );
}

export default Header