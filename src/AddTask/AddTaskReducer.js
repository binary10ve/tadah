function AddTaskReducer(state={taskCreated:false}, action) {
    switch (action.type) {
        case 'NEW_TASK_CREATE_SUCCESS':
            return {...state, newTaskSuccess : true};
        case 'NEW_TASK_CREATE_FAILED':
            return {...state};
        case 'UNLOAD_NEW_TASK':
            return {...state,newTaskSuccess: false};
        default:
            return state;
    }
}

export default AddTaskReducer;