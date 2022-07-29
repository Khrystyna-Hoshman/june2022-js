/*
- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
/*let x=+prompt('Введіть число') ;
if (x!==0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}*/

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = +prompt('Enter time');
    if (time>=0&&time<=15){
    console.log('the first part of an hour');
    }else if (time>15&&time<30) {
        console.log('the second part of the hour');
    }else if (time>=30&&time<=45) {
        console.log('the third part of the hour');
    }else if (time>45&&time<=59) {
        console.log('the quarter part of an hour');
    }else {
        console.log('????')
    }

/*
У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/

let day=+prompt('Enter day');
    if (day>=1&&day<=10){
    console.log('first decade');
    }else if (day>=11&&day<=20) {
    console.log('second decade');
    }else if (day>=21&&day<=31) {
    console.log('third decade');
    }else {
    console.log('????')
    }

/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/

   let schedule = +prompt('Enter the day of the week');
   switch (schedule) {
       case 1:
           console.log('Monday ');
           break
       case 2:
           console.log('Tuesday');
           break;
       case 3:
           console.log('Wednesday');
           break;
       case 4:
           console.log('Thursday');
           break;
       case 5:
           console.log('Friday');
           break;
       case 6:
           console.log('Saturday');
           break;
       case 7:
           console.log('Sunday');
           break;
       default:
           console.log('????');
        }

/*- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно врахувати коли введені рівні числа.*/
let a = +prompt('enter the first number');
let b = +prompt('enter the second number');
if (a>b){
    console.log(a);
}else if (a<b){
    console.log(b);
}else if(a===b){
    console.log(a, 'numbers are equal');
}else {
    console.log('????')
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)*/
let x = prompt('enter something') || 'default';
console.log(x);
