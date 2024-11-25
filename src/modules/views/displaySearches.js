import searchService from "../services/searchService";
const displaySearches = ()=>{
    // user icon functions as search
    document.querySelector('.user-history').addEventListener('click', (e)=>{
        e.preventDefault();
        const main = document.querySelector('main');
        main.innerHTML = ''
        const searches = JSON.parse(localStorage.getItem(`searchedTerms`));
        const cardHeader = document.createElement('div');
        const card = document.createElement('div');
        card.className = 'card';
        cardHeader.className = 'card-header';
        const headerText = document.createElement('h4');
        headerText.className = 'mb-0';
        headerText.textContent = 'Recent Search Terms';
        cardHeader.appendChild(headerText);
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const listGroup = document.createElement('ul');
        listGroup.className = 'list-group';
        for(const search of searches){
            
            const termItem = document.createElement('li');
            const link = document.createElement('a');
            link.className = "ms-2"
            link.textContent ="search";
            link.href = "#";
            const [key, value] = search.split(' ');
            link.addEventListener('click',(e)=>{
                e.preventDefault();
                searchService(key, value);
            })
            termItem.className = 'list-group-item';
            termItem.textContent = search;
            termItem.appendChild(link);
            listGroup.appendChild(termItem);
        }
        cardBody.appendChild(listGroup);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        main.append(card);
    })
}
export default displaySearches