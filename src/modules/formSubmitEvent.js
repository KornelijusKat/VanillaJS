import MealApi from "../Api/MealApi";
import searchResultsPage from "./searchResultPage";
import storeSearches from "./storeSearches";
const formSubmitEvent = ()=>{
    const queryArray = [];
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const radioMarks = document.querySelector('.form-select');
        let selectedValue = radioMarks.value;
        console.log(selectedValue);
        const mealService = new MealApi('https://www.themealdb.com/api/json/v1/1');
        const searchTerm = document.querySelector('.searchTerm').value;
        if(!searchTerm){
            document.querySelector('main').innerHTML = `
            <p>Please input search term</p>
            `;
            return;
        }
        storeSearches(queryArray, searchResultsPage);
        const parsedData =JSON.parse(localStorage.getItem(`${selectedValue}${searchTerm}`)); 
        if(parsedData !== null){
            localStorage.setItem('meals',JSON.stringify(parsedData));
            searchResultsPage(parsedData); 
        }
        else if(selectedValue == "ingredient"){
            mealService.getMealByIngredient(searchTerm).then((meals)=>{
                console.log(meals);
                if(!meals){
                    document.querySelector('main').innerHTML = `
                    <p>No results found for ${searchTerm} </p>
                    `;
                    return;
                }
                const mealDetailsPromise = meals.map(meal => {
                    return mealService.getMealDetails(meal.idMeal);
                });
                Promise.all(mealDetailsPromise).then((foundMeal) =>{
                    localStorage.setItem(`ingredient${searchTerm}`,JSON.stringify(foundMeal));
                    localStorage.setItem(`meals`,JSON.stringify(foundMeal));
                    searchResultsPage(foundMeal);
                })
            })
        }
        else if(selectedValue == "Category"){
            mealService.getMealByCategory(searchTerm).then((meals)=>{
                console.log(meals);
                if(!meals){
                    document.querySelector('main').innerHTML = `
                    <p>No results found for ${searchTerm} </p>
                    `;
                    return;
                }
                const mealDetailsPromise = meals.map(meal => {
                    return mealService.getMealDetails(meal.idMeal);
                });
                Promise.all(mealDetailsPromise).then((foundMeal) =>{
                    localStorage.setItem(`Category${searchTerm}`,JSON.stringify(foundMeal));
                    localStorage.setItem(`meals`,JSON.stringify(foundMeal));
                    searchResultsPage(foundMeal);
                })
            })
        }
        else if(selectedValue == "name"){
            mealService.getMealByName(searchTerm).then((meals)=>{
                console.log(meals);
                if(!meals){
                    document.querySelector('main').innerHTML = `
                    <p>No results found for ${searchTerm} </p>
                    `;
                    return;
                }
                const mealDetailsPromise = meals.map(meal => {
                    return mealService.getMealDetails(meal.idMeal);
                });
                Promise.all(mealDetailsPromise).then((foundMeal) =>{
                    localStorage.setItem(`name${searchTerm}`,JSON.stringify(foundMeal));
                    localStorage.setItem('meals',JSON.stringify(foundMeal));
                    searchResultsPage(foundMeal);
                })
            })
        }
      
    })
}
export default formSubmitEvent