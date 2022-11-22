// LEVEL 1
/* TASK 1.  
Получить пользовательский ввод с помощью prompt("Введите свой возраст:"). Если пользователю 18 лет или больше, оставьте отзыв: вы достаточно взрослый, чтобы ездить, но если нет, то 18 - отзывайте, чтобы ждать те годы, которые он должен был ждать.
*/
// let currentAge = +prompt("Введите свой возраст:")
// if (currentAge >= 18){
//     console.log("Вы достаточно взрослый, чтобы водить.");
// } else{
//     console.log(`Вам осталось ${18 - currentAge} года до вождения.`);
// }

/* TASK 2.  
Сравните значения myAge и yourAge, используя if… else. На основе сравнения журнала для консоли, кто старше (я или вы). Используйте prompt("Введите свой возраст:"), чтобы получить возраст в качестве входных данных.
*/

// let myAge = 22
// let yourAge = +prompt("Введите свой возраст:")
// if(yourAge > myAge){
//     console.log(`Ты на ${yourAge - myAge} лет старше меня.`);
// }

/* TASK 3.  
Если a больше, чем b, вернуть «a больше, чем b», иначе «a меньше, чем b». Попробуй реализовать в пути
 - используя if else
 - тернарный оператор.
*/

// let a = 4,
//   b = 5;

// a > b ? console.log(`${a} больше ${b}`) : console.log(`${a} меньше ${b}`);

// LEVEL 2

/* TASK 1.  
Напишите код, который может дать оценку студентам в соответствии с их оценками:

 - 80-100, A
 - 70-89, B
 - 60-69, C
 - 50-59, D
 - 0-49, F
*/

// let ball = +prompt("Введите свой балл:", 0);
// if(ball >= 0 && ball <=49){
//     console.log("F")
// } else if(ball >= 50 && ball <=59){
//     console.log("D")
// } else if(ball >= 60 && ball <=69){
//     console.log("C")
// } else if(ball >= 70 && ball <=89){
//     console.log("B")
// } else if(ball >= 90 && ball <=100){
//     console.log("A")
// } else{
//     console.log("Это не число")
// }

/* TASK 2.  
Проверьте, является ли сезон осенью, зимой, весной или летом. Если пользовательский ввод:

сентябрь, октябрь или ноябрь, сезон осень.
декабрь, январь или февраль, сезон зима.
март, апрель или май, сезон весна
июнь, июль или август, сезон лето
*/

// let month = prompt("Введите месяц:")
// month = month.toLowerCase()
// if (month === "сентябрь" || month === "октябрь" || month === "ноябрь"){
//     console.log("Сезон Осень");
// } else if(month === "декабрь" || month === "январь" || month === "февраль"){
//     console.log("Сезон Зима");
// } else if(month === "март" || month === "апрель" || month === "май") {
//     console.log("Сезон Весна");
// } else if(month === "июнь" || month === "июль" || month === "август"){
//     console.log("Сезон Лето");
// } else{
//     console.log("Это не месяц");
// }

/* TASK 3.  
Проверьте, является ли день выходным или рабочим днем. Ваш сценарий примет день как вход.
*/

// let day = prompt("Введите день");
// day = day.toLowerCase();

// if (day === "суббота" || day === "воскресение") {
//   console.log(`${day[0].toUpperCase() + day.substring(1)} - выходной день.`);
// } else if (
//   day === "понедельник" ||
//   day === "вторник" ||
//   day === "среда" ||
//   day === "четверг" ||
//   day === "пятница"
// ) {
//   console.log(`${day[0].toUpperCase() + day.substring(1)} - рабочий день.`);
// } else {
//   console.log("Это не день неделии");
// }

// LEVEL 3

/* TASK 1.  
Напишите программу, которая сообщает количество дней в месяце.
*/

// let month = prompt("Введите месяц");
// month = month.toLowerCase();

// if (
//   month === "январь" ||
//   month === "март" ||
//   month === "май" ||
//   month === "июль" ||
//   month === "август" ||
//   month === "октябрь" ||
//   month === "декабрь"
// ) {
//   console.log(`${month[0].toUpperCase() + month.substring(1)} имеет 31 дней.`);
// } else if (
//   month === "апрель" ||
//   month === "июнь" ||
//   month === "сентябрь" ||
//   month === "ноябрь"
// ) {
//   console.log(`${month[0].toUpperCase() + month.substring(1)} имеет 30 дней.`);
// } else if (
//   month === "февраль"
// ) {
//   console.log(`${month[0].toUpperCase() + month.substring(1)} имеет 28 дней.`);
// } else {
//   console.log("Это не месяц");
// }