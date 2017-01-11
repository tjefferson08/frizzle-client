import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import NearbyStops from './presenters/NearbyStops';
import StopDetails from './presenters/StopDetails';
import stops from '../reducers/stops';
import showMap from '../reducers/showMap';

let store = createStore(
  combineReducers({ showMap, stops }),
  applyMiddleware(thunkMiddleware)
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={NearbyStops} />
        <Route path="/stops/(:stop_id)" component={StopDetails} />
      </Router>
    </Provider>
  );
};

render(
  <Root />,
  document.getElementById('app')
);

