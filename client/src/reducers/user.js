import * as at from '../constants/ActionTypes';

const defaultState = {
    profile: undefined,
    myProfile : undefined
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case at.RECV_USER_PROFILE:
            return {
                profile: action.payload,
                myProfile: state.myProfile,
            };
        case at.RECV_MY_INFO:
            return {
                profile: state.profile,
                myProfile: action.payload,
            };
        case at.MODIFY_MY_NAME:
            return {
                profile: state.profile,
                myProfile: action.payload,
            };
        default:
            return state;
    }
};