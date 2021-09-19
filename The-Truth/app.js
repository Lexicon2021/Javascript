// array of names.
const names = ['Max', 'Calle', 'Andreas'];

// for loop som kollar alla namn.
for(let i = 0; i < names.length; i++) {
    // här kollar vi om namnet Max finns med...
    if(names[i] === 'Max') {
        //om sant så händer något här...
        document.querySelector('#h1').innerText = 'Yeah, he is a cool guy!';
    }
}