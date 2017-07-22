import {TaskReducers} from './Tasks';
import {TaskFieldReducer} from './TaskFields';
import {AddTaskReducer} from './AddTask';
import {EditTaskReducer} from './EditTask';
import { combineReducers} from 'redux';
import { reducer as form  } from 'redux-form';
const reducers = combineReducers({tasks: TaskReducers, categories: TaskFieldReducer,form, newTask : AddTaskReducer,editTask :EditTaskReducer});
export default reducers;