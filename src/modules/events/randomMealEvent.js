import MealApi from "../../Api/MealApi";
import mealDetailsPage from "../views/mealDetailsPage";
//clicking Random recipe link, renders a random meal with it's details
const randomMealEvent = () =>{
    document.querySelector('.recipe').addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector('main').innerHTML = "";
        let newMeal = new MealApi('https://www.themealdb.com/api/json/v1/1');
        newMeal.getRandomMeal().then((meal) => {
            mealDetailsPage(meal);
        })
})}
export default randomMealEvent