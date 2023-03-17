import { useState } from 'react';
import { Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const QueueChats = ({ title, cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 2 <= cards?.length ? prevIndex + 2 : prevIndex));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : prevIndex));
  };

  const isSingleCard = cards?.length === 1;
  const isNoCards = cards?.length === 0;

  return (
    <Card
      sx={{
        //maxWidth: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: 233
      }}
    >
      <CardHeader subheader={title}/>
      <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
        {isSingleCard ? (
          <Card sx={{ width: '100%', maxWidth: '100%' }}>
            <CardContent>{cards[0]}</CardContent>
          </Card>
        ) : !isNoCards ? (
          <>
            <IconButton onClick={handlePrev} disabled={activeIndex === 0}>
              <ArrowBack />
            </IconButton>
            <div
              style={{
                display: 'flex',
                overflowX: 'scroll',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {cards?.slice(activeIndex, activeIndex + 2).map((card, index) => (
                <Card key={index} sx={{ width: '50%', maxWidth: '100%' }}>
                  <CardContent>{card}</CardContent>
                </Card>
              ))}
            </div>
            <IconButton onClick={handleNext} disabled={activeIndex + 2 >= cards?.length}>
              <ArrowForward />
            </IconButton>
          </>
        ) : (
          <Card sx={{ flexGrow: 1, maxWidth: '100%' }}>
            <CardContent></CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}

export default QueueChats;
