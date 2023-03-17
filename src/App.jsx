import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import QueueChats from './components/QueueChats';
import Sidebar from './components/Sidebar';
import BankIcon from './components/QueueChats/bank-1.svg'


const CardItem = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <img src={BankIcon} alt="BankIcon" />
      </div>
      <div>
       <Typography variant="h5" color="white">Card 1</Typography> 
      </div>
      
    </Box>
  )
}

const App = () => {

  const cards = [
    <Box sx={{ p: 2, bgcolor: 'primary.main' }}>
      <Typography variant="h5" color="white">Card 1</Typography>
    </Box>,
    <Box sx={{ p: 2, bgcolor: 'secondary.main' }}>
      <Typography variant="h5" color="white">Card 2</Typography>
    </Box>,
    <Box sx={{ p: 2, bgcolor: 'info.main' }}>
      <Typography variant="h5" color="white">Card 3</Typography>
    </Box>,
    <Box sx={{ p: 2, bgcolor: 'warning.main' }}>
      <Typography variant="h5" color="white">Card 4</Typography>
    </Box>,
    <Box sx={{ p: 2, bgcolor: 'error.main' }}>
      <Typography variant="h5" color="white">Card 5</Typography>
    </Box>,
  ];

  return (
    <Sidebar>
    </Sidebar>
  );
}

export default App