document.addEventListener('DOMContentLoaded', function () {
    let searchInput1 = document.getElementById('searchInput1');
    let searchBtn1 = document.getElementById('searchBtn1');
    let mealContainer1 = document.getElementById('mealContainer1');
   let searchInput2 = document.getElementById('searchInput2');
   let searchBtn2 = document.getElementById('searchBtn2');
   let mealContainer2 = document.getElementById('mealContainer2');

    searchBtn1.addEventListener('click', function () {
        const searchTerm = searchInput1.value;
        if (searchTerm.trim() !== '') {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    displayMeals(data.meals, mealContainer1);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    mealContainer1.innerHTML = 'An error occurred while fetching data.';
                });
        }
    });

    searchBtn2.addEventListener('click', function () {
        const searchTerm = searchInput2.value;
        if (searchTerm.trim() !== '') {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    displayMeals(data.meals, mealContainer2);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    mealContainer2.innerHTML = 'An error occurred while fetching data.';
                });
        }
    });

    function displayMeals(meals, container) {
        container.innerHTML = '';
        if (meals) {
            meals.forEach(meal => {
                const mealElement = document.createElement('div');
                mealElement.classList.add('meal');
                mealElement.innerHTML = `
                    
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                   
                `;
                container.appendChild(mealElement);
            });
        } else {
            container.innerHTML = 'No meals found.';
        }
    }
});
