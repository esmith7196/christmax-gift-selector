// @ts-nocheck
import { Box } from '@chakra-ui/react';
import React from 'react';
import Countdown from 'react-countdown';

export default function CountdownComponent({ date }) {
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Time's up!</span>;
    } else {
      // Render a countdown
      return (
        <Box mt={4}>
          {days} days {hours} hours {minutes} minutes {seconds} seconds for the
          big bash!
        </Box>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
}
