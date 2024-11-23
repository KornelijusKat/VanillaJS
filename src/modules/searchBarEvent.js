import searchBar from "./searchBar";
const searchBarEvent = ()=>{
    document.querySelector('.search').addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector('main').innerHTML = searchBar();
    })
}
export default searchBarEvent