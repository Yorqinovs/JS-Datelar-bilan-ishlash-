"use strict";

//// Datelarimiz (-1) bo'ladi yani dasturlashda 0 dan boshlanadi

// const now = new Date();
// console.log(now);
//// hozirgi ayni paytimizzi mintasi bilan ko'rsatadi

// const now = new Date();
// console.log(now.getFullYear()); // 2023

// const now = new Date();
// console.log(now.getMonth()); // hozirad qaysi oyligini chiqazib beradi

// const now = new Date();
// console.log(now.getDate()); // oyimizi qaysi kuniligini chiqazib beradi

// const now = new Date();
// console.log(now.getDay()); // haftani qaysi kuniligini chiqazib beradi

// const now = new Date();
// console.log(now.getTime()); // o'zimizzi vaqtimizzi milli sekunda chiqazib beradi

// const now = new Date();
// console.log(now.getHours()); // hozirgi vaqtdagi soatimiz

// const now = new Date();
// console.log(now.setHours(22));
// console.log(now); // vaqtini yani soatini o'zimiz 22 qoygan bo'lsak 22 ko'rsatadi o'zimiz xoxlahagn sonimizzi qo'ysak bo'ladi

let start = new Date();
for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}
let end = new Date();
console.log(start.getTime());
console.log(end.getTime());
alert(`Loop completed in ${end - start} milleseconds`);
