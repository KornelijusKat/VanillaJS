import renderRandomMeals from "./renderRandomMeal"
import renderSixRandomMeals from "../views/renderSixRandomMeals";

const randomizeEvent = () =>{
    document.querySelector('main').addEventListener('click', (e) =>{
        e.preventDefault();
        if (e.target && e.target.id === 'button') {
            renderSixRandomMeals();
        }
    })
}
export default randomizeEvent