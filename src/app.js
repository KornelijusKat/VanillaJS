import helloWebpack from "./modules/helloWebpack";
import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import MealApi from "./Api/MealApi";

console.log("testing webpack");
helloWebpack();
const leg = new MealApi('https://www.themealdb.com/api/json/v1/1');
leg.getRandomMeal().then((meal) => {
    console.log(meal);
  });
leg.getMealDetails('52772').then((meal) => {
    console.log(meal);
});
