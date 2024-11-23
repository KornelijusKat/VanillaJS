import MealApi from "../Api/MealApi";
import mealCard from "./mealCard";
import mealDetailsPage from "./mealDetailsPage";
const renderSixRandomMeals = () =>{
    const mealCon = document.createElement('div');
        mealCon.className = "row d-flex"
        mealCon.id = "mealsRow"
        mealCon.innerHTML =`
            <div class='row discover'>
                <div class='col discover heading'>
                    <h2>Discover, Create, Share</h2>
                    <p>Check our most popular recipes of this week</p>
                </div>
                <div class='col text-end'>
                    <button class="btn btn-primary" id='butt'>Randomize</button>
                </div>
            </div>
        `
        document.querySelector('main').innerHTML = ""
        document.querySelector('main').appendChild(mealCon);
        for(let x = 0;x<6;x++){
            let newMeal = new MealApi('https://www.themealdb.com/api/json/v1/1');
            newMeal.getRandomMeal().then((meal) => {
                const createdMeal = document.createElement('div');
                createdMeal.className = "col-4 mt-5 mealCon"
                createdMeal.innerHTML= mealCard(meal)
                mealCon.appendChild(createdMeal);
                createdMeal.querySelector('.meal-link').addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelector('main').innerHTML = ""
                    mealDetailsPage(meal);
                });
              });
        }
}
export default renderSixRandomMeals