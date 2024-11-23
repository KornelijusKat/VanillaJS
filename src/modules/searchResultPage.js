import MealApi from "../Api/MealApi";
import filterSubmitEvent from "./filterSubmitEvent";
import mealDetailsPage from "./mealDetailsPage";

const searchResultsPage = (meals) =>{
    const contentBlock = document.querySelector('main')
    contentBlock.innerHTML = " ";
    contentBlock.innerHTML = `
         <div class="container my-5">
    <form class="row g-3 align-items-center filterForm" id="filterForm" ">

      <div class="col-md-4">
        <label for="ingredientInput" class="form-label">Ingredient</label>
        <input type="text" class="form-control" id="ingredientInput" placeholder="Enter ingredient">
      </div>

      <div class="col-md-4">
        <label for="categoryInput" class="form-label">Category</label>
        <input type="text" class="form-control" id="categoryInput" placeholder="Enter category">
      </div>

      <div class="col-md-4">
        <label for="areaInput" class="form-label">Area</label>
        <input type="text" class="form-control" id="areaInput" placeholder="Enter area">
      </div>

      <div class="col-12 text-end mt-3">
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
    </form>
  </div>

    `
    const row = document.createElement('div');
    row.className = 'row d-flex justify-content-between';
    row.id = 'mealsRow';
    for (let meal of meals){
        let mealDiv = document.createElement('div');
        mealDiv.className = "col-4 mt-5 mealCon";
        // Add data attributes for filtering
    mealDiv.dataset.area = meal.strArea.toLowerCase();
    mealDiv.dataset.category = meal.strCategory.toLowerCase();
    mealDiv.dataset.ingredients = Object.values(meal)
        .filter((value) => typeof value === 'string' && value.toLowerCase().includes('ingredient'))
        .join(' ')
        .toLowerCase();
        mealDiv.innerHTML=`       
            <div class="meal card">
                <div class="meal__img-con"> 
                    <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}" class="image-fluid">
                </div> 
                <div class="meal__name">
                    <h2>${meal.strMeal}</h2>
                    <a href="#" class="meal-link">View Recipe</a>
                </div>
            </div>`;
        row.appendChild(mealDiv)
        mealDiv.querySelector('.meal-link').addEventListener('click', (e) => {
            e.preventDefault();
            contentBlock.innerHTML = " ";
            mealDetailsPage(meal);
        });
    }
    contentBlock.appendChild(row);
    filterSubmitEvent(JSON.parse(localStorage.getItem(`meals`)));
}

export default searchResultsPage