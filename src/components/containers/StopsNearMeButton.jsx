import React from 'react';
import { connect } from 'react-redux';
import { fetchNearbyStops } from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (e) => {
    dispatch(fetchNearbyStops());
  }
});

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StopsNearMeButton = connect(
  state => ({}),
  mapDispatchToProps
)(Button);


export default StopsNearMeButton;
