import React from "react";
import axios from 'axios'

// import Button from "./Button";
import { Home, Cart } from "./pages";
import { Header } from "./components";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";



const App = () => {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  
    return (
        <div className="wrapper">
      <Header />
      {/* <Button outline >
        Umutai Aitmamatova
      </Button>
      <Button>
        TOP
      </Button> */}
      <div className="content">


      <Routes>

          <Route path='/' element={<Home items={pizzas}/>} exact/>
          <Route path='/cart' element={<Cart/>} exact/>
      </Routes>
        
      </div>
    </div>
    )
}
export default App; 