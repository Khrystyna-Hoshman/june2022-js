/*Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let v = [2, 8, 7.5, 156, 'cat', 'dog', 'black', 'white', 'purple', 'green' ];
console.log(v);
/*
Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*//*Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age*/
let book1= {
    title: 'Murder on the Orient Express',
    pageCount: 288,
    genre: 'detective',
    authors: ['Agatha','died']
}
console.log(book1);
let book2= {
    title: 'Three hundred poems',
    pageCount: 416,
    genre: 'poem',
    authors: ['Lina',92]
}
console.log(book2);
let book3= {
    title: 'Dune',
    pageCount: 656,
    genre: 'fantasy',
    authors: ['Frenk','died']
}
console.log(book3);
/*Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
let users=[
    {name:'Ivan', username:'IvanK', password:'Ivan1111'},
    {name:'Sergiy', username:'sergiy12', password:'sergio'},
    {name:'Max', username:'max156', password:'max123456'},
    {name:'Mary', username:'Mary456', password:'maryS456'},
    {name:'Ira', username:'irah', password:'iren18'},
    {name:'Nazar', username:'nazik45', password:'nazart28'},
    {name:'Olya', username:'olya18', password:'olyaK23'},
    {name:'Sasha', username:'sashaL15', password:'Sasha1578'},
    {name:'Anna', username:'Anya89', password:'annaR65'},
    {name:'Andriy', username:'andry35', password:'AndryL123'},
]
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

