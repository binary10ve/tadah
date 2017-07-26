export function categoryHasErrored(bool) {
    return {
        type: 'CATEGORIES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function categoriesAreLoading(bool) {
    return {
        type: 'CATEGORIES_ARE_LOADING',
        isLoading: bool
    };
}
export function categoryFetchDataSuccess(categories) {
    return {
        type: 'CATEGORIES_FETCH_DATA_SUCCESS',
        categories
    };
}

export function categoriesFetchData(url) {
    return (dispatch) => {
        dispatch(categoriesAreLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(categoriesAreLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((tasks) => dispatch(categoryFetchDataSuccess(tasks)))
            .catch(() => dispatch(categoryHasErrored(true)));
    };
}

