import MealApi from "../Api/MealApi";

const recipePage = () =>{
    document.querySelector('.recipe').addEventListener('click',(e)=>{
        e.preventDefault();
        for(let x = 0;x<6;x++){
            let newMeal = new MealApi('https://www.themealdb.com/api/json/v1/1');
            newMeal.getRandomMeal().then((meal) => {
                const createdMeal = document.createElement('div');
                createdMeal.innerHTML=` <div class="meal">
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
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
    </div>`;
                document.querySelector('main').appendChild(createdMeal)
              });
        }
    })
}
export default recipePage