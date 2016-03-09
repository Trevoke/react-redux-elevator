import { ELEVATOR_REQUEST } from './actions';

const allActions = [
  ELEVATOR_REQUEST
];

export const reducer = (
  state = { log: [] },
  action
) => {
  if(!allActions.includes(action.type)) return state;
  let logEntry = "Floor " + action.floor + " requested an elevator at " + action.timestamp;
  return { log: [logEntry, ...state.log] };
  //  switch(action.type) {
  //  case ELEVATOR_REQUEST:

};
