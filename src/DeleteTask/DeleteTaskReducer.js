function DeleteTaskReducer(state = {}, action) {
    console.log('Delete task reducts', action)
    switch (action.type) {

        case 'CONFIRM_DELETE_TASK_CANCEL':
            console.log("========>");
            return {...state, tasksAreLoading: true, tasks: []};
        case 'DELETE_TASK_SUCCESS':
            return {...state, tasks: action.tasks, tasksAreLoading: false};
        default:
            return state;
    }
}

export default DeleteTaskReducer