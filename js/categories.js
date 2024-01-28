document.addEventListener('DOMContentLoaded', function () {
    const categoryContainer = document.getElementById('categoryContainer');

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => {
            displayCategories(data.categories);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            categoryContainer.innerHTML = 'An error occurred while fetching data.';
        });

    function displayCategories(categories) {
        categoryContainer.innerHTML = '';
        if (categories) {
            categories.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');

                const image = document.createElement('img');
                image.src = category.strCategoryThumb;
                image.alt = category.strCategory;
                categoryDiv.appendChild(image);

                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = category.strCategoryDescription;
                categoryDiv.appendChild(description);

                categoryContainer.appendChild(categoryDiv);
            });
        } else {
            categoryContainer.innerHTML = 'No categories found.';
        }
    }
});
