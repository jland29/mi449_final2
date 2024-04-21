document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    const apiKey = 'YJVPbOHRXydJID3dD9aeWw==NB2ceiyHdLxxFLNT'; // Replace 'YOUR_API_KEY' with your actual API key
    
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm !== '') {
        const apiUrl = `https://api.nationalize.io?name=${searchTerm}&apikey=${apiKey}`;
        
        // Clear previous search results
        searchResults.innerHTML = '';
        
        // Send AJAX request to API
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const data = JSON.parse(xhr.responseText);
              
              // Process API response and update HTML
              if (data && data.airports && data.airports.length > 0) {
                data.airports.forEach(airport => {
                  const listItem = document.createElement('li');
                  listItem.textContent = airport.name; // Display airport name
                  searchResults.appendChild(listItem);
                });
              } else {
                const noResultsItem = document.createElement('li');
                noResultsItem.textContent = 'No airports found';
                searchResults.appendChild(noResultsItem);
              }
            } else {
              const errorItem = document.createElement('li');
              errorItem.textContent = 'Error fetching data';
              searchResults.appendChild(errorItem);
            }
          }
        };
        xhr.send();
      }
    });
  });