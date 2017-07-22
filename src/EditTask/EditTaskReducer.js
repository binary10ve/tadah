function EditTaskReducer(state={updateTaskSuccess : false}, action) {
    switch (action.type) {
        case 'UPDATE_TASK_SUCCESS':
            return {...state,updateTaskSuccess: true};
        case 'UPDATE_TASK_FAILED':
            return {...state};
        case 'LOAD_TASK':
            return {...state, task: action.task};
        case 'FETCH_TASK_SUCCESS':
            return {...state,task: action.task};
        case 'UNLOAD_TASK':
            return {...state, task:null,updateTaskSuccess: false};
        default:
            return state
    }
}

export default EditTaskReducer;