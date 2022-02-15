/**
 * Misalkan kita memiliki sebuah array of integer
 * kita ditugaskan untuk menghapus semua integer yang duplicate.
 * Misal diberikan A adalah sebuah array [1, 2, 2, 3, 4, 4, 4, 3, 5]
 * buatlah sebuah function yang menerima A dan mengembalikan B yang tidak
 * ada duplicate. misalnya B = [1, 5]
 */
function removeDuplicate(a) {
  // 1. aku harus menghitung frekuensi kemunculan angka.
  const frequency = {};

  a.forEach((eachValue) => {
    const value = frequency[eachValue];

    // iterasi 1: eachValue = 1 -> frequency[1], value = undefined
    // iterasi 2: eachValue = 2 -> frequency[2], value = undefined
    // iterasi 3: eachValue = 2 -> frequency[2], value = 1
    // iterasi 4: eachValue = 3 -> frequency[3], value = undefined
    // iterasi 5: eachValue = 4 -> frequency[4], value = undefined
    // iterasi 6: eachValue = 4 -> frequency[4], value = 1
    // iterasi 7: eachValue = 4 -> frequency[4], value = 2
    // iterasi 8: eachValue = 3 -> frequency[4], value = 1
    // iterasi 9: eachValue = 5 -> frequency[5], value = undefined

    if (value === undefined) {
      // berarti key nya belum ada didalam frequency.
      // kita buat baru dengan key = eachValue, dan frequency-nya = 1
      frequency[eachValue] = 1; // artinya kita sudah menandai bahwa value saat ini sudah muncul 1 kali.
    } else {
      // kalau value tidak undifined, artinya sudah pernah muncul sebelumnya.
      frequency[eachValue] = value + 1;
    }

    // after:
    // iterasi 1: eachValue = 1 -> frequency = {1: 1}
    // iterasi 2: eachValue = 2 -> frequency = {1: 1, 2: 1}
    // iterasi 3: eachValue = 2 -> frequency = {1: 1, 2: 2}
    // iterasi 4: eachValue = 3 -> frequency = {1: 1, 2: 2, 3: 1}
    // iterasi 5: eachValue = 4 -> frequency = {1: 1, 2: 2, 3: 1, 4: 1}
    // iterasi 6: eachValue = 4 -> frequency = {1: 1, 2: 2, 3: 1, 4: 2}
    // iterasi 7: eachValue = 4 -> frequency = {1: 1, 2: 2, 3: 1, 4: 3}
    // iterasi 8: eachValue = 3 -> frequency = {1: 1, 2: 2, 3: 2, 4: 3}
    // iterasi 8: eachValue = 5 -> frequency = {1: 1, 2: 2, 3: 2, 4: 3, 5: 1}
  });

  // saat ini kita sudah meniliki data kemunculan setiap integer.
  // tugas kita adalah menghapus setiap key (si integer) yang memiliki
  // frekuensi kemunculan (value) lebih besar dari 1.
  for (const key in frequency) {
    // kombinasi key yang akan muncul adalah [1, 2, 3, 4, 5]
    // kita menggunakan 'square bracket notation' untuk akses
    // property dari object secara dinamis.
    const freq = frequency[key];
    if (freq > 1) {
      delete frequency[key];
    }
  }

  // after deleting.
  // {1:1, 5: 1}

  const keysInString = Object.keys(frequency); // ['1', '5']
  const keysInInteger = keysInString.map((key) => parseInt(key)); // [1, 5]
  return keysInInteger;
}

const a = [1, 2, 2, 3, 4, 4, 4, 3, 5];
const b = removeDuplicate(a);
console.log(a);
console.log(b);

// Object with Method

const alice = {
  name: "Alice",
  age: 23,
  belanjaan: [],
  isVerified: true,
  speak: function () {
    return `Hello saya ${this.name} umur saya ${this.age}`;
  },
  ulangTahun: function () {
    this.age++;
  },
  belanja: function (item) {
    this.belanjaan.push(item);
  },
};

const sekolah = {
  nama: "SMAN 1",
  alamat: "Jakarta",
  kepalaSekolah: {
    nama: "Barmen",
    nip: "123123",
  },
  siswa: [
    {
      nama: "Bob",
      jurusan: "IPA",
    },
    {
      nama: "Alice",
      jurusan: "IPS",
    },
    {
      nama: "Eve",
      jurusan: "IPA",
    },
  ],
  tampilkanNamaSemuaSiswaYangJurusanIPA() {
    console.log("--- SISWA DENGAN JURUSAN IPA ---");
    this.siswa.forEach((siswa) => {
      if (siswa.jurusan === "IPA") {
        console.log(siswa.nama);
      }
    });
  },
  tampilkanNamaSemuaSiswaYangJurusanIPS() {
    console.log("--- SISWA DENGAN JURUSAN IPS ---");
    this.siswa.forEach((siswa) => {
      if (siswa.jurusan === "IPS") {
        console.log(siswa.nama);
      }
    });
  },
};

console.log(sekolah.kepalaSekolah.nama);
// console.log(sekolah.siswa[0].nama)
sekolah.siswa.forEach((siswa) => {
  console.log(siswa.nama);
});

sekolah.tampilkanNamaSemuaSiswaYangJurusanIPA();
sekolah.tampilkanNamaSemuaSiswaYangJurusanIPS();
