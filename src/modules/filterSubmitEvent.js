import filterMeals from "./filterMeals";
import searchResultsPage from "./searchResultPage";

const filterSubmitEvent = (meals)=>{
    const mealsForFilter = JSON.parse(JSON.stringify(meals));
    document.querySelector(".filterForm").addEventListener('submit', (e) =>{
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
            return;
        }
        searchResultsPage(filteredMeals);
    })
}
export default filterSubmitEvent