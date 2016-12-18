import React from 'react';
import StopList from '../presenters/StopList';
import { connect } from 'react-redux';

const mapStateToProps = ({ stops }) => {
  return {
    stops
  };
};

const VisibleStopList = connect(
  mapStateToProps
)(StopList);

export default VisibleStopList;
