import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (e) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_MAP })
  }
});

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const ToggleMapButton = connect(
  state => ({}),
  mapDispatchToProps
)(Button);


export default ToggleMapButton;
