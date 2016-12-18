import React from 'react';
import ReactDOM from 'react-dom';
import StopsNearMeButton from './containers/StopsNearMeButton';
import VisibleStopList from './containers/VisibleStopList';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import stops from '../reducers/stops';

let store = createStore(
  combineReducers({ stops }),
  applyMiddleware(thunkMiddleware)
);

class App extends React.Component {
  render() {
    return (
      <div>
        <StopsNearMeButton text="Stops near me" />
        <VisibleStopList />
      </div>
    );
  }
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

