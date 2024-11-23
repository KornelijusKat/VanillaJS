const displayCategoryDropdown = () => {
    const dropdown = document.getElementById('categoryDropdown');
    dropdown.innerHTML = '';
    const categories = [
      "Breakfast",
      "Chicken",
      "Lamb",
      "Beef",
      "Pork",
      "Goat",
      "Seafood",
      "Miscellaneous",
      "Pasta",
      "Dessert",
      "Starter",
      "Vegan",
      "Vegetarian"
  ];
    categories.forEach(category => {   
        const item = document.createElement('li');
        item.className = 'dropdown-item';
        item.textContent = category;
        item.onclick = () => {
            document.getElementById('searchBar').value = category; 
            dropdown.style.display = 'none'; 
        };
        dropdown.appendChild(item);
    });
  
    dropdown.style.display = 'block';
  }
  export default displayCategoryDropdown