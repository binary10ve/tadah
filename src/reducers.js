import {TaskReducers} from './Tasks';
//import {DeleteTaskReducer} from './DeleteTask';
import { combineReducers} from 'redux';
const reducers = combineReducers({tasks: TaskReducers});
export default reducers;