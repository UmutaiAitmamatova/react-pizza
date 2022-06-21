import axios from 'axios';


export const fetchPizzas = () => (dispatch) => {
    console.log(dispatch);
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));
    })
}


export const setPizzas = (items) => ({
    type: 'SET__PIZZAS',
    payload: items
})




