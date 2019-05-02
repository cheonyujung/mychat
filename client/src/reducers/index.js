import {combineReducers} from 'redux';
import chat from './chat';
import oauth from './oauth';
import drawer from './drawer';

export default combineReducers({chat, oauth, drawer});
