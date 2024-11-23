const mealCard = (meal) =>{
    return `       
            <div class="meal card">
                <div class="meal__img-con"> 
                    <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}" class="image-fluid">
                </div> 
                <div class="meal__name">
                    <h2>${meal.strMeal}</h2>
                    <a href="#" class="meal-link">View Recipe</a>
                </div>
            </div>`;
}
export default mealCard