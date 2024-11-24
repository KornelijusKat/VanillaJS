const filterForm = () =>{
   return  `<div class="container my-5">
    <form class="row g-3 align-items-center filterForm" id="filterForm" ">

      <div class="col-md-4">
        <label for="ingredientInput" class="form-label">Ingredient</label>
        <input type="text" class="form-control" id="ingredientInput" placeholder="Enter ingredient">
      </div>

      <div class="col-md-4">
        <label for="categoryInput" class="form-label">Category</label>
        <input type="text" class="form-control" id="categoryInput" placeholder="Enter category">
      </div>

      <div class="col-md-4">
        <label for="areaInput" class="form-label">Area</label>
        <input type="text" class="form-control" id="areaInput" placeholder="Enter area">
      </div>

      <div class="col-12 text-end mt-3">
        <button type="submit" id='filterBtn' class="btn btn-primary">Search</button>
      </div>
    </form>
  </div>`
}
export default filterForm