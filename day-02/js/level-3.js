/* ================= Task 1 ================= */
// let text = "Любовь - лучшая вещь в этом мире. Некоторые нашли свою любовь, а некоторые все ещё ищут свою любовь."
// console.log(text.toLowerCase().match(/любовь/gi))

/* ================= Task 2 ================= */
// let text = "Вы не можете закончить предложение, потому что, потому что, потому что это соединение"
// console.log(text.match(/потому что/gi))

/* ================= Task 3 ================= */
// const sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// let symbols = /[@$%&#;]/g
// console.log(sentence.replace(symbols, ''))

/* ================= Task 4 ================= */
let text = "Он зарабатывает 5000 евро с зарплаты в месяц, годовой бонус в 10000 евро, онлайн-курсы в 15000 евро в месяц"
let mounthly = text.split(" ")
console.log(mounthly[2] * 12 + +mounthly[11] + mounthly[15] * 12)