import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import QueueChats from './components/QueueChats';
import Sidebar from './components/Sidebar';
import BankIcon from './components/QueueChats/bank-1.svg'


const CardItem = ({ nome, motivo, topico, resumo }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minWidth: 381,
        minHeight: 112,
        p: 1,
        //bgcolor: 'aquamarine'
      }}>
      <div style={{
        marginRight: 24
      }}>
        <img src={BankIcon} alt="BankIcon" />
      </div>
      <div
        style={{
          minWidth: 325
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: '18px',
            paddingBottom: 0,
            fontWeight: '600'
          }}
          variant="subtitle1"
          color="#464E5F">
          {nome}
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            lineHeight: '18px',
            paddingBottom: '8px',
          }}
          variant="subtitle2"
          color="#B5B5C3">
          {topico}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.75rem',
            lineHeight: '16px',
            paddingBottom: '8px'

          }}
          variant="body2"
          color="#000">
          <strong>Motivo: </strong>{motivo}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.75rem',
            lineHeight: '16px',
            paddingBottom: '16px'
          }}
          variant="inherit"
          color="#464E5F">
          <strong>Resumo: </strong>{resumo}
        </Typography>

        <div>
          <Button
            sx={{
              background: '#41C78F',
              marginRight: 4,
              padding: '8 14',
              fontSize: '12px',
              lineHeight: '16px',
              transition: '0.3s',
              '&:hover': {
                opacity: 0.9,
                backgroundColor: '#41C78F',
              },
            }}
            variant='contained'
          >
            Enviar mensagem
          </Button>
          <Button
            sx={{
              color: '#41C78F',
              padding: '8 14',
              fontSize: '12px',
              lineHeight: '16px',
              '&:hover': {
                color: '#fff',
                opacity: 0.9,
                backgroundColor: '#41C78F',
              },
            }}
            variant='outlined'>
            Saiba mais
          </Button>
        </div>
      </div>

    </Box>
  )
}

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
    </Sidebar>
  );
}

export default App