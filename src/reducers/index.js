import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
import project from './project';
import issue from './issue';
import message from './message';



export default combineReducers({
    router: routerReducer,
    project,
    issue,
    message,
});