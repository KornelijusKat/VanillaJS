import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import randomMealEvent from "./modules/randomMealEvent";
import renderRandomMeals from "./modules/renderRandomMeal";
import categoryEvent from "./modules/categoryEvent";
import formSubmitEvent from "./modules/formSubmitEvent";
import hideCategoryDropdown from "./modules/hideCategoryDropdown";
import randomizeEvent from './modules/randomizeEvent';
import renderSixRandomMeals from './modules/renderSixRandomMeals';

//searchBarEvent();
renderSixRandomMeals();
hideCategoryDropdown();
categoryEvent();
randomMealEvent();
renderRandomMeals();
formSubmitEvent();
randomizeEvent();
