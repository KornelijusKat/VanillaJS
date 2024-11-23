const filterMeals = (meals, ingredient, category, area) =>{
    return meals.filter(meal =>{
        let loweredIngredient = ingredient.charAt(0).toLowerCase() + 
        console.log(loweredIngredient);
        const ingredients = Object.keys(meal)
            .filter(key => key.startsWith("strIngredient") && meal[key])
            .map(key => meal[key].toLowerCase());
        const matchesIngredient = ingredient ? ingredients.some(ingre => ingre.includes(ingredient.charAt(0).toLowerCase() + ingredient.slice(1))) : true;
        const matchesCategory = category? meal.strCategory.includes(category.charAt(0).toUpperCase() + category.slice(1)) : true;
        const matchesArea = area ? meal.strArea.includes(area.charAt(0).toUpperCase() + area.slice(1)) : true;
        console.log(area.charAt(0).toUpperCase());
        return matchesIngredient && matchesCategory && matchesArea
    })
}
export default filterMeals