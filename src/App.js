import React, { Component } from 'react';
import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, ConnectedRouter } from 'react-router-redux';
import reducers from './reducers' // Or wherever you keep your reducers
import routes from './routes';
import Main from './Main';

import './App.css';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(reducers,applyMiddleware(middleware, logger));

class App  extends Component{
  render(){
      return (
          <Provider store={store}>
              <ConnectedRouter history={history}>
                <Main routes={routes}/>
              </ConnectedRouter>
          </Provider>
      );
  }
}
export default App;
