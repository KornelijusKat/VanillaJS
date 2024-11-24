import renderSixRandomMeals from "./renderSixRandomMeals";
//renders 6 random meals when home link is pressed;
const renderRandomMeals = ()=>{
    document.querySelector('.home').addEventListener('click',(e)=>{
        e.preventDefault();
        renderSixRandomMeals();
    })
}
export default renderRandomMeals