import { useState } from 'react';
import { Box, Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';
import { ArrowCircleRightOutlined, ArrowCircleLeftOutlined } from '@mui/icons-material';

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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 233,
      }}
    >
      <CardHeader sx={{
        //paddingBottom: 0,
        fontWeight: 600,
        fontSize: '14px',
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
              style={{
                display: 'flex',
                overflowX: 'scroll',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                width: '100%',
                overflow: 'hidden'

              }}
            >
              {cards?.slice(activeIndex, activeIndex + 2).map((card, index) => (
                <Box key={index} sx={{ width: '50%' }}>
                  <CardContent sx={{ padding: 0 }}>{card}</CardContent>
                </Box>
              ))}
            </div>
            <div style={{
              display: 'flex',
              height: '100%',
              justifyContent: "center",
              alignItems: "center"
            }}>
              <IconButton onClick={handleNext} disabled={activeIndex + 2 >= cards?.length}>
                <ArrowCircleRightOutlined />
              </IconButton>
            </div>

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
