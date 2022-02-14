const globalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function withForLoop(numbers) {
  let sum = 0;
  // 0 <= i < number.length
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    sum = sum + currentNumber;
  }

  // sum = 0
  // i=0, currentNumber=1, sum = sum + currentNumber -> sum = 0 + 1 -> sum = 1
  // i=1, currentNumber=2, sum = sum + currentNumber -> sum = 1 + 2 -> sum = 3
  // i=2, currentNumber=3, sum = sum + currentNumber -> sum = 3 + 3 -> sum = 6
  //  .
  //  .
  //  .
  // i=9, currentNumber=9, sum = sum + currentNumber -> sum = 45 + 10 -> sum = 55

  console.log("menggunakan basic for:", sum);
}

function withForEach(numbers) {
  let sum = 0;

  //   numbers.forEach(function (eachValue, eachIndex) {
  //     sum = sum + eachValue;
  //   });

  // kita mengabaikan paramenter kedua.
  //   numbers.forEach(function (eachValue) {
  //     sum = sum + eachValue;
  //   });

  // akan sedikit berbeda ketika kita mengabaikan parameter pertama.
  // kita menggunakan underscore.
  //   numbers.forEach(function (_, eachIndex) {
  //     sum = sum + eachIndex;
  //   });

  // menggunakan arrow function.
  //   numbers.forEach((eachValue) => {
  //     sum += eachValue;
  //   });

  // versi one line.
  // kasusnya ketika logika dalam function kita cukup simple.
  // kita logikanya tidak simple, petimbangkan menggunakna block {}.
  numbers.forEach((eachValue) => (sum += eachValue));

  // secara internal, function yang kita berikan itu di ekesekusi per tiap element
  // didalam array.
  // misal kitanamakan setiap element ke-i = e[i], misal ke-0 = e[0]
  // dan function yang kita berikan namanya fn

  // yang terjadi adalah:
  // ketika mengujungi index ke-0 => fn(e[0], 0)
  // ketika mengujungi index ke-1 => fn(e[1], 1)
  // .
  // .
  // .
  // ketika mengujungi index ke-9 => fn(e[9], 9)

  console.log("menggunakan for each:", sum);
}

function doubleValuesWithMap(numbers) {
  //   const doubles = numbers.map(function (eachValue, eachIndex) {
  //     // normalnya map function (mapper) harus memiliki return value.
  //     const double = 2 * eachValue;
  //     return double;
  //   });

  // versi one line.
  // kasusnya ketika logika dalam function kita cukup simple.
  // kita logikanya tidak simple, petimbangkan menggunakna block {}.
  const doubles = numbers.map((eachValue) => 2 * eachValue);

  // contoh logika yang kompleks.
  // sekarang kita ubah mapper, dengan aturan seperti berikut.
  // 1. ketika eachValue ganjil maka dikali 3.
  // 2. ketika eachValue genap maka dikali 2.
  // 3. ketika eachValue habis dibagi 3  maka dikali 9.
  // pada kasus ini kita tidak mungkin menggunakan versi one line.
  const complex = numbers.map((eachValue) => {
    // rule ke 3.
    if (eachValue % 3 === 0) {
      return eachValue * 9;
    }

    // rule ke 2.
    if (eachValue % 2 == 0) {
      return eachValue * 2;
    } else {
      return eachValue * 3;
    }
  });

  // JANGAN DITIRU YA!!!
  // KASUSNYA TIDAK TEPAT.
  //   const complex = numbers.map((eachValue) => {
  //     switch (eachValue) {
  //       case 3:
  //       case 6:
  //       case 9:
  //         return eachValue * 9;
  //       case 1:
  //       case 5:
  //       case 7:
  //         return eachValue * 3;
  //       case 2:
  //       case 4:
  //       case 8:
  //       case 10:
  //         return eachValue * 2;
  //     }
  //   });

  console.log(complex);

  // secara internal, function yang kita berikan itu di ekesekusi per tiap element
  // didalam array.
  // misal kitanamakan setiap element ke-i = e[i], misal ke-0 = e[0]
  // dan function yang kita berikan namanya fn

  // yang terjadi adalah:
  // ketika mengujungi index ke-0 => fn(e[0], 0)
  // ketika mengujungi index ke-1 => fn(e[1], 1)
  // .
  // .
  // .
  // ketika mengujungi index ke-9 => fn(e[9], 9)

  console.log("double values menggunakan map:", doubles);
}

function loopWithFilter(numbers) {
  // disini kasus kita berbeda.
  // kita diminta untuk memisahkan bilangan ganjil dan bilangan
  // genap secara terpisah.

  // cara naive.
  //   const oddNumbers = [];
  //   const evenNumbers = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     const currentNumber = numbers[i];
  //     if (currentNumber % 2 == 0) {
  //       evenNumbers.push(currentNumber);
  //     } else {
  //       oddNumbers.push(currentNumber);
  //     }
  //   }

  const oddNumbers = numbers.filter((eachValue) => eachValue % 2 === 1);
  const evenNumbers = numbers.filter((eachValue) => eachValue % 2 === 0);
  // misal untuk yang habis dibagi 3.
  const others = numbers.filter((eachValue) => eachValue % 3 === 0);

  console.log("filter untuk  ganjil: ", oddNumbers);
  console.log("filter untuk  genap: ", evenNumbers);
}

withForLoop(globalNumbers);
withForEach(globalNumbers);
doubleValuesWithMap(globalNumbers);
loopWithFilter(globalNumbers);

// Multi Dimensional Array.

const globalNumbers2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Dimensi 2D => Baris x Kolom => 4x3

const globalNumbers3D = [
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  [
    [7, 8],
    [9, 10],
    [11, 12],
  ],
  [
    [13, 14],
    [15, 16],
    [17, 19],
  ],
  [
    [19, 20],
    [21, 22],
    [23, 24],
  ],
];

// Dimensi 3D => Baris x Kolom x Kedalaman => 4x3x2

function sum2DwithBasicLoop(numbers2D) {
  let sum = 0;

  const rowLength = numbers2D.length;
  const colLength = numbers2D[0].length;

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const cellValue = numbers2D[row][col];
      sum += cellValue;
    }
  }

  console.log("Sum 2D array with basic loop", sum);
}

function sum3DwithBasicLoop(numbers3D) {
  let sum = 0;

  const rowLength = numbers3D.length;
  const colLength = numbers3D[0].length;
  const depLength = numbers3D[0][0].length;

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      for (let dep = 0; dep < depLength; dep++) {
        const cellValue = numbers3D[row][col][dep];
        sum += cellValue;
      }
    }
  }

  console.log("Sum 3D array with basic loop", sum);
}

function sum2DwithForEach(numbers2D) {
  let sum = 0;
  numbers2D.forEach((eachRowValues) => {
    eachRowValues.forEach((eachRowAndColValue) => {
      sum += eachRowAndColValue;
    });
  });

  console.log("Sum 2D array with for each", sum);
}

function sum3DwithForEach(numbers3D) {
  let sum = 0;
  numbers3D.forEach((eachRowValues) => {
    eachRowValues.forEach((eachRowAndColValues) => {
      eachRowAndColValues.forEach((eachRowColAndDepValue) => {
        sum += eachRowColAndDepValue;
      });
    });
  });

  console.log("Sum 3D array with for each", sum);
}

sum2DwithBasicLoop(globalNumbers2D);
sum2DwithForEach(globalNumbers2D);

sum3DwithBasicLoop(globalNumbers3D);
sum3DwithForEach(globalNumbers3D);

// Array of Object

// Object itu adalah sebuah 'struktur data' pada JavaScript.
// Misalnya kita mahasiswa memiliki data sebagai berikut.

// nama, nim, alamat, jurusan => satu data mahasiswa
// const bob = {
//   name: "Bob Alex",
//   nim: "14112",
//   alamat: "Jakarta",
//   jurusan: "Informatika",
// };

// const alice = {
//   name: "Alice Siera",
//   nim: "14111",
//   alamat: "Bandung",
//   jurusan: "Informatika",
// };

// ketika kalian sudah punya objectnya.
// const informaticStudents = [bob, alice];
// atau bisa langsung aja.
const informaticStudents = [
  {
    name: "Bob Alex",
    nim: 14112,
    alamat: "Jakarta",
    jurusan: "Informatika",
  },
  {
    name: "Alice Siera",
    nim: 14111,
    alamat: "Bandung",
    jurusan: "Informatika",
  },
  {
    name: "Eva",
    nim: 14113,
    alamat: "Jakarta",
    jurusan: "Informatika",
  },
];

informaticStudents.push({
  name: "Daniel",
  nim: 14114,
  alamat: "Bandung",
  jurusan: "Informatika",
});

// console.log(informaticStudents);
console.table(informaticStudents);

const informaticStudentsFromJakarta = informaticStudents.filter(
  (student) => student.alamat === "Jakarta"
);

const informaticStudentsFromBandung = informaticStudents.filter(
  (student) => student.alamat === "Bandung"
);

const informaticStudentsOddNIM = informaticStudents.filter(
  (student) => student.nim % 2 === 1
);

const informaticStudentsEvenNIM = informaticStudents.filter(
  (student) => student.nim % 2 === 0
);

console.table(informaticStudentsFromJakarta);
console.table(informaticStudentsFromBandung);
console.table(informaticStudentsOddNIM);
console.table(informaticStudentsEvenNIM);

// Kalau kalian masih bingung terkait method Push, Pop, Unshift, Shift,
// Splice. Kalian bisa lihat recording pertemuan sebelumnya, tentang DOM events.
