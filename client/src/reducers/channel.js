import * as at from '../constants/ActionTypes';

const defaultState = {
    isOpenedDialog: false,
    names: [],
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case at.OPEN_DIALOG_CREATE_CHANNEL:
            return {isOpenedDialog: true, users: action.payload, names: state.names};
        case at.CLOSE_DIALOG_CREATE_CHANNEL:
            return {isOpenedDialog: false, users: [], names: state.names};
        case at.CREATE_CHANNEL:
            return {isOpenedDialog: false, users: [], names: action.payload};
        case at.GET_CHANNELS:
            return {isOpenedDialog: state.isOpenedDialog, users: [], names: action.payload};
        default:
            return state;
    }
}