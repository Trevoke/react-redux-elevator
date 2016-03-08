import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
//import createLogger from 'redux-logger';

import { reducer } from './reducer';
import Reducers from './combined-reducers';

//const loggerMiddleware = createLogger();

export default function store(initState) {
  return createStore(
    Reducers,
    initState,
    applyMiddleware(
//      loggerMiddleware,
      thunk
    )
  );
}
