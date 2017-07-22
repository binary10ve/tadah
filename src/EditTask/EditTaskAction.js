

export function updateTaskSuccess(task) {
    return {
        type: 'UPDATE_TASK_SUCCESS',
        task
    };
}

export function unloadTask(){
    return {
        type: 'UNLOAD_TASK'
    };
}

export function fetchTaskSuccess(task) {
    return {
        type: 'FETCH_TASK_SUCCESS',
        task
    };
}


export function fetchTaskFailed(bool) {
    return {
        type: 'FETCH_TASK_FAILED',
        bool
    };
}


export function updateTaskFailed(bool) {
    return {
        type: 'UPDATE_TASK_FAILED',
        bool
    };
}


export function fetchTaskfromServer(taskId){
    return (dispatch) => {
        fetch('http://localhost:3001/tasks/' + taskId)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((task) => dispatch(fetchTaskSuccess(task)))
            .catch(() => dispatch(fetchTaskFailed(true)));
    };
}


export function updateTaskToServer(values, dispatch){
    fetch('http://localhost:3001/tasks/' +values.id,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(values)
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(updateTaskSuccess());
            return response;
        })
        .catch(() => dispatch(updateTaskFailed(true)));
}