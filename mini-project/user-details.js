const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

let userPosts = [];
let isEveryPostRendered = false;

const user = JSON.parse(localStorage.getItem(`user-${userId}`));

const userInfoContainer = document.createElement('div');
userInfoContainer.className = 'user-info-container'

const userIdDiv = document.createElement('div');
userIdDiv.innerText = `User id: ${user.id}`;

const userEmailDiv = document.createElement('div');
userEmailDiv.innerText = `User email: ${user.email}`;

const userNameDiv = document.createElement('div');
userNameDiv.innerText = `User name: ${user.name}`;

const userUsernameDiv = document.createElement('div');
userUsernameDiv.innerText = `User username: ${user.username}`;

const userWebsiteDiv = document.createElement('div');
userWebsiteDiv.innerText = `User website: ${user.website}`;

const userCompany = document.createElement('div');
userCompany.innerText = `User company --- name: ${user.company.name}, bs: ${user.company.bs}, catchPhrase: ${user.company.catchPhrase}`;

const userAddressDiv = document.createElement('div');
userAddressDiv.innerText = `User address --- city: ${user.address.city}, street: ${user.address.street}, suite: ${user.address.suite}, zipcode: ${user.address.zipcode}, geo - lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}`;

userInfoContainer.append(
    userIdDiv,
    userEmailDiv,
    userNameDiv,
    userUsernameDiv,
    userWebsiteDiv,
    userCompany,
    userAddressDiv
    );

document.body.appendChild(userInfoContainer)

const showUserPostsButton = document.createElement('button');
showUserPostsButton.innerText = 'post of current user';
showUserPostsButton.className = 'show-user-posts-button'
showUserPostsButton.onclick = function () {
    if(userPosts.length === 0 || isEveryPostRendered) {
        return;
    }

    const postsWrapper = document.createElement('div');
    postsWrapper.className = 'posts-wrapper'
    const postContainers = [];

    for (let userPost of userPosts) {
        const container = document.createElement('div');
        container.className = 'post-card';
        const text = document.createElement('span');
        text.innerText = userPost.title;

        container.appendChild(text);

        const goToPostsButtonDiv = document.createElement('div');
        const goToPostsButton = document.createElement('a');
        goToPostsButton.innerText = 'Go to posts';
        goToPostsButton.href = `post-details.html?postId=${userPost.id}`;

        goToPostsButtonDiv.appendChild(goToPostsButton);
        container.appendChild(goToPostsButtonDiv);
        postContainers.push(container);
    }

    for (const post of postContainers) {
        postsWrapper.appendChild(post);
    }


    document.body.appendChild(postsWrapper)

    isEveryPostRendered = true;
}

document.body.appendChild(showUserPostsButton);

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            localStorage.setItem(`post-${post.id}`, JSON.stringify(post));
        }

        userPosts = posts;
    });

