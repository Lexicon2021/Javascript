// reference to localStorage
let storage = window.localStorage;
let list = JSON.parse(storage.getItem('shopping-list'));

if (list === null) {
    storage.setItem('shopping-list', JSON.stringify([]));
}

const appendList = function (array, location) {
    if(array === null) {
        return '';
    }

    var template = array.map((item, id) => {
        return `<li class="item" id=${id}>${item} <button class="delete">Delete</button><button class="check">Check</button></li>`;
    });

    $(location).html(template);
};

const addItem = item => {
    let itemToAdd  = [];
    itemToAdd.push(item);
    let shoppingList = JSON.parse(storage.getItem('shopping-list'));
    shoppingList.push(itemToAdd);
    storage.setItem('shopping-list', JSON.stringify(shoppingList));
};

const deleteItem = (array, itemToDelete) => {
    array.splice(itemToDelete,1);
    storage.setItem('shopping-list', JSON.stringify(array));
    appendList(array, $('.list'));
};

$(() => { // document ready function.
    appendList(list, $('.list'));

    $('form').submit((e) => {
        e.preventDefault();
        const item = $('input').val();
        addItem(item);
        list.push(item);
        appendList(list, $('.list'));
    });

    $('.list').on('click', '.delete', (ev) => {
        var itemToDelete = $(ev.currentTarget).closest('li').attr('id');
        deleteItem(list, itemToDelete);
    });

    $('.list').on('click', '.check', function () {
        $(this).parent().toggleClass('checked');
    });


});
