import { ELEVATOR_SENT } from './actions';

export const reducer = (state = {
  data: []
}, action) => {
  switch(action.type) {

    case ELEVATOR_SENT:
      let foo = Object.assign({}, state, {
        data: action.data
      });
      return foo;
      break;
    default:
    return state || {};
      break;
  }
};
