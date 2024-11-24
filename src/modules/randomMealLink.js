const randomMealLinks = () =>{
    document.querySelector('main').addEventListener('click', (e) =>{
        e.preventDefault();
        if (e.target && e.target.id === 'button') {
            renderSixRandomMeals();
        }
    })
}