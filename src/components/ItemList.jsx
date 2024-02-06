import React from "react";
import Item from "./Item";

const ItemList = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item item={item} key={item.id} />
        ))
      )}
    </div>
  );
};

export default ItemList;
