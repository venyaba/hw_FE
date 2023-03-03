
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

// ################################################################

const numbers1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
];
const lastArrNumber = numbers1.length - 1;

for (let i = lastArrNumber; i < numbers1.length; i--) {
  if (numbers1[i] >= 20) {
    console.log(numbers1[i]);
  } else {
    break;
  }
}

// ################################################################

const numbers2 = [3, 5, 11, 2, 8, 1, 6];

const numbers_squared = [];


for (let i = 0; i < numbers2.length; i++) {
  const squared = numbers2[i] ** 2;

  numbers_squared.push(squared);
  
}

const last_elem = numbers_squared[numbers_squared.length - 1] 

// #################################################################


const user = {
first_name: 'Ivan',
last_name: 'Ivanov',
age: 20,
salary: 500
}

const str = `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`

