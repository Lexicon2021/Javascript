const clock = document.querySelector('.klocka');
const goHomeH1 = document.querySelector('.go-home');
// räkna ut tiden och visa den på sidan.
function time () {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    if(hours === 17) {
        goHomeH1.innerHTML = 'To go home';
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let time = `<strong>The time is ${hours}:${minutes}:${seconds}</strong>`; // String interpolation.
    clock.innerHTML = time;
};

// körs varje 5 sekunder.
setInterval(() => {
    time();
}, 1000); // millisekunder.