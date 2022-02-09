console.log("Hello, World");

function calculateAreaRect(w, h) {
  const a = w * h;
  return a;
}

function calculateSquare(sisi, unit = "m") {
  // dapat luas dalam bentuk angka.
  const squareArea = calculateAreaRect(sisi, sisi); // fungsi helper.

  //   tambahin di belakang satuannya. 16m^2
  const squareAreaWithUnit = `${squareArea}${unit}^2`;

  return squareAreaWithUnit;
}

function showDialogSoal(jumlahSoal) {
  for (let itearasi = 0; itearasi < jumlahSoal; itearasi++) {
    const sisiInStringType = prompt("sisi"); // fungsi helper.
    let satuannya = prompt("satuannya dong...");
    // const heightInStringType = prompt("height");

    if (satuannya === "") {
      satuannya = undefined;
    }

    const sisi = parseInt(sisiInStringType);
    // const height = parseInt(heightInStringType);

    const area = calculateSquare(sisi, satuannya);
    console.log("Perulangan ke", itearasi, "Luas: ", area);
  }
}

// showDialogSoal(1)

function add(a, b) {
  return a + b;
}

console.log("Function biasa", add(2, 3)); // 5

// Function tidak bernama
const addAnonymous = function (a, b) {
  return a + b;
};

console.log("Function anonym", addAnonymous(2, 3)); // 5

const addArrowFunc = (a, b) => {
  return a + b;
};

const double = (n) => 2 * n;

console.log("Function arrow", addArrowFunc(2, 3)); // 5

const myName = "jose";
