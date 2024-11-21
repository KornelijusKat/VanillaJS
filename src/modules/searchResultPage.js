import MealApi from "../Api/MealApi";

const searchResultsPage = (meals) =>{
    const contentBlock = document.querySelector('main')
    contentBlock.innerHTML = " ";
    const row = document.createElement('div');
    row.className = 'row d-flex justify-content-between';
    console.log(contentBlock);
    for (let meal of meals){
        let mealDiv = document.createElement('div');
        mealDiv.className = "col-4 mt-5 mealCon"
        mealDiv.innerHTML=`       
            <div class="meal card">
                <div class="meal__img-con"> 
                    <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}" class="image-fluid">
                </div> 
                <div class="meal__name">
                    <h2>${meal.strMeal}</h2>
                    <a href="#">View Recipe</a>
                </div>
            </div>`;
       
        console.log(mealDiv);
        row.appendChild(mealDiv)
      
    }
    contentBlock.appendChild(row);
}
export default searchResultsPage