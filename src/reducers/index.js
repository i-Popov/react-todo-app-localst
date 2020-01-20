import { combineReducers } from 'redux';
import Tasks from './Tasks';
import Filters from './Filters'

const AppReducer = combineReducers({Tasks, Filters});

export default AppReducer;
