//Написать цикл, который создает множество параграфов с каждым десятым числом
// в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные
// параграфы в div с классом numbers.

const numbers = document.querySelector(".numbers");

for (var i = 100; i >= 50; i = i - 10) {
  numbers.innerHTML += `<p>${i}</p>`;
}

//===========================================================================

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф
// и добавляет его в div с классом strings_container. Строки взять произвольные.

const strings = document.querySelector(".strings_container");

const cars = [
  "BMW",
  "Mersedes",
  "Ford",
  "Audi",
  "Opel",
  "Toyota",
  "Honda",
  "Hyndai",
  "Kia",
  "Dodge",
];

for (let i = 0; i < cars.length; i++) {
  strings.innerHTML += `<p>${cars[i]}</p>`;
}

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name,
// last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних
// пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
// Добавить все карточки в div с классом users_container.

users = [
  {
    first_name: "John",
    last_name: "Smith",
    age: 23,
  },
  {
    first_name: "Antony",
    last_name: "Hopkins",
    age: 81,
  },
  {
    first_name: "Julia",
    last_name: "Roberts",
    age: 17,
  },
  {
    first_name: "Vin",
    last_name: "Diesel",
    age: 45,
  },
  {
    first_name: "Anna",
    last_name: "Dark",
    age: 14,
  },
  {
    first_name: "Leonardo",
    last_name: "Dikaprio",
    age: 31,
  },
];

const usersCards = document.querySelector('.users_container')

for(let i = 0; i < users.length; i++){
    if(users[i].age >= 18){
        usersCards.innerHTML += `<div>
        <p>${users[i].first_name}</p>
        <p>${users[i].last_name}</p>
        <p>${users[i].age}</p>
        </div>`
    }
}