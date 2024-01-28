document.addEventListener('DOMContentLoaded', function () {
    const mealContainer = document.getElementById('mealContainer');

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then(response => response.json())
        .then(data => {
            displayMeals(data.meals);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            mealContainer.innerHTML = 'An error occurred while fetching data.';
        });

    function displayMeals(meals) {
        mealContainer.innerHTML = '';
        if (meals) {
            meals.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('meal');

                const mealImage = document.createElement('img');
                mealImage.src = meal.strMealThumb;
                mealImage.alt = meal.strMeal;
                mealDiv.appendChild(mealImage);

                const mealInfo = document.createElement('div');
                mealInfo.classList.add('info');

                const mealName = document.createElement('h2');
                mealName.textContent = meal.strMeal;
                mealInfo.appendChild(mealName);

                const mealCategory = document.createElement('p');
                mealCategory.textContent = `Category: ${meal.strCategory}`;
                mealInfo.appendChild(mealCategory);

                mealDiv.appendChild(mealInfo);

                mealContainer.appendChild(mealDiv);
            });
        } else {
            mealContainer.innerHTML = 'No meals found with chicken breast.';
        }
    }
});
