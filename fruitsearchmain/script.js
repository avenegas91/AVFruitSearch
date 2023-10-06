const searchInput = document.getElementById('fruit')
const suggestions = document.getElementById('suggestions-container');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Display suggestions based on users input:

function showSuggestions(input) {
    const filteredSuggestions = fruit.filter(suggestion =>
        suggestion.toLowerCase().includes(input)
        );

        // Clearing any previous suggestions
        suggestions.innerHTML = '';

        // Displaying filtered suggestions
        filteredSuggestions.forEach(suggestion => {
            const listItem = document.createElement('div');
            listItem.className = 'suggestion-item';
            listItem.textContent = suggestion;
            listItem.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestions.computedStyleMap.display = 'none';
            });
            suggestions.appendChild(listItem);
        });

        // Shows the suggestions if one applies
        if (filteredSuggestions.length > 0) {
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
}

// Keystroke event listener
searchInput.addEventListener('input', () => {
    const userInput = searchInput.value.toLowerCase();
    showSuggestions(userInput);
});

//Clicking outside of container event listener
document.addEventListener('click', (event) => {
    if (!suggestions.contains(event.target)) {
        suggestions.style.display = 'none';
    }
});