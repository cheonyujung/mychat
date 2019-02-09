import * as at from '../constants/ActionTypes';

const defaultState = {
    bodies: []
};

export default function(state = defaultState, action) {
    switch(action.type) {
        case at.SEND_TEXT:
            return {
                bodies: [
                    ...state.bodies, {
                    id: action.payload.id,
                    text: action.payload.text,
                    action: action.type,
                }]
            };
        case at.EXIT:
            return {
                bodies: [
                    ...state.bodies, {
                    id: action.payload.id,
                    text: action.payload.id + "님이 종료하였습니다",
                    action: action.type,
                }]
            };

        default:
            return state;
    }
};