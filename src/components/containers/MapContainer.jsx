import React from 'react';
import { connect } from 'react-redux';
import Map from '../presenters/Map';

const mapStateToProps = ({ showMap }) => {
  return {
    showMap
  };
};


let MapContainer = ({ showMap }) => {
  return (
    showMap ? <Map /> : null
  );
}

MapContainer = connect(
  mapStateToProps
)(MapContainer);

export default MapContainer;
