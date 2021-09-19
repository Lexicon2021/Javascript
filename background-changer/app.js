const form = document.querySelector('#form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let color1 = document.querySelector('#color1').value;
    let color2 = document.querySelector('#color2').value;
    let color3 = document.querySelector('#color3').value;

    document.querySelector('.box1').style.backgroundColor = color1;
    document.querySelector('.box2').style.backgroundColor = color2;
    document.querySelector('.box3').style.backgroundColor = color3;
});