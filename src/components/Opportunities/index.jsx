import { Box, Button, Card, Grid, Typography } from '@mui/material'
import BankIcon from '../QueueChats/bank-1.svg'

const Labels = ({ children, color }) => <Typography
  sx={{
    fontSize: '1rem',
    lineHeight: '1.125rem',
    paddingBottom: 0,
    fontWeight: '600',
    color: color ? color : "#464E5F"
  }}
  variant="subtitle1"

>
  {children}
</Typography>

const Item = ({ icone, nome, assunto, estado, interessados, resumo }) => {

  return (
    <Grid container sx={{ p: '24px', borderBottom: '1px solid #D9D9D9' }}>
      <Grid md={3}>
        <div style={{
          display: 'flex',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#29292C',
            width: '50px',
            height: '50px',
            borderRadius: '6px',
            marginRight: '8px'
          }}>
            <img src={icone} alt='topic' width={40} />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
            <Labels>
              {nome}
            </Labels>


          </div>
        </div>
      </Grid>
      <Grid md={2}><Labels>{assunto}</Labels></Grid>
      <Grid md={2}><Labels>{estado}</Labels></Grid>
      <Grid md={3}><Labels>{interessados}</Labels></Grid>
      <Grid md={2}>
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
          Ver Propposta
        </Button>
      </Grid>
      <Grid md={9} sx={{ mt: '24px' }}>
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
          variant="inherit"
          color="#464E5F"
        >
          <strong>Resumo: </strong>
          {resumo}
        </Typography>
      </Grid>
    </Grid >
  )
}

const Opportunities = () => {

  return (
    <Box
      sx={{
        //bgcolor: 'azure',
        width: '100%',
        height: '100%',
      }}
    >
      <Card sx={{ p: '13px 20px', bgcolor: '#111219' }}>
        <Grid container>
          <Grid md={3}>
            <Labels color='#B5B5C3' >AUTOR </Labels>
          </Grid>
          <Grid md={2}>
            <Labels color='#B5B5C3' >ASSUNTO </Labels>
          </Grid>
          <Grid md={2}>
            <Labels color='#B5B5C3' >ESTADO </Labels>
          </Grid>
          <Grid md={3}>
            <Labels color='#B5B5C3' >INTERESSADOS </Labels>
          </Grid>
        </Grid>
      </Card>
      <Item
        icone={BankIcon}
        nome='Maria'
        assunto="Banco"
        estado="RS"
        interessados={33}
        resumo='texto Aleatorio texto Aleatorio texto Aleatorio texto Aleatorio texto Aleatorio '
      />
      <Item
        icone={BankIcon}
        nome='Maria'
        assunto="Banco"
        estado="RS"
        interessados={33}
        resumo='texto Aleatorio texto Aleatorio texto Aleatorio texto Aleatorio texto Aleatorio '
      />
      <Item
        icone={BankIcon}
        nome='Maria'
        assunto="Banco"
        estado="RS"
        interessados={33}
        resumo='texto Aleatorio texto Aleatorio texto Aleatorio texto Aleatorio texto Aleatorio '
      />
    </Box>
  )
}

export default Opportunities