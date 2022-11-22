// LEVEL 1
/* TASK 1.
    Выполните итерацию от 0 до 10 с помощью цикла for, сделайте то же самое с помощью циклов while и do while
*/

// for(let i = 0; i <10; i++){
//     console.log(i);
// }

// let i = 0;
// while(i<10){
//     i++;
//     console.log(i);
// }

// let i = 0;
// do{
//     i++;
//     console.log(i);
// } while(i < 10);

/* TASK 2.
 Итерируйте 10 к 0, используя цикл for, cделайте то же самое, используя цикл while и do while
*/

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while(i>0){
//     i--;
//     console.log(i);
// }

// let i = 10;
// do{
//     i--;
//     console.log(i);
// } while(i > 0);

/* TASK 3.
Итерируйте от 0 до n, используя цикл for
*/

// let n = +prompt("enter number")
// for(let i = 0; i < n; i++) {
//     console.log(i);
// }

/* TASK 4.
Напишите цикл, который создает следующий шаблон, используя console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

// const newHashes = []
// for(let i = 0; i <7; i++){
//     newHashes.push("#")
//     console.log(newHashes.join(""));
// }

/* TASK 5.
Используйте цикл для печати следующего шаблона:
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

// for(let i=0; i<=10; i++){
//     console.log(`${i} x ${i} = ${i*i}`);
// }

/* TASK 6.
Используя цикл, напечатайте следующий шаблон
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/
// console.log("i" + " " + "i^2" + " " + "i^3");
// for (let i = 0; i <=10; i++) {
//     console.log(`${i}  ${i**2}  ${i**3}`);
// }

/* TASK 7.
Используйте цикл для перебора от 0 до 100 и печати только четных чисел.
*/
// for(let i = 0; i <=100; i++){
//     if(i%2 ===0){
//         console.log(i);
//     }
// }

/* TASK 9.
Используйте цикл для итерации от 0 до 100 и печатайте только простые числа
*/
// nextPrime:
// for (let i = 2; i <= 100; i++) {
//   for(let j = 2; j < i; j++) {
//     if(i%j == 0) continue nextPrime;
//   }
//   console.log(i);
// }

/* TASK 10.
Используйте цикл для итерации от 0 до 100, распечатайте и распечатайте сумму всех чисел.
Сумма всех чисел 5050.
*/
// let sum = 0;
// for (let i=0; i<=100; i++){
//     sum += i
// }
// console.log(`Сумма всех чисел ${sum}.`);

/* TASK 11.
Используйте цикл for для итерации от 0 до 100 и выведите сумму всех четных чисел и сумму всех коэффициентов.

The sum of all evens is 2550. And the sum of all odds is 2500.
*/
// let sum = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   } else if(i%2==1){
//     sumOdd+=i
//   }
// }
// console.log(`The sum of all evens is ${sum}. And the sum of all odds is ${sumOdd}.`);

/* TASK 12.
Используйте цикл for для итерации от 0 до 100 и выведите сумму всех четных чисел и сумму всех шансов. Вывести сумму четных и сумму шансов в виде массива

  [2550, 2500]
*/

// const arr = [];
// let sum = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   } else if (i % 2 == 1) {
//     sumOdd += i;
//   }
// }

// arr.push(sum);
// arr.push(sumOdd);
// console.log(arr);

/* TASK 13.
Разработайте небольшой скрипт, который генерирует массив из 5 случайных чисел
*/
// const randomNums = []
// for(let i = 0; i <5; i++){
//     randomNums.push(Math.floor(Math.random(0, i) * 5))
// }
// console.log(randomNums);

/* TASK 14.
Разработайте небольшой скрипт, который генерирует массив из 5 случайных чисел, числа должны быть уникальными
*/

// const randomNums = []
// for(let i = 0; i < 5; i++){
//     randomNums.push(Math.floor(Math.random(i) * 100) + 1)
// }
// console.log(randomNums);

/* TASK 15.
Разработайте небольшой скрипт, который генерирует случайный идентификатор из шести символов: 5j2khz
*/

// let result = ""
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// let charactersLength = characters.length;

// for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }
// console.log(result);

// LEVEL 2

/* TASK 1.
Разработайте небольшой скрипт, который генерирует произвольное количество символов случайного идентификатора:
*/

// let randomLength = Math.floor(Math.random(10) * 50)
// let result = ""
// let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
// let charactersLength = characters.length;

// for (let i = 0; i < randomLength; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }
// console.log(result);

/* TASK 2.
Напишите скрипт, который генерирует случайное шестнадцатеричное число
*/

// let randomLength = Math.floor(Math.random(10) * 50)
// let result = "#"
// let characters = "abcdef1234567890";
// let charactersLength = characters.length;

// for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }
// console.log(result);

/* TASK 3.
Напишите скрипт, который генерирует случайное число цветов RGB.
*/

// let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// let r = randomBetween(0, 255);
// let g = randomBetween(0, 255);
// let b = randomBetween(0, 255);
// let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string'
// console.log(rgb);

/* TASK 4.
Используя вышеуказанный массив стран, создайте следующий новый массив.
*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// const newCountries = []
// for(let i = 0; i < countries.length; i++) {
//     newCountries.push(countries[i].toUpperCase())
// }

// console.log(newCountries);

/* TASK 5.
Используя приведенный выше массив стран, создайте массив для длины стран.
*/

// const lengthCountries = []
// for(let i = 0; i < countries.length; i++) {
//     lengthCountries.push(countries[i].length)
// }

// console.log(lengthCountries);

/* TASK 6.
Используйте массив стран для создания следующего массива массивов:
*/

// const newCountries = []
// for(let i = 0; i < countries.length; i++) {
//     const country = []
//     country.push(countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length)
//     newCountries.push(country)
// }

// console.log(newCountries);

/* TASK 7.
В приведенном выше массиве стран проверьте, существует ли страна или страны, содержащие слово 'land'. Если есть страны, содержащие 'land', выведите ее в виде массива. Если нет страны, содержащей слово 'land', выведите «All these are countries without land».

['Finland', 'Iceland']
*/

// const landEnd = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].endsWith("land")) {
//     landEnd.push(countries[i]);
//   } else {
//     console.log("all these are countries without land");
//   }
// }
// console.log(landEnd);

/* TASK 8.
В приведенном выше массиве стран проверьте, существует ли страна или страны, заканчивающиеся на «ia». Если есть страны, оканчивающиеся на, распечатайте его, как массив. Если нет страны, содержащей слово «ai», выведите «Эти страны заканчиваются без ia».

['Albania', 'Bolivia','Ethiopia']
*/

// const iaEnd = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].endsWith("ia")) {
//     iaEnd.push(countries[i]);
//   } else if (countries[i].endsWith("ia") == false){
//     console.log(countries[i] + " заканчиваются без ia");
//   }
// }
// console.log(iaEnd);

/* TASK 9.
Используя приведенный выше массив стран, найдите страну, содержащую наибольшее количество символов.

Ethiopia
*/

// const arrLength = []
// const maxEl = []
// for (let i =0; i<countries.length; i++) {
//   arrLength.push(countries[i].length)
//   arrLength.sort()
//   let max = 8;

//   if(countries[i].length === max){
//     maxEl.push(countries[i])
//   }
// }
// console.log(maxEl.join());

/* TASK 10.
Используя приведенный выше массив стран, найдите страну, содержащую всего 5 символов.

['Japan', 'Kenya']
*/

// const arrLength = []
// const maxEl = []
// for (let i =0; i<countries.length; i++) {
//   arrLength.push(countries[i].length)
//   arrLength.sort()
//   let max = 5;

//   if(countries[i].length === max){
//     maxEl.push(countries[i])
//   }
// }
// console.log(maxEl);

/* TASK 11.
Найдите самое длинное слово в массиве webTechs.
*/

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// const arrLength = [];
// const maxEl = [];
// for (let i = 0; i < webTechs.length; i++) {
//   arrLength.push(webTechs[i].length);
//   arrLength.sort();
//   let max = 10;

//   if (webTechs[i].length === max) {
//     maxEl.push(webTechs[i]);
//   }
// }
// console.log(maxEl.join());

/* TASK 12.
Найдите самое длинное слово в массиве webTechs.

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/

// const newTechs= []
// for(let i = 0; i < webTechs.length; i++) {
//     const techs = []
//     techs.push(webTechs[i], webTechs[i].length)
//     newTechs.push(techs)
// }

// console.log(newTechs);

/* TASK 13.
Приложение, созданное с использованием MongoDB, Express, React и Node, называется стеком MERN. Создайте аббревиатуру MERN с помощью массива mernStack.
*/

// const mernStack = ["MongoDB", "Express", "React", "Node"];

// const abbr = [];
// for (let i = 0; i < mernStack.length; i++) {
//   abbr.push(mernStack[i].slice(0,1).toUpperCase());
// }
// console.log(abbr.join(""));

/* TASK 14.
Итерируйте по массиву, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"], используя цикл for или цикл for of печатайте из предметов.
*/

// for(tech of webTechs){
//   console.log(tech);
// }

/* TASK 15.
Это массив фруктов ['banana', 'orange', 'mango', 'lemon'] измените порядок, используя цикл, без использования обратного метода.
*/

// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// const newFruits = [];
// for(let i = fruits.length - 1; i >= 0; i--) {
//   newFruits.push(fruits[i]);
// }
// console.log(newFruits);

/* TASK 16.
Распечатайте все элементы массива, как показано ниже.

  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
  ];

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"]
// ];

// const newTechs = fullStack[0].concat(fullStack[1])

// for(let i = 0; i < newTechs.length; i++){
//   console.log(newTechs[i].toUpperCase());
// }

