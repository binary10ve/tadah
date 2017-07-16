export function confirmDeleteTask(task) {
    return {
        type: 'CONFIRM_DELETE_TASK',
        task
    };
}