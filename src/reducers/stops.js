import ACTION_TYPES from '../actions.js';

const stops = (state = [], action) => {
  switch (action.type) {
  case ACTION_TYPES.FETCH_NEARBY_STOPS_SUCCESS:
    return action.stops;
  default:
    return state;
  }
};

export default stops;

