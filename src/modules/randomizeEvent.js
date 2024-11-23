import renderRandomMeals from "./renderRandomMeal"
import renderSixRandomMeals from "./renderSixRandomMeals";

const randomizeEvent = () =>{
    document.querySelector('main').addEventListener('click', (e) =>{
        e.preventDefault();
        if (e.target && e.target.id === 'butt') {
            renderSixRandomMeals();
        }
    })
}
export default randomizeEvent