import * as at from '../constants/ActionTypes';

const defaultState = {
    profile: undefined
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case at.RECV_USER_PROFILE:
            return {
                profile: action.payload
            };
        default:
            return state;
    }
};