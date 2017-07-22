function AddTaskReducer(state={taskCreated:false}, action) {
    switch (action.type) {
        case 'NEW_TASK_CREATE_SUCCESS':
            return {...state, taskCreated : true};
        case 'NEW_TASK_CREATE_FAILED':
            return {...state};
        default:
            return state;
    }
}

export default AddTaskReducer;