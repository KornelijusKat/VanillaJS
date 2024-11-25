import MealApi from "../../Api/MealApi";
import searchResultsPage from "../views/searchResultPage";

const searchService = (selectedValue,searchTerm) =>{
    const mealService = new MealApi('https://www.themealdb.com/api/json/v1/1');
    const parsedData =JSON.parse(localStorage.getItem(`${selectedValue}${searchTerm}`)); 
    if(parsedData !== null){
        localStorage.setItem('meals',JSON.stringify(parsedData));
        searchResultsPage(parsedData); 
    }
    else if(selectedValue == "ingredient"){
        mealService.getMealByIngredient(searchTerm).then((meals)=>{
            
            if(!meals){
                document.querySelector('main').innerHTML = `
                <p>No results found for ${searchTerm} </p>
                `;
                return;
            }
            //calling another end point to get more details for later usage
            const mealDetailsPromise = meals.map(meal => {
                return mealService.getMealDetails(meal.idMeal);
            });
            Promise.all(mealDetailsPromise).then((foundMeal) =>{
                //storing the meal by search terms for parsing and a current meals array for filtering.
                localStorage.setItem(`ingredient${searchTerm}`,JSON.stringify(foundMeal));
                localStorage.setItem(`meals`,JSON.stringify(foundMeal));
                //then rendering the meals
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
}
export default searchService