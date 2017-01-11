import React from 'react';
import StopCard from './StopCard';

const StopList = ({ stops }) => {
  return (
    <ul>
      {stops.map((stop, i) => <StopCard key={i} {...stop} />)}
    </ul>
  );
};

export default StopList;
