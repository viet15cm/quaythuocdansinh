document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const autocompleteList = document.getElementById('autocompleteList');

    const data = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Strawberry', 'Watermelon', 'Blueberry'];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        autocompleteList.innerHTML = '';

        if (!query) {
            return false;
        }

        const filteredData = data.filter(item => item.toLowerCase().includes(query));

        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;

            div.addEventListener('click', () => {
                searchInput.value = item;
                autocompleteList.innerHTML = '';
            });

            autocompleteList.appendChild(div);
        });
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !autocompleteList.contains(e.target)) {
            autocompleteList.innerHTML = '';
        }
    });
});