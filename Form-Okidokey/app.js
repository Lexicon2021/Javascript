const laForma = document.querySelector('#the-form');

laForma.addEventListener('submit', ev => {
    ev.preventDefault();
    const okidokey = confirm('All Ok?');

    if (okidokey) {
        const name = prompt('What is your name?');
        alert(`Welcome ${name} to the class!`);
    } else {
        const reason = prompt('Why is it not good?');
        alert(`My reason is ${reason}`);
    }
});