import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
import project from './project';
import issue from './issue';


export default combineReducers({
    router: routerReducer,
    project,
    issue
});