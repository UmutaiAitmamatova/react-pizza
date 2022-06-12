import React from "react";
import axios from 'axios';
import { connect } from 'react-redux'

// import Button from "./Button";
import { Home, Cart } from "./pages";
import { Header } from "./components";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {setPizzas} from "./redux/actions/pizzas";



// const App = () => {
  // const [pizzas, setPizzas] = React.useState([])

  // React.useEffect(() => {
  //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
  //     setPizzas(data.pizzas);
  //   });
  // }, []);

  
    // return (
    //     <div className="wrapper">
    //   <Header />
    //   {/* <Button outline >
    //     Umutai Aitmamatova
    //   </Button>
    //   <Button>
    //     TOP
    //   </Button> */}
    //   <div className="content">


    //   <Routes>

    //       <Route path='/' element={<Home items={pizzas}/>} exact/>
    //       <Route path='/cart' element={<Cart/>} exact/>
    //   </Routes>
        
    //   </div>
    // </div>
    // )
// }


//С помощью классового коспонента
class App extends React.Component {
  
  componentDidMount(){
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
          window.store.dispatch(setPizzas(data.pizzas))

      // console.log(data.pizzas);
    });
  }

  render(){

    return(
      <div className="wrapper">
      <Header />
      <div className="content">
      <Routes>
          <Route path='/' element={<Home items={this.props.items}/>} exact/>
          <Route path='/cart' element={<Cart/>} exact/>
      </Routes>     
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {

return {
  setPizzas: (items)=> dispatch(setPizzas(items)),
}}
export default connect(mapStateToProps, mapDispatchToProps)(App);