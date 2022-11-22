// LEVEL 1
/* TASK 1.  
Объявите массив empty;
*/
// const empty = Array()

/* TASK 2.  
Объявить массив с более чем 5 количеством элементов
*/
// const numbers = [1, 2, 3, 4, 5];

/* TASK 3.  
Найдите длину вашего массива
*/
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);

/* TASK 4.  
Получить первый элемент, средний элемент и последний элемент массива
*/
// const webTechnologies = ["HTML", "CSS", "JSON", "JavaScript", "Python", "React"]
// let firstElement = webTechnologies[0]
// console.log(firstElement);

/* TASK 5.  
Объявите массив с именем mixedDataTypes, поместите различные типы данных в ваш массив и найдите длину массива. Вы должны быть размером больше 5
*/
// const mixedDataTypes = [[1, 2, 3, 4, 5], 255, "CSS", true, null, undefined];
// console.log(mixedDataTypes.length);

/* TASK 6.  
Объявите имя переменной массива itCompanies и присвойте начальные значения Facebook, Google, Microsoft, Apple, IBM, Oracle и Amazon
*/
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

/* TASK 7.  
Напечатайте массив, используя console.log()
*/
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);

/* TASK 8.  
Распечатайте количество компаний в массиве
*/
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.length);

/* TASK 9.  
Распечатать первую компанию, среднюю и последнюю компанию
*/

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let firstCompany = itCompanies[0]
// let middleCompany = itCompanies[(itCompanies.length - 1)/2]
// let lastCompany = itCompanies[itCompanies.length - 1]

// console.log(firstCompany);
// console.log(middleCompany);
// console.log(lastCompany);

/* TASK 10.  
Распечатайте каждую компанию
*/

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.join(", ").toUpperCase());

/* TASK 11.  
Измените название каждой компании на заглавные по одному и напечатайте их
*/

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.join(", ").toUpperCase());

/* TASK 12.  
Распечатайте массив как предложение: Facebook, Google, Microsoft, Apple, IBM, Oracle и Amazon являются крупными ИТ-компаниями.
*/

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(`${itCompanies.slice(0,6).join(", ")} и ${itCompanies[itCompanies.length - 1]} являются крупными ИТ-компаниями.`);

/* TASK 13.  
Проверьте, существует ли определенная компания в массиве itCompanies. Если она существует, верните компанию, иначе верните компанию, которая не найдена
*/

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// let compName = "Facebook"
// let comp = itCompanies.includes(compName);
// if(comp){
//     console.log(`${compName} есть в массиве`);
// } else{
//     console.log(`${compName} нет в массиве`);
// }

/* TASK 14.  
Отфильтруйте компании, которые имеют более одного «o» без метода фильтра
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// // nameComp = itCompanies[0].match(/o/gi)
// // console.log(nameComp);

// for (let i = 0; i < itCompanies.length; i++) {
//   let compName = itCompanies[i].match(/o/gi);
//   if (compName) {
//     console.log(itCompanies[i]);
//   }
// }

/* TASK 15.  
Сортировать массив с помощью метода sort()
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// console.log(itCompanies.sort());

/* TASK 16.  
Обратный массив, используя метод reverse()
*/
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// console.log(itCompanies.reverse());

/* TASK 17.  
Вырежьте первые 3 компании из массива
*/
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// itCompanies.splice(0,3);
// console.log(itCompanies);

/* TASK 18.  
Вырежьте последние 3 компании из массива
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// itCompanies.splice((itCompanies.length - 3), 3)
// console.log(itCompanies);

/* TASK 19.  
Вырежьте середину ИТ-компании или компаний из массива
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// let i = itCompanies.indexOf("Apple");
// if(i >= 0){
//     itCompanies.splice(i, 1);
// }
// console.log(itCompanies);

/* TASK 20.  
Удалить первую IT-компанию из массива
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// itCompanies.shift()
// console.log(itCompanies);

/* TASK 21.  
Уберите среднюю ИТ-компанию или компании из массива
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// itCompanies.splice(0, 6);
// console.log(itCompanies);

/* TASK 22.  
Удалить последнюю ИТ-компанию из массива
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// itCompanies.pop();
// console.log(itCompanies);

/* TASK 23.  
Удалить все ИТ-компании
*/

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

// itCompanies.splice(0,7);
// console.log(itCompanies);

// LEVEL 2

/* TASK 1.  
Создайте отдельный файл country.js и сохраните массив стран в этот файл, создайте отдельный файл web_techs.js и сохраните массив webTechs в этом файле. Доступ к обоим файлам в файле main.js
*/
// console.log(countries);
// console.log(webTechs);

/* TASK 2.  
Сначала удалите все функции и измените строку на массив и посчитайте количество слов в массиве
*/
// let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// let symbols = /[.,]/g
// text = text.replace(symbols, '')
// console.log(text.split(" "));
// console.log(text.split(" ").length);

/* TASK 3.  
В следующей корзине добавить, удалить, изменить элементы

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

 - добавьте 'Meat' в начале вашей корзины, если оно еще не добавлено
 - добавьте sugar в конец вашей корзины, если он еще не добавлен
 - Удалить 'Honey', если у вас аллергия на мед
 - изменить чай на 'Green Tea'
*/

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// if (shoppingCart.includes("Meat")) {
//   console.log("Уже есть");
// } else {
//   shoppingCart.unshift("Meat");
//   console.log(shoppingCart);
// }

// if (shoppingCart.includes("sugar")) {
//   console.log("Уже есть");
// } else {
//   shoppingCart.push("sugar");
//   console.log(shoppingCart);
// }

// let accept = prompt("У вас аллергия на мед?");
// let i = shoppingCart.indexOf("Honey");
// if(accept.toLowerCase() === "yes"){
//     shoppingCart.splice(i, 1);
//     console.log(shoppingCart);
// }

// shoppingCart[2] = "Green Tea"
// console.log(shoppingCart);

/* TASK 4.  
В массиве стран проверьте, существует ли в массиве 'Ethiopia', напечатайте 'Ethiopia'. Если его нет, добавьте в список стран.
*/

// if(countries.includes("Ethiopia")){
//     console.log(countries)
// } else{
//     countries.push("Ethiopia")
//     console.log(countries[countries.length-1]);
// }

/* TASK 5.  
В массиве webTechs проверьте, существует ли в массиве Sass, и если он существует, выведите «Sass - это препроцесс CSS». Если он не существует, добавьте Sass в массив и распечатайте массив.
*/

// if(webTechs.includes("Sass")){
//     console.log("Sass - это препроцесс CSS");
// } else{
//     webTechs.push("Sass")
//     console.log(webTechs);
// }

/* TASK 6.  
Объедините следующие две переменные и сохраните их в переменной fullStack.
*/

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];

// const fullStack = frontEnd.concat(backEnd)

// console.log(fullStack);


// LEVEL 3

/* TASK 1.  
Ниже приведен массив из 10 студентов в возрасте:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

 - Отсортировать массив и найти минимальный и максимальный возраст

 - Найти средний возраст (один средний или два средних, разделенные на два)

 - Найти средний возраст (все предметы, поделенные на количество предметов)

 - Найти диапазон возрастов (максимум минус мин)

 - Сравните значения (минимум - среднее) и (максимум - среднее), используйте метод abs()

 - Разделите первые десять стран из массива стран
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());
let minAge = ages[0]
console.log(minAge);
let maxAge = ages[ages.length - 1]
console.log(maxAge);
let middleAge = ages[Math.floor((ages.length - 1)/2)]
console.log(middleAge);

const getAverage = (numbers) => {
    let sum = 0; // объявляем переменную, в которой будет храниться сумма всех чисел массива
    for (let i = 0; i < numbers.length; i += 1) { // инициализируем цикл
      sum += numbers[i]; // на каждой итерации прибавляем к сумме значение текущего элемента массива
    }
    return sum / numbers.length; // возвращаем среднее арифметическое
  };

console.log(getAverage(ages));

let range = ages[ages.length - 1] - ages[0];
console.log(range);

let diff = Math.abs(ages[0])
console.log(diff);

let firstTen = countries.slice(0,10)
console.log(firstTen);

let avrCountries = countries[Math.floor((countries.length - 1)/2)]
console.log(avrCountries);

let chunkCountry = []
if(countries.length % 2 === 0){
    let chunkCountry = countries.splice(0, countries.Math.floor((countries.length - 1)/2))
    console.log(chunkCountry);
} else{
    countries.unshift("New Country")
    chunkCountry = countries[Math.floor((countries.length - 1)/2)]
    console.log(chunkCountry);
}