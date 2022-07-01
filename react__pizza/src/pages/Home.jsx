import React from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

import {fetchPizzas} from "../redux/actions/pizzas";

import { Categories, SotrPopup, PizzaBlock, PizzaLoadingBlock } from "../components";
import { setCategory } from '../redux/actions/filters'

const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItem = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'},
]

function Home () {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const {category, sortBy}=useSelector(({filters})=>filters);

  console.log(category, sortBy);
  // React.useEffect(() => {
  //   fetchPizzas(dispatch);
  // }, [])

  React.useEffect(()=>{
    dispatch(fetchPizzas(category, sortBy))
  },[category, sortBy ])


const onSelectCategory = React.useCallback( (index) => {
  dispatch(setCategory(index));
}, [])


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

        <SotrPopup items={sortItem} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {isLoaded ? items.map((obj) => 
        <PizzaBlock key={obj.id} isLoading={true} {...obj}/>) : Array(10).fill(<PizzaLoadingBlock/>)}
        
      </div>
    </div>
  );
};

export default Home;
