import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import randomMealEvent from "./modules/events/randomMealEvent";
import renderRandomMeals from "./modules/events/renderRandomMeal";
import formSubmitEvent from "./modules/events/formSubmitEvent";
import hideCategoryDropdown from "./modules/services/hideCategoryDropdown";
import randomizeEvent from './modules/events/randomizeEvent';
import renderSixRandomMeals from './modules/views/renderSixRandomMeals';
import displaySearches from './modules/views/displaySearches';

renderSixRandomMeals();
hideCategoryDropdown();
randomMealEvent();
renderRandomMeals();
formSubmitEvent();
randomizeEvent();
displaySearches();
