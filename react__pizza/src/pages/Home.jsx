import React from "react";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'


import { Categories, SotrPopup, PizzaBlock } from "../components";
import { setCategory } from '../redux/actions/filters'

const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItem = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'},
]

function Home () {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return{
      items: pizzas.items,
    }
  });

const onSelectCategory = React.useCallback( (index) => {
  dispatch(setCategory(index));
}, [])


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectCategory}
          items={categoryName}
        />
        <SotrPopup items={sortItem} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {items && items.map((obj) => (
        <PizzaBlock key={obj.id} {...obj}/>
        ))}


      </div>
    </div>
  );
};

export default Home;
