const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filters = (state = initialState, action) => {
    if(action.type === 'SET__SORT__BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    return state;
}

export default filters;