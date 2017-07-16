
export function tasksHasErrored(bool) {
    return {
        type: 'TASKS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function tasksAreLoading(bool) {
    return {
        type: 'TASKS_ARE_LOADING',
        isLoading: bool
    };
}
export function tasksFetchDataSuccess(tasks) {
    return {
        type: 'TASKS_FETCH_DATA_SUCCESS',
        tasks
    };
}


export function confirmDeleteTask(task) {
    return {
        type: 'CONFIRM_DELETE_TASK',
        task
    };
}

export function deleteTask(taskId) {
    return {
        type: 'DELETE_TASK',
        taskId
    };
}

export function cancelDeleteTask(task) {
    return {
        type: 'CANCEL_DELETE_TASK',
        task
    };
}


export function deleteTaskSuccess(task) {
    return {
        type: 'DELETE_TASK_SUCCESS'
    };
}


export function deleteTaskFailed(task) {
    return {
        type: 'DELETE_TASK_FAILED',
        task
    };
}

export function deleteTaskfromServer(taskId){
    return (dispatch) => {
        dispatch(deleteTask(taskId));
        fetch('http://localhost:3001/tasks/' + taskId,{
            method: 'delete'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(deleteTaskSuccess());
                return response;
            })
            .catch(() => dispatch(deleteTaskFailed(true)));
    };

}

export function taskFetchData(url) {
    return (dispatch) => {
        dispatch(tasksAreLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tasksAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((tasks) => dispatch(tasksFetchDataSuccess(tasks)))
            .catch(() => dispatch(tasksHasErrored(true)));
    };
}