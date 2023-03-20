import { Box, Button, Card, Typography, useTheme } from '@mui/material';
import QueueChats from './components/QueueChats';
import Sidebar from './components/Sidebar';
import BankIcon from './components/QueueChats/bank-1.svg'
import { useEffect, useState } from 'react';
import Opportunities from './components/Opportunities';


const CardItem = ({ nome, motivo, topico, resumo, mobileQuery }) => {
  const theme = useTheme();
  const [isMobile, serIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');
    serIsMobile(mediaQuery.matches ? true : false);

    const handleResize = () => {
      serIsMobile(mediaQuery.matches ? true : false);
    }
    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: theme.breakpoints.values.lg,
        width: '100%',
        minHeight: 114,
        p: 1,
        marginBottom: 2,
      }}
    >

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {!isMobile && (
          <Box sx={{ marginRight: '0.5rem' }}>
            <img src={BankIcon} alt="BankIcon" />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: '1.125rem',
              paddingBottom: 0,
              fontWeight: '600'
            }}
            variant="subtitle1"
            color="#464E5F"
          >
            {nome}
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              lineHeight: '1.125rem',
              paddingBottom: '0.5rem',
            }}
            variant="subtitle2"
            color="#B5B5C3"
          >
            {topico}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.75rem',
              lineHeight: '1rem',
              paddingBottom: '0.5rem'
            }}
            variant="body2"
            color="#000"
          >
            <strong>Motivo do contato: </strong>
            {motivo}
          </Typography>

          <Typography
            sx={{
              fontSize: '0.75rem',
              lineHeight: '1rem',
              paddingBottom: '1rem',
              //whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
            variant="inherit"
            color="#464E5F"
          >
            <strong>Resumo: </strong>
            {resumo}
          </Typography>

          <Button
            sx={{
              background: '#41C78F',
              marginRight: '0.5rem',
              padding: '0.5rem 0.875rem',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              transition: '0.3s',
              '&:hover': {
                opacity: 0.9,
                backgroundColor: '#41C78F'
              }
            }}
            variant="contained"
          >
            Enviar mensagem
          </Button>
          <Button
            sx={{
              color: '#464E5F',
              padding: '0.5rem 0.875rem',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              border: '1px solid #41C78F',
              '&:hover': {
                color: '#fff',
                opacity: 0.9,
                backgroundColor: '#41C78F',
                border: '1px solid #fff'
              }
            }}
            variant="outlined"
          >
            Saiba mais
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {

  const cards = [
    <CardItem
      nome="Mario"
      motivo="Contratar um advogado"
      topico="Banco"
      resumo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />,
    <CardItem
      nome="Mario"
      motivo="Contratar um advogado"
      topico="Banco"
      resumo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />,
    <CardItem
      nome="Maria"
      motivo="Contratar um advogado"
      topico="Banco"
      resumo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />,
    <CardItem
      nome="Maria"
      motivo="Contratar um advogado"
      topico="Banco"
      resumo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />,
    <CardItem
      nome="Mario"
      motivo="Contratar um advogado"
      topico="Banco"
      resumo="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />,
  ];

  return (
    <Sidebar>
      <QueueChats cards={cards} title="Destaque de pessoas online no momento" />
      <Opportunities />
    </Sidebar>
  );
}

export default App