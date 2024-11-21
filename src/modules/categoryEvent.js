import MealApi from "../Api/MealApi";
import searchResultsPage from "./searchResultPage";

const categoryEvent = ()=>{
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function (event) {
        event.preventDefault(); 
        const category = this.getAttribute('data-category'); 
        const mealService = new MealApi('https://www.themealdb.com/api/json/v1/1');
        mealService.getMealByCategory(category).then((meals)=> {
            console.log(meals);
            const mealDetailsPromise = meals.map(meal => {
                return mealService.getMealDetails(meal.idMeal);
            });
            Promise.all(mealDetailsPromise).then((foundMeal) =>{
                searchResultsPage(foundMeal);
            })
        }
            )
        });
      });
}
export default categoryEvent