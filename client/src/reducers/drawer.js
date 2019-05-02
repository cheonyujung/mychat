import * as at from '../constants/ActionTypes';

const defaultState = {
  isOpen: false
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case at.OPEN_DRAWER:
      return {isOpen: true};
    case at.CLOSE_DRAWER:
      return {isOpen: false};
    default:
      return state;
  }
}