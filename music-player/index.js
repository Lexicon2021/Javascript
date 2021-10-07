const audio = document.querySelector('#audio-player');
const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#music-form');
const lista = document.querySelector('#lista');


let token = '';

function playSong(song) {
    if(song === 'null') {
        audio.pause();
        alert('Song could not be played');
    } else {
        audio.src = song;
        audio.play();
    }
}

async function getToken() {
    const response = await fetch('https://blooming-reef-63913.herokuapp.com/api/token');
    const data = await response.json();
    token = data.token;
}

//https://api.spotify.com/v1/search?q=spirit%20of%20the%20season&type=track
async function getSongs(song) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${song}`+
    '&type=track', {
        headers: {
            'authorization': 'Bearer ' + token
        }
    });

    const data = await response.json();
    for( let i = 0; i < data.tracks.items.length; i++) {
        const songItem = document.createElement('li');
        songItem.innerHTML = `${data.tracks.items[i].name} <button class="track" data-song="${data.tracks.items[i].preview_url}">Play</button>`;
        lista.appendChild(songItem);
    }

    const playButtons = document.querySelectorAll('.track');
    for(let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', event => {          
            playSong(event.target.dataset.song);
        });
    }
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = queryInput.value;
    getSongs(query);
});

getToken();