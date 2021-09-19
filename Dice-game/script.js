let throws = 0;
let currentGoal = 1;

const dice = {
    sides: 6,
    throw() {
        return Math.ceil(Math.random() * this.sides);
    }
};

document.querySelector('button').addEventListener('click', () => {

    // throw dice
    let result = dice.throw();

    // Show dice in UI
    document.querySelector('#dice').classList = '';
    document.querySelector('#dice').classList.add('dice', `dots-${result}`);

    // Increace throws with 1
    throws++;
    document.querySelector('button').innerText = `Kasta ( ${throws} )`;
    console.log(`You threw ${result}.`);

    // Jämföra för vinst
    if (result === currentGoal && currentGoal < 6) {

        // remove faded state
        document.querySelector(`.dots-${result}`).classList.remove('faded');

        // increase goal with 1
        currentGoal++;
    } else if (result === currentGoal && currentGoal === 6) {

        // remove faded state
        document.querySelector(`.dots-${result}`).classList.remove('faded');

        console.log(`You rolled a ladder in ${throws} throws`);

        setTimeout(() => {
            alert(`You rolled a ladder in ${throws} throws`);
        }, 100);

        setTimeout(() => {
            const reset = confirm('Reset game?'); // returns true or false.
            if(reset) {
                console.log('resetting game...');
                    currentGoal = 1;
                    throws = 0;
                    document.querySelectorAll('.dice').forEach(el => {
                        el.classList.add('faded');
                    });
                    
                    document.querySelector('#dice').classList = 'dice';
            }
        }, 1500);

        
    }
});