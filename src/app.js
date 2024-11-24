import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import randomMealEvent from "./modules/randomMealEvent";
import renderRandomMeals from "./modules/renderRandomMeal";
import formSubmitEvent from "./modules/formSubmitEvent";
import hideCategoryDropdown from "./modules/hideCategoryDropdown";
import randomizeEvent from './modules/randomizeEvent';
import renderSixRandomMeals from './modules/renderSixRandomMeals';
import displaySearches from './modules/displaySearches';

renderSixRandomMeals();
hideCategoryDropdown();
randomMealEvent();
renderRandomMeals();
formSubmitEvent();
randomizeEvent();
displaySearches();
