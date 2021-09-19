const shoppingList = ['Coffee', 'Milk', 'Sugar', 'Bananas', 'Oatmeal', 'Potatoes', 'Eggs'];
const list = document.querySelector('#list');

for (let i = 0; i < shoppingList.length; i++) {
    let itemInlist = shoppingList[i];
    let li = document.createElement('li');
    li.innerText = itemInlist;
    list.appendChild(li);
}
