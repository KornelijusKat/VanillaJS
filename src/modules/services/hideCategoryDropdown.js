import displayCategoryDropdown from "../ui/displayCategoryDropdown";
// function to hide and show categories during search
const hideCategoryDropdown = () =>{
    document.getElementById('searchBar').addEventListener('focus', () => {
        const searchType = document.getElementById('searchTypeSelector').value;
        if (searchType === "Category") {
            displayCategoryDropdown();
        } else {
          
        }
      });
      document.addEventListener('click', (event) => {
        const isClickInsideSearchBar = searchBar.contains(event.target);
        if (!isClickInsideSearchBar) {
            document.getElementById('categoryDropdown').style.display = 'none'; 
        }
    });
    }
export default hideCategoryDropdown