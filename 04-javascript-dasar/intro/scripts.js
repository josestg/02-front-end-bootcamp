// console.log -> print / mencetak
console.log("Hello, JavaScript");

// bersifat blocking:
// artinya eksekusi code yang ini harus selesai terlebih dahulu
// baru boleh lanjut ke baris kode berikutnya.
// alert("Ini adalah alert!");

// let name = prompt("Nama kamu siapa?");
// console.log(name);

// console.log(prompt("Nama kamu siapa?"));

// let setuju = confirm("Apakah anda setuju?");
// console.log(setuju);

let w = 4;
w = w * 1; // w = 4 + 1 -> w = 5
w = w * 1; // w = 5 + 1 -> w = 6
w = w * 1; // w = 6 + 1 -> w = 7

console.log(w);

w += 1; // w = w + 1
w += 2; // w = w + 2
w += 3; // w = w + 3

let y = 3;
y = y + 1; // y += 1

let z = 2;

// z = z + 1;
// z += 1;
z++;

let a = 4;
let b = 2;

a = a + b; // a+=b
a = a * b; // a*=b
a = a - b; // a-=b
a = a / b; // a/=b

// modulus = sisa bagi
// 4 mod 2 = 0
// 5 mod 2 = 1
// 7 mod 5 = 2
a = a % b; // a %= b
