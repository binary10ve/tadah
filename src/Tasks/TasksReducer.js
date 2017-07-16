function TasksReducer(state={tasks :[]}, action) {
    switch (action.type) {
        case 'TASKS_HAS_ERRORED':
            return {...state, tasksAreLoading: false, tasks: []};
        case 'TASKS_ARE_LOADING':
            return {...state, tasksAreLoading: true, tasks: []};
        case 'TASKS_FETCH_DATA_SUCCESS':
            return {...state, tasks: action.tasks, tasksAreLoading: false};
        case 'CONFIRM_DELETE_TASK':
            return {...state, confirmTaskDelete: true, taskToBeDeleted : action.task.id};
        case 'DELETE_TASK':
                let tasks = state.tasks;
                tasks = tasks.filter(function(task){
                   return task.id != action.taskId
                });
                console.log("action.taskToBeDeleted", action, tasks);
            return {...state, tasks, taskToBeDeleted : null,confirmTaskDelete: false};
        case 'CANCEL_DELETE_TASK':
            return {...state, confirmTaskDelete: false,taskToBeDeleted : null};
        case 'DELETE_TASK_SUCCESS':
            return {...state, confirmTaskDelete: false,taskToBeDeleted : null,tasksAreLoading:false};
        default:
            return state
    }
}

export default TasksReducer