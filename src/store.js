import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './combined-reducers';

export default function store(initState) {
  return createStore(
    Reducers,
    initState,
    applyMiddleware(
      thunk
    )
  );
}
