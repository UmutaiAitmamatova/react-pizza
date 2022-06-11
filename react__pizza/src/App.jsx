import React from "react";

// import Button from "./Button";
import { Home, Cart } from "./pages";
import { Header } from "./components";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";



const App = () => {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas);
    })
  }, []);

  console.log(pizzas);

  
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

          {/* <Route path='/' render={() => <Home items={pizzas}/>} exact/> */}


          <Route path='/' element={<Home/>} exact/>
          <Route path='/cart' element={<Cart/>} exact/>
      </Routes>
        
      </div>
    </div>
    )
}
export default App; 