import MealApi from "../Api/MealApi";
import filterForm from "./filterForm";
import filterSubmitEvent from "./filterSubmitEvent";
import mealDetailsPage from "./mealDetailsPage";
import mealCard from "./mealCard";
//Renders search results on to the page
const searchResultsPage = (meals) =>{
  const contentBlock = document.querySelector('main')
  contentBlock.innerHTML = " ";
  contentBlock.innerHTML = filterForm();
  const row = document.createElement('div');
  row.className = 'row d-flex';
  row.id = 'mealsRow';
  for (let meal of meals){
      let mealDiv = document.createElement('div');
      mealDiv.className = "col-sm-12 col-md-6 mt-5 mealCon";
      mealDiv.innerHTML= mealCard(meal);
      row.appendChild(mealDiv)
      mealDiv.querySelector('.meal-link').addEventListener('click', (e) => {
          e.preventDefault();
          contentBlock.innerHTML = " ";
          mealDetailsPage(meal);
      });
  }
  contentBlock.appendChild(row);
  //initializes the filters addevent and passes current meals
  filterSubmitEvent(JSON.parse(localStorage.getItem(`meals`)));
}

export default searchResultsPage