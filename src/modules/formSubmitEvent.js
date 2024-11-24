import searchService from "./searchService";
import storeSearches from "./storeSearches";
const formSubmitEvent = ()=>{
    const queryArray = [];
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const formSelected = document.querySelector('.form-select');
        let selectedValue = formSelected.value;
        const searchTerm = document.querySelector('.searchTerm').value;
        if(!searchTerm){
            document.querySelector('main').innerHTML = `
            <p>Please input search term</p>
            `;
            return;
        }
        storeSearches(queryArray, selectedValue+" "+searchTerm);
        //checking localstorage if search has been done before.
        searchService(selectedValue,searchTerm);
    })
}
export default formSubmitEvent