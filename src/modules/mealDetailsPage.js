import MealApi from "../Api/MealApi";

const mealDetailsPage = (meal) =>{
    const createdMeal = document.createElement('div');
    createdMeal.className = 'row';
    createdMeal.innerHTML=` 
    <div class="col-12 d-flex justify-content-center">
        <div class="meal-details">
        <h2>${meal.strMeal}</h2>
        <div class="meal-details__img-con">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
        </div>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <p><strong>Tags:</strong> ${meal.strTags ? meal.strTags.split(',').join(', ') : 'None'}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${[...Array(20).keys()]
                .map(i => {
                    const ingredient = meal[`strIngredient${i + 1}`];
                    const measure = meal[`strMeasure${i + 1}`];
                    return ingredient && ingredient.trim() ? `<li>${measure} ${ingredient}</li>` : '';
                })
                .join('')}
        </ul>
        <div class="meal-links">
            ${meal.strYoutube ? `<a href="${meal.strYoutube}" target="_blank">Watch on YouTube</a>` : ''}
            ${meal.strSource ? `<a href="${meal.strSource}" target="_blank">View Recipe Source</a>` : ''}
        </div>
    </div>
</div>`;
        document.querySelector('main').appendChild(createdMeal)
};
export default mealDetailsPage
    
