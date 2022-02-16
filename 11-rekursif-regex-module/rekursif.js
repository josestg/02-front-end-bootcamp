// Menampilkan bilang n sampai dengan 1.
// n, n-1, n-2, ...., 2, 1.

function decrement(n) {
  // for (i = n; i > 0; i--) {
  //   console.log(i);
  // }

  // negatif 0 positif.
  // i > 0  -> semua bilangan positif.
  // i <= 0 -> semua bilangan negatif dan nol.

  // 1. base condition -> kondisi memberhentikan pemangilan rekursif.
  if (n <= 0) {
    return;
  }

  // post calls: kita memanggil rekursif setelah kita melakukan sesuatu.
  console.log(n);

  // 2. recursive step -> kondisi function memanggil dirinya sendiri.
  n = n - 1;
  decrement(n);

  // pre calls: kita memanggil rekursif sebelum kita melakukan sesuatu.
  //   console.log(n); // 0, 1, 2, ...,  9.
}

// Stack Call of Pre Calls Recursive.
// decrement(10)
//  decrement(9) call tertunda -> [console.log(9)]
//   decrement(8) call tertunda -> [console.log(9), console.log(8)]
//    decrement(7) call tertunda -> [console.log(9), console.log(8), console.log(7)]
//     decrement(6) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6)]
//      decrement(5) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5)]
//       decrement(4) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4)]
//        decrement(3) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3)]
//         decrement(2) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3), console.log(2)]
//          decrement(1) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3), console.log(2), console.log(1)]
//           decrement(0) call tertunda -> [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3), console.log(2), console.log(1), console.log(0)]
//            base kondisi terpernuhi -> rekursif berhenti -> pemanggilan semua call yang tertunda mulai dari antrian paling baru masuk hingga ke yang paling awal masuk.
// hasil:
// [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3), console.log(2), console.log(1), console.log(0)]
// [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3), console.log(2), console.log(1)]
// [console.log(9), console.log(8), console.log(7), console.log(6), console.log(5), console.log(4), console.log(3), console.log(2)]
// .
// .
// .
// [console.log(9), console.log(8)]
// [console.log(9)]
// []

// decrement(10);

// fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
export default function fibonacci(n) {
  // fibonacci(0);
  //   if (n === 0) {
  //     return 0;
  //   }

  //   // fibonacci(1) = 1
  //   if (n === 1) {
  //     return 1;
  //   }

  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(20));

export function iter() {
  for (let i = 0; i < 10; i++) {
    console.log("rekursif", i);
  }
}

export const message = "Hello from rekursif.js";

export { decrement as decrementRecursive };
