function TaskFieldReducer(state={}, action) {
    switch (action.type) {
        case 'CATEGORIES_HAS_ERRORED':
            return {...state, categoriesAreLoading: false, categories: []};
        case 'CATEGORIES_ARE_LOADING':
            return {...state, categoriesAreLoading: true, categories: []};
        case 'CATEGORIES_FETCH_DATA_SUCCESS':
            return {...state, categories : action.categories};
        default:
            return state
    }
}

export default TaskFieldReducer