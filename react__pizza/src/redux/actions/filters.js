export const setSortBy = (name) => ({
    type: 'SET__SORT__BY',
    payload: name
})

export const setCategory = (catIndex) => ({
    type: 'SET__CATEGORY',
    category: catIndex
})