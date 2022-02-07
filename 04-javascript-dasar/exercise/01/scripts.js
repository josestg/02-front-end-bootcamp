// let nama = "";
// let asalDaerah = "";
// let tanggalLahir = "";
// let umur = 0;
// let posisiPekerjaan = "";
// let statusSudahMenikah = false;

// let nama = prompt("Masukkan nama anda");
// let asalDaerah = prompt("Masukkan asal daerah");
// let tanggalLahir = prompt("Masukkan tanggal lahir anda");
// let umur = parseInt(prompt("Masukkan umur anda"));
// let posisiPekerjaan = prompt("Masukkan posisi pekerjaan anda");
// let statusSudahMenikah = confirm("Apakah sudah menikah?");

// objek
let informasiPribadi = {
  nama: prompt("Masukkan nama anda"),
  asalDaerah: prompt("Masukkan asal daerah"),
  tanggalLahir: prompt("Masukkan tanggal lahir anda"),
  umur: parseInt(prompt("Masukkan umur anda")),
  posisiPekerjaan: prompt("Masukkan posisi pekerjaan anda"),
  statusSudahMenikah: confirm("Apakah sudah menikah?"),
};

alert("Termikasih sudah mengisi form");

console.log("--- Data Anda ---");

console.table(informasiPribadi);

// console.log("Nama            : ", informasiPribadi.nama); // dot notation
// console.log("Asal Daerah     : ", informasiPribadi.asalDaerah);
// console.log("Tanggal Lahir   : ", informasiPribadi["tanggalLahir"]); // index notation
// console.log("Umur            : ", informasiPribadi["umur"]);
// console.log("Posisi Pekeraan : ", informasiPribadi.posisiPekerjaan);
// console.log("Sudah Menikah   : ", informasiPribadi.statusSudahMenikah);

console.log("----------------");

// switch (true) {
//   case a > b:
//     console.log("A >B ");
//     break;
//   case a === b:
//     console.log("A = B ");
//     break;
//   default:
//     console.log("A < B ");
// }

// switch (a) {
//   case 1:
//     console.log("a = 1");
//     break;
//   case 2:
//     console.log("a = 2");
//     break;
//   default:
//     console.log("a != 1 & a != 2");
// }

// if (a > b) {
//   console.log("a > b");
// } else {
//   console.log("a <= b");
// }

// // shorthand => ternary operator
// a > b ? console.log("a > b") : console.log("a <= b");
