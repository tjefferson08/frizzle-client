import React from 'react';
import StopsNearMeButton from '../containers/StopsNearMeButton';
import VisibleStopList from '../containers/VisibleStopList';
import MapContainer from '../containers/MapContainer';
import ToggleMapButton from '../containers/ToggleMapButton';

const NearbyStops = () => {
  return (
    <div>
      <span>
        Stops near:
      </span>
      <StopsNearMeButton text="My current location" />
      <ToggleMapButton text="Toggle map"/>
      <MapContainer showMap={true} />
      <VisibleStopList />
    </div>
  );
};

export default NearbyStops;

