import helloWebpack from "./modules/helloWebpack";
import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import MealApi from "./Api/MealApi";
import recipePage from "./modules/recipePage";
import renderRandomMeals from "./modules/renderRandomMeal";
import renderForm from "./modules/renderForm";
import categoryEvent from "./modules/categoryEvent";


console.log("testing webpack");
helloWebpack();
renderForm();
categoryEvent();
renderRandomMeals();
const leg = new MealApi('https://www.themealdb.com/api/json/v1/1');
leg.getRandomMeal().then((meal) => {
    console.log(meal);
  });
leg.getMealDetails('52772').then((meal) => {
    console.log(meal);
});
