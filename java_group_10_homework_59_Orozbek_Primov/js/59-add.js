var loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
})

var postForm = document.getElementById("post-form");
postForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: data.get('title'),
            body: data.get('body'),
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => addPost(json));
})

function addPost(post) {
    console.log(post);
    var post1 = document.getElementById("post1");
    var clone = post1.cloneNode(true);
    var posts = document.getElementById("posts");
    var count = posts.childElementCount + 1;
    clone.id = 'post' + count;
    posts.appendChild(clone);
}
