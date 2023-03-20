import { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';
import { ArrowCircleRightOutlined, ArrowCircleLeftOutlined } from '@mui/icons-material';
import './style.css'

const QueueChats = ({ title, cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);


  useEffect(() => {
    // Verifica o tamanho da tela e define o número de cards por slide
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setCardsPerSlide(mediaQuery.matches ? 1 : 2);

    // Atualiza o número de cards por slide quando o tamanho da tela for alterado
    const handleResize = () => {
      setCardsPerSlide(mediaQuery.matches ? 1 : 2);
    }
    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + cardsPerSlide <= cards?.length ? prevIndex + cardsPerSlide : prevIndex));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - cardsPerSlide >= 0 ? prevIndex - cardsPerSlide : prevIndex));
  };

  const isSingleCard = cards?.length === 1;
  const isNoCards = cards?.length === 0;

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 233,
        maxWidth: '95vw',
        mb: 3
      }}
    >
      <CardHeader sx={{
        //paddingBottom: 0,
        fontWeight: 600,
        fontSize: '0,875rem',
        lineHeight: '18px',
        color: '#464E5F'
      }}
        subheader={<Typography variant='h6'>{title}</Typography>}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'row', padding: '0 !important' }}>
        {isSingleCard ? (
          <Card sx={{ width: '100%' }}>
            <CardContent sx={{ padding: 0 }}>{cards[0]}</CardContent>
          </Card>
        ) : !isNoCards ? (
          <>
            <div style={{
              display: 'flex',
              height: '100%',
              justifyContent: "center",
              alignItems: "center"
            }}>
              <IconButton onClick={handlePrev} disabled={activeIndex === 0}>
                <ArrowCircleLeftOutlined />
              </IconButton>
            </div>

            <div
              className="CardContent"
              style={{
                display: 'flex',
                overflowX: 'scroll',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                width: '100%',
                overflow: 'hidden'

              }}
            >
              {cards.slice(activeIndex, activeIndex + cardsPerSlide).map((card, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: 225,
                    margin: '0 8px'
                  }}
                >
                  {card}
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              height: '100%',
              justifyContent: "center",
              alignItems: "center"
            }}>
              <IconButton onClick={handleNext} disabled={activeIndex + cardsPerSlide >= cards?.length}>
                <ArrowCircleRightOutlined />
              </IconButton>
            </div>
          </>
        ) : (
          <Typography sx={{ padding: '16px' }} variant='body1'>
            Sem chats na fila
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};


export default QueueChats