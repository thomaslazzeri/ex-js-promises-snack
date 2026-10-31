/* const getPostTitle = (id) => {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => data.title);
};

getPostTitle(1).then((title) => console.log(title)); */

const getPost = (id) => {
    let post;
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            post = data;
            return fetch(`https://dummyjson.com/users/${post.userId}`);
        })
        .then((res) => res.json())
        .then((utente) => {
            post.user = utente;
            return post;
        });
};

getPost(1).then((post) => console.log(post));