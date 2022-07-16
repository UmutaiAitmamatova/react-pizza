const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
};

const filters = (state = initialState, action) => {
    if (action.type === "SET__SORT__BY") {
        return {
            ...state,
            sortBy: action.payload,
        };
    }

    if (action.type === "SET__CATEGORY") {
        return {
            ...state,
            category: action.payload,
        };
    }
    return state;
};
export default filters;