const setSortBy = (name) => ({
    type: 'SET__SORT__BY',
    payload: name
})

const setCategory = (catIndex) => ({
    type: 'SET__CATEGORY',
    category: catIndex
})