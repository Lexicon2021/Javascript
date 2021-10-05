

const postList = document.querySelector('#post-list');

const posts = [
    {title: 'How To Eat Jello', body: 'bröd text av Post One'},
    {title: 'Lets Fillet a Mango', body: 'bröd text av Post Two'},
];

const getPosts = () => {
    setTimeout(() => {
        let result = '';
        posts.forEach((post, index) => {
            postList.innerHTML +=  `<li>${post.title}</li>`;
        });
    }, 1000); // *** painted already
};


// Andra parametern är en funktion som körs i en function.
const createPost = (post, callback) => {
    setTimeout(() => {
        callback();
        posts.push(post);
    }, 2000);
};

const newPost = {
    title: 'Banana Man',
    body: 'bröd text av Banana Man'
};

createPost(newPost, getPosts);