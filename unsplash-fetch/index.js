
const lista = document.querySelector('#lista');
const form = document.querySelector('form');
const searchTerm = document.querySelector('#search');

// anrop till Api
form.addEventListener('submit', e => {
    e.preventDefault();
    lista.innerHTML = '';
    getData(searchTerm.value);
});

async function getData(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
        headers: {
            'authorization': 'Client-ID fc0df560f78db55bf4f102d7313b9d221ad3ba348c2ffb1a3bc544a4b1699af6'
        }
    });
    const data = await response.json();
    showPhotos(data.results);
};

function showPhotos(array) {
    array.forEach(value => {
        const item = document.createElement('li');
        item.innerHTML = `<p>${value.description}</p><img src="${value.urls.thumb}" alt="${value.alt_description}">`;
        lista.appendChild(item);
    });
};


