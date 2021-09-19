const shoppingList = [];
const form = document.querySelector('#shopping-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let input = document.querySelector('#input-form').value;
    if(input === '') {
        alert('Add something');
        return false;
    }

    shoppingList.push(input);
    const li = document.createElement('li');
    li.innerText = input;
    document.querySelector('#list').appendChild(li);
    form.reset();
});