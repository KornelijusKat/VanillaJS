const displaySearches = ()=>{
    // user icon functions as search
    document.querySelector('.user-history').addEventListener('click', (e)=>{
        e.preventDefault();
        const main = document.querySelector('main');
        main.innerHTML = ''
        const searches = JSON.parse(localStorage.getItem(`searchedTerms`));
        const cardHeader = document.createElement('div');
        const card = document.createElement('div');
        card.className = 'card shadow-sm';
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
            termItem.className = 'list-group-item';
            termItem.textContent = search;
            listGroup.appendChild(termItem);
        }
        cardBody.appendChild(listGroup);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        main.append(card);
    })
}
export default displaySearches