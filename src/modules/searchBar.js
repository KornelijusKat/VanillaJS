const searchBar = () =>{
    return ` <form class="d-flex position-relative" id="searchForm">
                            <select class="form-select me-2" id="searchTypeSelector" aria-label="Search Type">
                                <option value="name" selected>Name</option>
                                <option value="Category">Category</option>
                                <option value="ingredient">Ingredient</option>
                            </select>
                            <input 
                                type="text" 
                                class="form-control searchTerm" 
                                placeholder="Search meals..." 
                                id="searchBar" 
                                autocomplete="off" 
                                aria-label="Search"
                            >
                            <ul id="categoryDropdown" class="dropdown-menu w--50" style="display: none;"></ul>
                            <button class="btn btn-outline-primary ms-2" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
            `
}
export default searchBar