import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem food={food} key={food.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
};

export default FoodList;
