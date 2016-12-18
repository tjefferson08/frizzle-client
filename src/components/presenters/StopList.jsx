import React from 'react';
import Stop from './Stop';

const StopList = ({ stops }) => {
  return (
    <ul>
      {stops.map((stop, i) => <Stop key={i} {...stop} />)}
    </ul>
  );
};

export default StopList;
