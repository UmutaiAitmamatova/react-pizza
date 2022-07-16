import React from "react";
import { Home, Cart } from "./pages";
import { Header } from "./components";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
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