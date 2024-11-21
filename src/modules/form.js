const form = () =>{
    return `
        <div class="container mt-5">
    <div class="text-center">
      <h1 class="mb-4">Find Your Favorite Meals</h1>
      <form class="row g-3 justify-content-center">
        <div class="col-md-4">
          <input type="text" class="form-control searchTerm" placeholder="Search by name or ingredient" aria-label="Search">
        </div>
         <div class="col-md-2">
          <div class="form-check">
            <input class="form-check-input search-radio" type="radio" name="searchBy" value="name" id="searchByName" checked>
            <label class="form-check-label" for="searchByName">
              Search by Name
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input search-radio" type="radio" name="searchBy" value="ingredient" id="searchByIngredient">
            <label class="form-check-label" for="searchByIngredient">
              Search by Ingredient
            </label>
          </div>
        </div>
        <div class="col-md-auto">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </form>
        <div class="col-md-3">
          <div class="list-group">
            <a class="list-group-item category-link" data-category="">All Categories</a>
            <a class="list-group-item category-link" data-category="Breakfast">Breakfast</a>
            <a class="list-group-item category-link" data-category="Chicken">Chicken</a>
            <a class="list-group-item category-link" data-category="Lamb">Lamb</a>
            <a class="list-group-item category-link" data-category="Beef">Beef</a>
            <a class="list-group-item category-link" data-category="Pork">Pork</a>
            <a class="list-group-item category-link" data-category="Goat">Goat</a>
            <a class="list-group-item category-link" data-category="Seafood">Seafood</a>
            <a class="list-group-item category-link" data-category="Miscellaneous">Miscellaneous</a>
            <a class="list-group-item category-link" data-category="Pasta">Pasta</a>
            <a class="list-group-item category-link" data-category="Desserts">Desserts</a>
            <a class="list-group-item category-link" data-category="Starter">Starter</a>
            <a class="list-group-item category-link" data-category="Vegan">Vegan</a>
            <a class="list-group-item category-link" data-category="Vegetarian">Vegetarian</a>
          </div>
        </div>
    </div>
  </div>
    `
}
export default form