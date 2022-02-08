// Studi Kasus menggunkaan Nested Loop

/**
Misalnya kita punya matriks seperti berikut.
    | 1  2  3  1 | 
M = | 4  5  6  1 |
    | 7  8  9  1 |

Matris berukuran 3x4. Kita diminta untuk mencetak semua koordinat 
element setiap (baris, kolom)

 (1, 1) (1, 2) (1, 3) (1, 4)
 (2, 1) (2, 2) (2, 3) (2, 4)
 (3, 1) (3, 2) (3, 3) (3, 4)

 */

let panjangBaris = 3;
let panjangKolom = 4;

// banyak operasi jumlah max perulangan terluar * jumlah max perulangan terdalam

// panjangBaris * panjangKolom = 12. komplesitas: O(panjangBaris * panjangKolom) = O(N*M)

for (let barisSaatIni = 1; barisSaatIni <= panjangBaris; barisSaatIni++) {
  // proses pembuatan index dari setiap kolum di setiap baris.
  for (let kolomSaatIni = 1; kolomSaatIni <= panjangKolom; kolomSaatIni++) {
    // format: (baris, kolom)
    //   console.log("(" + barisSaatIni + ", " + kolomSaatIni + ")");

    // sama aja dengan yang diatas, tetapi ini menggunakan string interpolation.
    // format: (baris, kolom)
    let formatted = `(${barisSaatIni}, ${kolomSaatIni})`;
    console.log(formatted);
  }
}

// Misalnya kita punya sebuah game, yang mana player itu memiliki
// batas nyawa sebanyak 3.
// Pada satu batch kita memberikan beberapa pertanyaan sebanyak 3,
// ketika player bisa menjawab setidaknya 2 benar maka nyawa ditambah 2, ketika tidak nyawa
// berkurang 1. Apabila nyawa sudah habis player kalah.

let nyawaPlayer = 3;

// ketika playar masih punya kuota nyawa maka boleh bermain.
while (nyawaPlayer > 0) {
  // lakukan game
  let tebakanPlayerBenar = 0;

  let banyakPertanyaan = 3;
  for (let i = 1; i <= banyakPertanyaan; i++) {
    // membuat pertanyaan pada setiap for loop.
    let random1 = 1 + Math.round(Math.random() * 10); // 1-11
    let random2 = 1 + Math.round(Math.random() * 20); // 1-20

    let soal = `Berapakah ${random1} x ${random2}?`;

    let tebakanPlayer = parseInt(prompt(soal));

    let realAns = random1 * random2;

    if (realAns === tebakanPlayer) {
      tebakanPlayerBenar++;
    }
  }

  // evaluasi
  if (tebakanPlayerBenar >= 2) {
    nyawaPlayer += 2;
  } else {
    nyawaPlayer--;
  }
}
