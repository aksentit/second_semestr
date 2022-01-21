
//типы данных//

const str = 'Hi'
const num = 2223
const bool = false

let a

console.log(a)

const u = undefined
const n = null

//Обьекты//

const obj = {
    name: 'Serge',
    age: 18
}

console.log(obj.name);

//массивы//

const array = [1, 2, 3, 4, 5]

console.log(array[0]);


//переменные//

let message = 'Hello!'; // определяем переменную и присваиваем ей значение

alert(message); // Hello!


let user = 'John';
let age = 25;
let message = 'Hello';


//функции//

function showMessage() {
    console.log('Всем привет!');
}

//циклы//


//while//
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    console.log(i);
    i++;
}

//do while//
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);


//for//

for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    console.log(i);
}


//break//

let sum = 0;

while (true) {

    let value = +prompt("Введите число", '');

    if (!value) break; // (*)

    sum += value;

}
console.log('Сумма: ' + sum);


//if//

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
    console.log('Это слишком рано...');
} else if (year > 2015) {
    console.log('Это поздновато');
} else {
    console.log('Верно!');
}