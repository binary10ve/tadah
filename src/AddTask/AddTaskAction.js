

export function newTaskCreateSuccess() {
    return {
        type: 'NEW_TASK_CREATE_SUCCESS'
    };
}

export function unloadData(){
    return {
        type: 'UNLOAD_NEW_TASK'
    };
}

export function postTaskCreate(){
    return {
        type: 'POST_TASK_SUCCESS'
    };
}


export function newTaskCreateFailed(task) {
    return {
        type: 'NEW_TASK_CREATE_FAILED',
        task
    };
}


export function postNewTaskToServer(values,dispatch){
    console.log("arguments",arguments);

        fetch('http://localhost:3001/tasks/',{
            method: 'Post',
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
                dispatch(newTaskCreateSuccess());
                return response;
            })
            .catch(() => dispatch(newTaskCreateFailed(true)));


}