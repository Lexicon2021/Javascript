

const postList = document.querySelector('#post-list');
const URL = 'http://jsonplaceholder.typicode.com';

const posts = [
    { title: 'How To Eat Jello', body: 'bröd text av Post One' },
    { title: 'Lets Fillet a Mango', body: 'bröd text av Post Two' },
];

const getPosts = () => {
    setTimeout(() => {
        posts.forEach((post, index) => {
            postList.innerHTML += `<li>${post.title}</li>`;
        });
    }, 1000); // *** painted already
};



const createPost = (post) => {
    return new Promise((resolve, reject) => { //*** Jag lovar att göra detta annars blir jag arg och gör nå't annat.

        setTimeout(() => {
            posts.push(post);

            const error = false; // *** Change to true to show error handling. 

            if (!error) {
                resolve();
            } else {
                reject('Oh no! Server go down...');
            }

        }, 2000);
    });
};

const newPost = {
    title: 'Cherry Blossom',
    body: 'bröd text av Cherry Blossom'
};


createPost(newPost)
    .then(getPosts)
    .catch(err => {
        console.log(err);
});


// *** Promise.all
const lovar1 = Promise.resolve('Välkommen till dagen!');
const lovar2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Vi ses imorgon');
});

const handleData = fetch(`${URL}/posts`).then(res => res.json());

Promise.all([lovar1, lovar2, handleData])
.then(result => {
    console.log(result);
});





// *** Async / Await
const waitForData = async () => {
    await createPost(newPost);
    getPosts();
};

waitForData();


// with fetch
const getUsers = async () => {
    const res = await fetch(`${URL}/users`);

    const data = await res.json();
    console.log(data);
};

getUsers();