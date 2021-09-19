const body = document.body;
const value = document.querySelector('.value');

let x = 0;
let y = 0;

body.addEventListener('mousemove', event => {
    // x och y ändras i värde vart man flyttar musen.
    x = event.clientX;
    y = event.clientY;
    const random = Math.round(Math.random() * 255);
    // Applicerar x & y till rgb värden till backgroundColor av body.
    body.style.backgroundColor = `rgb(${x}, ${y}, ${random})`;
    value.innerHTML = `<h1>The color value is ${body.style.backgroundColor}</h1>`;
});