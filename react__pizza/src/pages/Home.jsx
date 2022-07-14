import React from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart, handlAddPizza} from "../redux/actions/cart";

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";
import { setCategory, setSortBy } from '../redux/actions/filters'

const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItem = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цена", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

function Home () {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const {category, sortBy}=useSelector(({filters})=>filters);

  // console.log(category, sortBy);

  // React.useEffect(() => {
  //   fetchPizzas(dispatch);
  // }, [])

  React.useEffect(()=>{
    dispatch(fetchPizzas(sortBy, category))
  },[category, sortBy ])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handlAddPizza = obj => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    })
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          // onClick={onSelectCategory}
          // items={categoryName}

          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryName}
        />

      <SortPopup activeSortType={sortBy.type} items={sortItem} onClickSortType={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {isLoaded ? items.map((obj) => 
        <PizzaBlock onClickAddPizza={handlAddPizza} key={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].lenght} {...obj}/>) : Array(10).fill(<PizzaLoadingBlock/>)}
        
      </div>
    </div>
  );
};

export default Home;
