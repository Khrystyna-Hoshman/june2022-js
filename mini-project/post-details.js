// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

const post = JSON.parse(localStorage.getItem(`post-${postId}`));

const postInfoContainer = document.createElement('div');
postInfoContainer.className = 'post-info-container';

const postIdDiv = document.createElement('div');
postIdDiv.innerText = `Post id: ${post.id}`;

const postUserIdDiv = document.createElement('div');
postUserIdDiv.innerText = `Post userId: ${post.userId}`;

const postBodyDiv = document.createElement('div');
postBodyDiv.innerText = `Post Body: ${post.body}`;

const postTitleDiv = document.createElement('div');
postTitleDiv.innerText = `Post title: ${post.title}`;

postInfoContainer.append(postIdDiv, postUserIdDiv, postBodyDiv, postTitleDiv);

document.body.appendChild(postInfoContainer);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        console.log(comments, 'comments');

        const container = document.createElement('div');
        container.className = 'post-comments-container'

        for (comment of comments) {
            const commentSpan = document.createElement('div');
            commentSpan.className = 'post-comment-card'
            commentSpan.innerHTML = comment.body;

            container.appendChild(commentSpan);
        }

        document.body.appendChild(container)
    });

