const filterMeals = (meals, ingredient, category, area) =>{
    // filtering meals by ingredient, category, area. Will filter by all inputed filters.
    return meals.filter(meal =>{
        const ingredients = Object.keys(meal)
            .filter(key => key.startsWith("strIngredient") && meal[key])
            .map(key => meal[key].toLowerCase());
        const matchesIngredient = ingredient ? ingredients.some(ingre => ingre.includes(ingredient.charAt(0).toLowerCase() + ingredient.slice(1))) : true;
        const matchesCategory = category? meal.strCategory.includes(category.charAt(0).toUpperCase() + category.slice(1)) : true;
        const matchesArea = area ? meal.strArea.includes(area.charAt(0).toUpperCase() + area.slice(1)) : true;
        return matchesIngredient && matchesCategory && matchesArea
    })
}
export default filterMeals