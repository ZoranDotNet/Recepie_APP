import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY || "default_api_key";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.foodDetails}>
      <div className={styles.recepieCard}>
        <h1 className={styles.recepieName}>{food.title}</h1>
        <img className={styles.recepieImage} src={food.image} alt="" />
        <div className={styles.recepieDetails}>
          <span>
            <strong>🕐{food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            👪<strong>Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💵
          <span>
            <strong>{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <div>
          <h2>Ingredients</h2>
          <ItemList food={food} isLoading={isLoading} />
          <h2>Instructions</h2>
          <div className={styles.recepieInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
