

const songs = [
    { artist: 'Nirvana', album_name: 'In Utero', tracks: ['Scentless Apprentice', 'Serve the serve servants', 'rape me', 'All apologies'], track_number: 4 },
    { artist: 'Meat Puppets', album_name: 'Backwater', tracks: ['Back One', 'Back Two', 'Back Three', 'Oh No.'], track_number: 4 },
    { artist: 'Red Hot Chili Peppers', album_name: 'Californication', tracks: ['Californication', 'Otherside', 'Under the Bridge'], track_number: 3 },
];

// console.log(songs);

// console.clear();
// * ForEach
songs.forEach((value, index) => {
    const artists = value;
    // console.log(artists);
    displayTracks(artists.tracks);
});

//console.clear(); // innan denna method så syns inget i consolen.

// //* For loops <- grunded och försår vad som händer.
for (let index = 0; index < songs.length; index++) {  // Keep It Simple Stupid. // Do Not Repeat Yourself



}



//* Maps
function displayTracks(array) {
    console.log(array);
    array.map((value, index) => {
        document.write(value + '<br />');
    });
}
