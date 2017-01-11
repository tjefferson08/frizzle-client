import ACTION_TYPES from '../actions';

const showMap = (state = false, action) => {
  switch (action.type) {
  case ACTION_TYPES.TOGGLE_MAP:
    return !state;
  default:
    return state;
  }
};

export default showMap;

