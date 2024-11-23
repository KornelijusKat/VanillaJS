import MealApi from "../Api/MealApi";

const renderRandomMeals = ()=>{
    document.querySelector('.home').addEventListener('click',(e)=>{
        e.preventDefault();
        const mealCon = document.createElement('div');
        mealCon.className = "row d-flex justify-content-between"
        mealCon.innerHTML =`
            <div class='row'>
                <div class='col discover heading'>
                    <h2>Discover, Create, Share</h2>
                    <p>Check our most popular recipes of this week</p>
                </div>
                <div class='col text-end'>
                    <button class="btn btn-primary">See All</button>
                </div>
            </div>
        `
        document.querySelector('main').innerHTML = ""
        document.querySelector('main').appendChild(mealCon);
        for(let x = 0;x<6;x++){
            let newMeal = new MealApi('https://www.themealdb.com/api/json/v1/1');
            newMeal.getRandomMeal().then((meal) => {
                const createdMeal = document.createElement('div');
                createdMeal.className = "col-4 mt-5 mealCon"
                createdMeal.innerHTML=`       
                    <div class="meal card">
                        <div class="meal__img-con"> 
                            <img src="${meal.strMealThumb}/preview" alt="${meal.strMeal}" class="image-fluid">
                        </div> 
                        <div class="meal__name">
                            <h2>${meal.strMeal}</h2>
                            <a href="#">View Recipe</a>
                        </div>
                    </div>`;
                mealCon.appendChild(createdMeal);
              });
        }
    })
}
export default renderRandomMeals