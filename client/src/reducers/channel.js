import * as at from '../constants/ActionTypes';

const defaultState = {
    isOpenedDialog: false,
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case at.OPEN_DIALOG_CREATE_CHANNEL:
            return {isOpenedDialog: true, users: action.payload};
        default:
            return state;
    }
}