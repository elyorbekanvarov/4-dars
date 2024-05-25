// 1 - masala\

// for(let i = 1; i <= n; i++) {
//   console.log(i);
// }

// 2 - masala

// for(let i=n; i >= 1; i--) {
//   console.log(i);
// }

// 3 - masala

// function sum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += Math.floor(Math.random() * 10) + 1;
//   }
//   return sum;
// }
// const n = 5;
// const result = sum(n);
// console.log(`${result}`);

// 4 - masala

// function toqSonlar(n) {
//   let sum = 0;
//   let toqSonlar = [];
//   for (let i = 1; i <= n; i += 2) {
//     toqSonlar.push(i);
//     sum += i;
//   }
//   return {
//     toqSonlar: toqSonlar,
//     sum: sum,
//   };
// }
// const result = toqSonlar(n);
// console.log(`${n}${result.toqSonlar}`);
// console.log(`${result.sum}`);

// 5 - masala

// const son =+('sonni kiriting');
// let boluvchilar = [];
// for (let i = 1; i <= son; i++) {
//   if (son % i === 0) {
//     boluvchilar.push(i);
//   }
// }
// console.log(`${son} ning bo'luvchilar: ${boluvchilar.join(', ')}`);

// 6 - masala

// const son =+prompt('sonni kiriting');
// let boluvchilar = [];
// let boluvchilarSoni = 0;
// let boluvchilarYigindisi = 0;
// for (let i = 1; i <= son; i++) {
//   if (son % i === 0) {
//     boluvchilar.push(i);
//     boluvchilarSoni++;
//     boluvchilarYigindisi += i;
//   }
// }
// console.log(`${son} ning bo'luvchilari: ${boluvchilar.join(", ")}`);
// console.log(`${son} ning bo'luvchilar soni: ${boluvchilarSoni}`);
// console.log(`${son} ning bo'luvchilar yig'indisi: ${boluvchilarYigindisi}`);

// 7 - masala

// function tubSonmi(son) {
//   if (son <= 1) {
//     return false;
//   }
//   if (son <= 3) {
//     return true;
//   }
//   if (son % 2 === 0 || son % 3 === 0) {
//     return false;
//   }
//   for (let i = 5; i * i <= son; i += 6) {
//     if (son % i === 0 || son % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const son = 17;
// if (tubSonmi(son)) {
//   console.log(`${son} tub son`);
// } else {
//   console.log(`${son} tub son emas`);
// }

// for 1

// const k =+('k sonini kiriting');
// const n =+('n sonini kiriting');
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// for 2

// const a =+prompt('a sonini kiriting');
// const b =+prompt('b sonini kriting');
// let sonlar = [];
// let sonlarSoni = 0;
// for (let i = a; i <= b; i++) {
//   sonlar.push(i);
//   sonlarSoni++;
// }
// console.log(`${a} va ${b}${sonlar.join(', ')}`);
// console.log(`${sonlarSoni}`);

// for 3

// const a =+prompt('a sonini kiriting');
// const b =+prompt('b sonini kiriting');
// let sonlar = [];
// let sonlarSoni = 0;
// for (let i = b - 1; i > a; i--) {
//   sonlar.push(i);
//   sonlarSoni++;
// }
// console.log(`${a} va ${b} ${sonlar.join(', ')}`);
// console.log(`${sonlarSoni}`);

// for 4

// const konfetNarxi = 15.5;
// for (let kg = 1.2; kg <= 10; kg += 0.2) {
//   const narxi = konfetNarxi * kg;
//   console.log(`${kg} ${narxi.toFixed(2)} so'm`);
// }

// for 5

// const konfetNarxi = 15.5;
// for (let i = 2; i <= 9; i++) {
//   const narxi = konfetNarxi * i;
//   console.log(`0${i} ${narxi.toFixed(2)} so'm`);
// }
// console.log(` ${konfetNarxi.toFixed(2)} so'm`);

// for 6

// var kg = parseFloat(
//   prompt("Sotilayotgan konfetning og'irligini kiriting (kg):")
// );
// var kg_price = parseFloat(prompt("Bir kilogram konfet narxini kiriting:"));
// var prices = [];
// for (var i = 1.2; i <= 2; i += 0.2) {
//   prices.push(i * kg * kg_price);
// }
// for (var j = 0; j < prices.length; j++) {
//   console.log(
//     j + 1 + " kg konfetning narxi: " + prices[j].toFixed(2) + " so'm"
//   );
// }

// for 7

// let a =+prompt('a sonini kiriting');
// let b =+prompt('b sonini kiriting');
// let sum = 0;
// for (let i = a; i <= b; i++) {
//     sum += i;
// }
// console.log(sum);

// for 8

// function kopaytmaToplash(a, b) {
//   let kopaytma = 1;
//   for (let i = a; i <= b; i++) {
//     kopaytma *= i;
//   }
//   return kopaytma;
// }
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// a = parseInt(a);
// b = parseInt(b);
// if (isNaN(a) || isNaN(b) || a >= b) {
//   console.log("Noto'g'ri kiritish!");
// } else {
//   let natija = kopaytmaToplash(a, b);
//   console.log("Ko'paytma:", natija);
// }

// for 9

// function kvadratYigindisi(a, b) {
//   let yigindi = 0;
//   for (let i = a; i <= b; i++) {
//       yigindi += i * i;
//   }
//   return yigindi;
// }
// let a = 3;
// let b = 7;
// let natija = kvadratYigindisi(a, b);
// console.log("Yig'indisi:", natija);

// for 10

// function yigindiHIsobla(n) {
//   let yigindi = 0;
//   for (let i = 1; i <= n; i++) {
//       yigindi += 1 / i;
//   }
//   return yigindi;
// }
// let n = 5;
// let natija = yigindiHIsobla(n);
// console.log("Yig'indisi:", natija);

// for 11

// function calculateS(n) {
//   let S = 0;
//   for (let i = n; i <= 2 * n; i++) {
//       S += i * i;
//   }
//   return S;
// }
// let n = 5;
// let result = calculateS(n);
// console.log("S =", result);

// for 12

// function calculateS(n) {
//   let S = 1;
//   for (let i = 1.1; i <= 1.1 + (n - 1) * 0.1; i += 0.1) {
//       S *= i;
//   }
//   return S;
// }
// let n = 5;
// let result = calculateS(n);
// console.log("S =", result);