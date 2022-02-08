// i = i + 1 <=> i += 1 <=> i++

// for loop
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// while loop

// CATATAN: Gunakan While Loop ketika kalian tidak tahu batas awal dan
// batas akhir, tetapi kalian tahu kapan harus berhenti dari loop.

// cara kita mencetak bilangan 1-10 tapi menggunakan while loop.

console.log(" --- CONTOH 1 ---");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Hitung berapa banyak percobaan yang kita lakukan untuk
// menemukan angka 7.

console.log(" --- CONTOH 2 ---");

let randomInteger = -1; // kita belum mencoba.
let isFound = false;
let tries = 0;
while (!isFound) {
  // !true = false
  // kita akan mencoba lagi ketika tidak ditemukan.

  // --- engga usah dipikirin dulu:
  // --- mengenerate bilangan random diantara 0 - 10
  randomInteger = Math.round(Math.random() * 10);

  // isFound = randomInteger === 7;
  if (randomInteger === 7) {
    isFound = true;
  } else {
    isFound = false;
  }

  tries++;

  console.log("Tries " + tries + " Got " + randomInteger);
}

console.log("We got 7 in " + tries + " tries");

// DO WHILE

console.log("--- CONTOH DO WHILE --- ");

let bensin = 0;
do {
  console.log("Sisa bensin", bensin);
  console.log("Bensin masih ada, Nyalakan mesin!");
  bensin--;
} while (bensin > 0);
