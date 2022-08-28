 // отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
 // Вивести id,name всіх user в index.html. Окремий блок для кожного user.
 // Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули.

 const usersCardContainer = document.createElement('div');
 usersCardContainer.className = 'users-container';



 fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users =>{
        for (const user of users) {
            localStorage.setItem(`user-${user.id}`, JSON.stringify(user));

            const userCardDiv = document.createElement('div');
            userCardDiv.className = 'user-card';
            userCardDiv.innerHTML = `${user.id} ${user.name}`

            const userDetailsLinkDiv = document.createElement('div');
            const userDetailsLink = document.createElement('a');
            userDetailsLink.innerHTML = 'Go to details'
            userDetailsLink.href = `user-details.html?id=${user.id}`;

            userDetailsLinkDiv.appendChild(userDetailsLink);
            userCardDiv.appendChild(userDetailsLinkDiv);

            usersCardContainer.appendChild(userCardDiv);
      }

         document.body.appendChild(usersCardContainer)
})
