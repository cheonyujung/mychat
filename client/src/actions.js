import axios from 'axios';
import * as at from "./constants/ActionTypes";
import _ from 'lodash';

class NullSocket {
    send(message){
        console.log(`Warning: send called on NullSocket, dispatch a connect first`);
    }
}

let github = null;
let socket = new NullSocket();
let mychatToken = null;

export function sendText(id, text) {
    return dispatch => {
        return socket.send(JSON.stringify({fromToken: mychatToken, message: text}));
    };
}

export function joinChat() {
    socket = new WebSocket("ws://localhost:8080/chat");
    return dispatch => {
        socket.onmessage = msg => {
            const payload = JSON.parse(msg.data);
            dispatch({
                type: at.RECV_TEXT,
                payload
            });
        };
    };
}

export function getAccessTokenForGithub(code) {
    return dispatch => {
        axios.get("http://localhost:8080/oauth/github/access-token", {params: {code}})
            .then(t => {
                console.debug("Recive Access token");

                mychatToken = t.data.token;
                dispatch({
                    type: at.RECV_ACCESS_TOKEN,
                    payload: t.data
                });
            })
    }
}

export function getAuthenticated() {
    return dispatch => {
        github.users.getAuthenticated({})
            .then(result => {
                dispatch({
                    type: at.RECV_USER_INFO,
                    payload: result.data
                });
            });
    }
}

export function setGithub(gh) {
    github = gh;
    console.debug(github);
}

export function getGithub() {
    return github;
}

export function openDrawer() {
    return dispatch => {
        dispatch({
            type: at.OPEN_DRAWER,
        });
    };
}

export function closeDrawer() {
    return dispatch => {
        dispatch({
            type: at.CLOSE_DRAWER,
        });
    };
}

export function openDialogForCreateChannel() {
    return dispatch => {
        axios.get("http://localhost:8080/users")
            .then(t => {
                dispatch({
                    type: at.OPEN_DIALOG_CREATE_CHANNEL,
                    payload: _.map(t.data, (user) => {
                            return user.name;
                        })
                });
            })
    }
}

export function closeDialogForCreateChannel() {
    return dispatch => {
        dispatch({
            type: at.CLOSE_DIALOG_CREATE_CHANNEL,
        });
    }
}

export function createChannel(name, users) {
    return dispatch => {
        axios.post("http://localhost:8080/channel", {name: name, users: users})
            .then(t => {
                axios.get("http://localhost:8080/channels")
                    .then( t2 => {
                        dispatch({
                            type: at.CREATE_CHANNEL,
                            payload: _.map(t2.data, (channel) => {
                                return channel.name;
                            })
                        });
                    })
            })
    }
}

export function getChannels() {
    return dispatch => {
        axios.get("http://localhost:8080/channels")
            .then(t => {
                dispatch({
                    type: at.GET_CHANNELS,
                    payload: _.map(t.data, (channel) => {
                        return channel.name;
                    })
                });
            });
    };
}