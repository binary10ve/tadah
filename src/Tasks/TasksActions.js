export function categoryHasErrored(bool) {
    return {
        type: 'CATEGORIES_HAS_ERRORED',
        hasErrored: bool
    };
}


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
export function categoryFetchDataSuccess(categories) {
    return {
        type: 'CATEGORIES_FETCH_DATA_SUCCESS',
        categories
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

export function newTaskCreateSuccess(task) {
    return {
        type: 'NEW_TASK_CREATE_SUCCESS'
    };
}


export function newTaskCreateFailed(task) {
    return {
        type: 'NEW_TASK_CREATE_FAILED',
        task
    };
}

export function taskFilterChange(filter) {
    return {
        type: 'TASK_FILTER_CHANGE',
        filter
    };
}

export function tasksSortByChange(sortByOption) {
    return {
        type: 'TASK_SORT_CHANGE',
        sortByOption
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


export function postNewTaskToServer(taskId){
    return (dispatch) => {
        dispatch(deleteTask(taskId));
        fetch('http://localhost:3001/tasks/' + taskId,{
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({ title: "New Task", description: "fooo",id : "2344"})
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(newTaskCreateSuccess());
                return response;
            })
            .catch(() => dispatch(newTaskCreateFailed(true)));
    };

}

export function fetchCategoryAndTask(categoryUrl, taskUrl) {

    return (dispatch) => {
        let apiRequest1 = fetch(categoryUrl)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                };
                return response;
            })
            .then((response) => response.json())
            .then((tasks) => dispatch(categoryFetchDataSuccess(tasks)))
            .catch(() => dispatch(categoryHasErrored(true)));

        let apiRequest2 = fetch(taskUrl)
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
        Promise.all([apiRequest1,apiRequest2]);

    }



}