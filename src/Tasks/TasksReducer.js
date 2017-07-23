function TasksReducer(state={tasks :[],tasksAreLoading: true}, action) {
    switch (action.type) {
        case 'TASKS_HAS_ERRORED':
            return {...state, tasksAreLoading: false, tasks: []};
        case 'TASKS_ARE_LOADING':
            return {...state, tasksAreLoading: true, tasks: [],filter: 'all'};
        case 'TASKS_FETCH_DATA_SUCCESS':
            return {...state, tasks: action.tasks, tasksAreLoading: false};
        case 'CONFIRM_DELETE_TASK':
            return {...state, confirmTaskDelete: true, taskToBeDeleted : action.task.id};
        case 'DELETE_TASK':
                let tasks = state.tasks;
                tasks = tasks.filter(function(task){
                   return task.id != action.taskId
                });
            return {...state, tasks, taskToBeDeleted : null,confirmTaskDelete: false};
        case 'CANCEL_DELETE_TASK':
            return {...state, confirmTaskDelete: false,taskToBeDeleted : null};
        case 'DELETE_TASK_SUCCESS':
            return {...state, confirmTaskDelete: false,taskToBeDeleted : null,tasksAreLoading:false};
        case 'CATEGORIES_FETCH_DATA_SUCCESS':
            return {...state, categories : action.categories};
        case 'TASK_FILTER_CHANGE':
            return {...state, filter : action.filter};
        case 'TASK_SORT_CHANGE':
            return {...state, sortByOption : action.sortByOption};
        default:
            return state
    }
}

export default TasksReducer