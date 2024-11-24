const storeSearches = (queryArray, term)=>{
    queryArray.push(term);
    localStorage.setItem("searchedTerms", JSON.stringify(queryArray));
}
export default storeSearches