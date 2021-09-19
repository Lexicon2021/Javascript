
const todoList = document.querySelector('#todos');

const fetchData = async (id) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/todos`); // fetch() returns a promise, so we need to wait for it.

    const result = await res.json(); // res is now only an http response, so we need to call res.json()
    renderData(result);
    
};

fetchData(12);

const renderData = data => { // data är en parameter till funktionen ovan.
    data.map(value => { // data är en array.
        const li = document.createElement('li'); // skapar vi en li.
        li.innerHTML = `User Id:<h1>${value.userId}</h1> Task: <p>${value.title}</p>, completed: <small>${value.completed}</small>`; // lägger vi till info.
        todoList.appendChild(li);
    });
};