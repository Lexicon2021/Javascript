// Hämta användarens val -klart

// Slumpa dator val - klart

// Visa Vinnare - klart

let userWeapon = undefined;
let computerWeapon = undefined;
const result = document.querySelector('#winner');
const resultat = document.querySelector('#resultat');
const stenKnapp = document.querySelector('#rock');
const saxKnapp = document.querySelector('#scissor');
const papperKnapp = document.querySelector('#paper');


stenKnapp.addEventListener('click', () => {
    userWeapon = 'sten';
    console.log(`Du har valt: ${userWeapon}`);
    getWinner();
});

saxKnapp.addEventListener('click', () => {
    userWeapon = 'sax';
    console.log(`du har valt: ${userWeapon}`);
    getWinner();
});

papperKnapp.addEventListener('click', () => {
    userWeapon = 'påse';
    console.log(`Du har valt: ${userWeapon}`);
    getWinner();
});

// beräkna vem som har vunnit matchen...
function getWinner () {
    computerWeapon = Math.round(Math.random() * 2);
    // Conditional Statement som kollar om computerWeapon och userWeapon är lika...
    if(computerWeapon === 0) {
        computerWeapon = 'sten';
    } else if(computerWeapon === 1) {
        computerWeapon = 'sax';
    } else if (computerWeapon === 2) {
        computerWeapon = 'påse';
    }

    
    resultat.innerHTML = `Ditt vapen är: ${userWeapon} och datorns vapen är: ${computerWeapon}`;

    // avgör vinnare och kolla om det blivit oavgjort.
    if (userWeapon === computerWeapon) {
        result.innerHTML = "Det blev oavgjort! 😃";
    } else if (userWeapon === "sten") {
        result.innerHTML = computerWeapon === "sax" ? "Du vann! 🏆" : "Datorn vann! 😮";
    } else if (userWeapon === "sax") {
        result.innerHTML = computerWeapon === 'påse' ? 'Du vann! 👺' : 'Datorn vann! 😮';
    } else if (userWeapon === "påse") {
        result.innerHTML = computerWeapon === 'sten' ? 'Du vann! 🏆' : 'Datorn vann! 😮';
    }
}
