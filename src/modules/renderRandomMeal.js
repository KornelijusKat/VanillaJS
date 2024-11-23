import renderSixRandomMeals from "./renderSixRandomMeals";

const renderRandomMeals = ()=>{
    document.querySelector('.home').addEventListener('click',(e)=>{
        e.preventDefault();
        renderSixRandomMeals();
    })
}
export default renderRandomMeals