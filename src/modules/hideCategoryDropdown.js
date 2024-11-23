import displayCategoryDropdown from "./displayCategoryDropdown";
const hideCategoryDropdown = () =>{
    document.getElementById('searchBar').addEventListener('focus', () => {
        const searchType = document.getElementById('searchTypeSelector').value;
        if (searchType === "Category") {
            displayCategoryDropdown();
        } else {
            document.getElementById('categoryDropdown').style.display = 'none'; 
        }
      });
    }
export default hideCategoryDropdown