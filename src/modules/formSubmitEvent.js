import MealApi from "../Api/MealApi";
import searchResultsPage from "./searchResultPage";
const formSubmitEvent = ()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const radioMarks = document.querySelectorAll('.search-radio');
        let selectedValue;
        radioMarks.forEach((selection) =>{
            if(selection.checked){
                selectedValue = selection.value;
            }
        })
        const mealService = new MealApi('https://www.themealdb.com/api/json/v1/1');
        const searchTerm = document.querySelector('.searchTerm').value;
        console.log(searchTerm);
        if(selectedValue == "ingredient"){
            mealService.getMealByIngredient(searchTerm).then((meals)=>{
                const mealDetailsPromise = meals.map(meal => {
                    return mealService.getMealDetails(meal.idMeal);
                });
                Promise.all(mealDetailsPromise).then((foundMeal) =>{
                    searchResultsPage(foundMeal);
                })
            })
        }
        else if(selectedValue == "name"){
            mealService.getMealByName(searchTerm).then((meals)=>{
                const mealDetailsPromise = meals.map(meal => {
                    return mealService.getMealDetails(meal.idMeal);
                });
                Promise.all(mealDetailsPromise).then((foundMeal) =>{
                    searchResultsPage(foundMeal);
                })
            })
        }
    })
}
export default formSubmitEvent