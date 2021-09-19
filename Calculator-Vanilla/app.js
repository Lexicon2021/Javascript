const form = document.querySelector('form'); // vår form
const add = document.querySelector('.add'); // + knappen
const subtract = document.querySelector('.subtract'); // - knappen
const result = document.querySelector('.result'); // resultat av uträkningen
const multiply = document.querySelector('.multiply'); // gånger knappen
const divide = document.querySelector('.divide'); // divide knappen.

form.addEventListener('submit', e => {
    e.preventDefault();

    // Scoped variabler som hämtar vad man har skrivit i siffrafältet.
    let input1 = parseInt(document.querySelector('.input1').value);
    let input2 = parseInt(document.querySelector('.input2').value);
    
    // Adding
    add.addEventListener('click', () => {
        result.innerHTML = input1 + input2;
    });

    // Subtract
    subtract.addEventListener('click', () => {
        result.innerHTML = input1 - input2;
    });

    // Multiply
    multiply.addEventListener('click', () => {
        result.innerHTML = input1 * input2;
    });

    // Divide
    divide.addEventListener('click', () => {
        result.innerHTML = input1 / input2;
    });
});