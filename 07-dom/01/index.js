// setTimeout(() => {
//   const span1 = document.querySelector("#header p span");

//   span1.innerHTML = "<h1>Ini menjadi H1</h1>";
// }, 2 * 1000);

const span1 = document.querySelector("#header p span");
span1.innerHTML = "<h1>Ini menjadi H1</h1>";

function delayRender(renderer) {
  setTimeout(renderer, 3 * 1000); // 3s delay
}

// inserts a new H1 into Header.
function insertH1InHeader() {
  /**
   * Skenario:
   *
   * Kita akan menambahkan elemen `<h1>Ini H1 Didalam Header</h1>`
   * sebagai first child nya #header (id=header).
   */

  // Solusi 1: Menggunakan innerHTML -> efeknya kita malah menggati keseluruhan elemen
  // di dalam #header

  // Kita membutuhkan cara lain.

  const header = document.getElementById("header");

  // kita perlu membuat `<h1>Ini H1 Didalam Header</h1>` tetapi harus
  // dalam bentuk Node agar kita bisa memasukkan sebagai argumen di appendChild.

  // proses ini kita baru membuat tagnya aja: <h1></h1>
  const h1 = document.createElement("h1");

  // kita isi <h1></h1> dengan text "Ini H1 Didalam Header"
  h1.textContent = "Ini H1 Didalam Header";

  // saat ini kita sudah berhasil membuat `<h1>Ini H1 Didalam Header</h1>`

  //   // tinggal kita masukin h1 sebagai argumen
  //   header.appendChild(h1);

  //   kita pengen h1 berada diawal.
  header.insertBefore(h1, header.firstElementChild);
}

delayRender(insertH1InHeader);
