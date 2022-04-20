// task 1

// let user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: '25',
//     studentstatus: 'active'
// };

// console.log(user.studentstatus);


// // task2

// let fruits = ['banana', 'orange', 'apple', 'cherry'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// for (let i of fruits) {
//     console.log(fruits);
// }



// let z = 0;
// while (z < fruits.length) {
//     console.log(fruits[z]);
//     z++;

// }

// task 5
// let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
// for (let i of array) {
//     if (typeof i === 'string') {
//         console.log(i);
//     }
// }

// Task 3

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
// for (let item of numbers) {
//     if (item > 5) {
//         console.log(item);
//     }
// }

// // task 4

// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'active'
// }

// if (user.age < 18 && user.studentstatus === 'active') {
//     console.log('hello');
// }

// else if (user.name === 'giorgi') {
//     console.log('hello giorgi');
// }
// else if (user.studentstatus === 'active' || user.age < 25) {
//     console.log('hello world');
// }
// else {
//     console.log('error')
// }

// Task 7

// let array = [32, 10, 'hello', null, 'hello2', 50];
// for (let x of array) {
//     if (x % 5 == 0) {
//         console.log(x);
//     }
// }



// task 6

// let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]

// for (let x of array) {
//     for (let y of x) {
//         if (y > 0) {
//             console.log(y);
//         }
//     }
// }


// // Task 1 Functions

// function sum(...args) {
//     numbersum = 0;
//     for (let items of args) {
//         if (items > 0) {
//             numbersum = numbersum + items
//         }
//     }
//     console.log(numbersum);
// }
// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// Task 1 - using return fun

// function sum(...args) {
//     numbersum = 0;
//     for (let items of args) {
//         if (items > 0) {
//             numbersum = numbersum + items
//         }
//     }
//     return numbersum;
// }

// let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);



// // Task2

// function sum(...args) {
//     let numbersum = 0;
//     for (let item of args) {

//         numbersum = numbersum + item;

//     }
//     console.log(numbersum);
// }

// sum(10, 50, 6, 7, 8, 11, 6, 3, 9)


// task 3

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }

// function register() {

//     if (user.isloggedin == true) {
//         console.log(user.firstname + " " + user.lastname);
//     } else {
//         console.log('false');
//     }
// }
// register();


// task 4

let array = [5, 10, 3, 27, 108, 777];


console.log(Math.max(...array));



