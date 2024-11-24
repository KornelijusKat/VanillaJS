import filterMeals from "./filterMeals";
import searchResultsPage from "./searchResultPage";
// filter submition event to take values, pass them and call the meals renderer
const filterSubmitEvent = (meals)=>{
    const mealsForFilter = JSON.parse(JSON.stringify(meals));
    document.querySelector("#filterBtn").addEventListener('click', (e) =>{
        e.preventDefault();
        const ingredient = document.getElementById("ingredientInput").value;
        const category = document.getElementById("categoryInput").value;
        const area = document.getElementById("areaInput").value;
        const filteredMeals = filterMeals(mealsForFilter, ingredient, category, area);
        if(filteredMeals.length === 0){
            document.querySelector('#mealsRow').innerHTML = `
            <div>
                <p>No filter results found</p>
            </div>
            `;
            return
        }
        searchResultsPage(filteredMeals);
    })
}
export default filterSubmitEvent