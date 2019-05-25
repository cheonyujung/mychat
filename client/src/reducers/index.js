import {combineReducers} from 'redux';
import chat from './chat';
import oauth from './oauth';
import user from './user';

export default combineReducers({chat, oauth, user});
