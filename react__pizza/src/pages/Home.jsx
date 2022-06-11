import React from "react";

import { Categories, SotrPopup, PizzaBlock } from "../components";

function Home ({ items }) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SotrPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {items && items.map((obj) => (
        <PizzaBlock name={obj.name}/>
        ))}


      </div>
    </div>
  );
};

export default Home;
