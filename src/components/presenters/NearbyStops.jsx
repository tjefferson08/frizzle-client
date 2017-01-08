import React from 'react';
import StopsNearMeButton from '../containers/StopsNearMeButton';
import VisibleStopList from '../containers/VisibleStopList';

const NearbyStops = () => {
  return (
    <div>
      <StopsNearMeButton text="Stops near me" />
      <VisibleStopList />
    </div>
  );
};

export default NearbyStops;

