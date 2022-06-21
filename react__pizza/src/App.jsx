import React from "react";
import { useDispatch } from 'react-redux'

import { Home, Cart } from "./pages";
import { Header } from "./components";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {fetchPizzas} from "./redux/actions/pizzas";


function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [])


  return(
    <div className="wrapper">
    <Header />
    <div className="content">
    <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/cart' element={<Cart/>} exact/>
    </Routes>     
    </div>
  </div>
  )
}

export default App;

// export default connect(
//   (state) => {
//     return{
//       items: state.pizzas.items,
//       filters: state.filters,
//     }
//   },
//   (dispatch)=>{
//     return{
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);