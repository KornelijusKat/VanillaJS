import ajaxService from "../modules/ajaxService";
class MealApi{
    constructor(baseUri){
        this.baseUri = baseUri;

    }
    constructUrl(endpoint) {
        return `${this.baseUri}${endpoint}`;
    }  
    getMealDetails(id){
        return ajaxService(this.constructUrl(`/lookup.php?i=${id}`)).then(response=>{
            return response.meals[0];
        })
    }
    getRandomMeal(){
        return ajaxService(this.constructUrl(`/random.php`)).then(response=>{
            return response.meals[0];
        })
    }
    getMealByName(name){
        return ajaxService(this.constructUrl(`/search.php?s=${name}`)).then(response=>{
            return response.meals;
        })
    }
    getMealsByFirstLetter(letter){
        return ajaxService(this.constructUrl(`/search.php?f=${letter}`)).then(response=>{
            return response.meals;
        })
    }
    getMealByIngredient(ingredient){
        return ajaxService(this.constructUrl(`/filter.php?i=${ingredient}`)).then(response=>{
            return response.meals;
        })
    }
    getMealByCategory(category){
        return ajaxService(this.constructUrl(`/filter.php?c=${category}`)).then(response=>{
            return response.meals;
        })
    }
    getMealByArea(area){
        return ajaxService(this.constructUrl(`/filter.php?a=${area}`)).then(response=>{
            return response.meals;
        })
    }
}
export default MealApi