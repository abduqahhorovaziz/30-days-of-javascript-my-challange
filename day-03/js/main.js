/* LEVEL 1 */

/* ================= Task 1 ================= */
// let firstName = 'John';
// let lastName = 'Doe'
// let country = 'US';
// let state = 'California'
// let age = 32
// let isMarried = false;
// let year = new Date().getFullYear();

// console.log(year)

/* ================= Task 2 ================= */
// console.log('10' == 10);
// console.log('10' === 10);

/* ================= Task 3 ================= */
// console.log(parseInt('9.8') == 10)
// console.log(parseInt('9.8') === 10)

/* ================= Task 4 ================= */
// console.log(true == true);
// console.log(3 > 2 == 4 > 1);
// console.log("4" == 4);

// console.log(true == false);
// console.log(3 > 2 == 4 > 4);
// console.log("4" === 4);

/* ================= Task 5 ================= */
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != "4");
// console.log(4 == "4");
// console.log(4 === "4");
// console.log("python".length !== "jargon".length);

/* ================= Task 6 ================= */
// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))
// console.log('pyth'.length !== 'jarg'.length)

/* ================= Task 7 ================= */
// let now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth(), now.getDate())
// console.log(now.getDate())
// console.log(now.getDay(), now.getHours())
// console.log(now.getHours())
// console.log(now.getMinutes());
// console.log(Date.now());

/* LEVEL 2 */

/* ================= Task 1 ================= */
// let basis = +prompt("Enter Basis: ", 0);
// let height = +prompt("Enter Height: ", 0);
// let S = 1/2 * (basis * height);
// console.log(S)

/* ================= Task 2 ================= */
// let a = +prompt("Enter a: ", 0);
// let b = +prompt("Enter b: ", 0);
// let c = +prompt("Enter c: ", 0);

// let P = a + b + c;
// console.log(P)

/* ================= Task 3 ================= */
// let length = +prompt("Enter Length: ", 0);
// let width = +prompt("Enter Width: ", 0);
// let S = length * width;
// let P = 2 * (length + width);

// console.log(S, P)

/* ================= Task 4 ================= */
// const PI = 3.14;
// let radius = +prompt("Enter Radius", 0);
// let S = PI * radius ** 2;
// let c = 2 * PI * radius;

// console.log(S , c)

/* ================= Task 5 ================= */
// let x = +prompt("Enter x: ", 0);
// let y = 2 * x - 2;

// let m = (y*2-y*1) / (x*2 - x*1);
// console.log(m);

/* ================= Task 6 ================= */
// Сравните наклон двух приведённых выше вопросов.

/* Task 7. Рассчитайте значение y (y = x ^ 2 + 6x + 9). Попробуйте использовать разные значения х и выяснить, при каком значении х у 0. */
// let x = +prompt("Enter x: ", 0)
// let y = (x**2 + 6 * x + 9)

// console.log(y);

// Task 8. Напишите скрипт, который побудит пользователя вводить часы и ставку за час. Рассчитать зарплату человека?

// let time = +prompt("Введите часы: ")
// let rate = +prompt("Введите ставку в час:")
// let earnings = time*rate;

// console.log("Ваш еженедельный заработок " + earnings)

// Task 9. Если длина вашего имени больше 7, скажем, ваше имя длинное, иначе скажем, ваше имя короткое.
// let name = prompt("Enter name:");
// name.length > 7
//   ? console.log("ваше имя длинное")
//   : console.log("ваше имя короткое");

// Task 11. Сравните длину вашего имени и длину вашей фамилии, и вы должны получить этот вывод.
// let firstName = "Asabeneh";
// let lastName = "Yetayeh";
// firstName.length > lastName.length
//     ? console.log(`Твоё имя, ${firstName} длиннее твоей фамилии, ${lastName}`)
//     : console.log(`Твоё имя, ${firstName} короткое твоей фамилии, ${lastName}`)

// Task 12. Объявите две переменные myAge и yourAge и присвойте им начальные значения, myAge и yourAge.
// let myAge = 250;
// let yourAge = 25;
// console.log(`Я на ${myAge - yourAge} лет старше тебя.`);

// Task 13. Используя подсказку, укажите год рождения пользователя и, если ему исполнилось 18 лет, разрешите ему ехать, если он не скажет пользователю подождать определённое количество лет.

// let yearOfBirth = +prompt("Введите год рождения: ")
// let now = new Date().getFullYear();
// let age = now - yearOfBirth
// age >= 18
//     ? console.log(`Вам ${age}. Вы достаточно взрослый, чтобы водить`)
//     : console.log(`Вам ${age}. Вам будет разрешено водить через ${18 - age} года.`)

// Task 14. Напишите скрипт, который предложит пользователю ввести количество лет. Подсчитайте, сколько секунд человек может прожить. Предположим, кто-то живёт всего сто лет

// let year = +prompt("Введите число, в котором вы живёте:")
// let seconds = year * (365 * 86400)
// console.log(`Вы жили ${seconds} секунд.`)

// Task 15. Создайте удобочитаемый формат времени, используя объект Date time
// let year = new Date().getFullYear();
// let month = new Date().getMonth();
// let day = new Date().getDate();
// let hour = new Date().getHours();
// let minute = new Date().getMinutes();

// console.log(`${year}-${month + 1}-${day} ${hour}:${minute}`)
// console.log(`${day}-${month + 1}-${year} ${hour}:${minute}`)
// console.log(`${day}/${month + 1}/${year} ${hour}:${minute}`)

// LEVEL 3
// TASK 1. Создайте удобочитаемый формат времени, используя объект Date time. Час и минута должны
// быть все время двузначными (7 часов должны быть 07, а 5 минут должны быть 05)
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// let year = new Date().getFullYear();
// let month = new Date().getMonth();
// let day = new Date().getDate();
// let hour = new Date().getHours();
// let minute = new Date().getMinutes();

// // hour -= 9;
// // minute -= 5;

// (hour || minute) < 10
//   ? console.log(`${year}-${month + 1}-${day} 0${hour}:0${minute}`)
//   :console.log(`${year}-${month + 1}-${day} ${hour}:${minute}`)
