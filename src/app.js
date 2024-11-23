import helloWebpack from "./modules/helloWebpack";
import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import MealApi from "./Api/MealApi";
import randomMealEvent from "./modules/randomMealEvent";
import renderRandomMeals from "./modules/renderRandomMeal";
import renderForm from "./modules/renderForm";
import categoryEvent from "./modules/categoryEvent";
import formSubmitEvent from "./modules/formSubmitEvent";
import hideCategoryDropdown from "./modules/hideCategoryDropdown";

hideCategoryDropdown()

//renderForm();
categoryEvent();
randomMealEvent();
renderRandomMeals();
formSubmitEvent();
const leg = new MealApi('https://www.themealdb.com/api/json/v1/1');
