// GOLBAL STATE.
let userName = "";
let userComment = "";

const userForm = document.getElementById("form");
const alertButton = document.getElementById("alert-button");
const dialog = document.getElementById("dialog");
const dialogContent = document.getElementById("dialog-content");
// catatan: kita menggunakan querySelectorAll ketika kita ingin method forEach.
const handles = document.querySelectorAll(".handle");

// console.log(handles);

// mendaftarkan event "click" ke setiap handle di array of handle element.
// kita mendatfarkan "event listener" yang sama. Artinya,
// handle index ke-0 dan handle index ke-1 melakukan hal yang SAMA ketika terjadi "click".
//
// cara 1: menuliskan semuanya secara manual.
// handles[0].addEventListener("click", onDialogHandleClicked);
// handles[1].addEventListener("click", onDialogHandleClicked);
// cara 2: menggunakan loop. (utamakan kuasai yang ini)
for (let i = 0; i < handles.length; i++) {
  handles[i].addEventListener("click", onDialogHandleClicked);
}
// cara 3: menggunakan looping method. (spoiler aja)
// handles.forEach((each) =>
//   each.addEventListener("click", onDialogHandleClicked)
// );

/**
 * Kita memiliki dua buah element utama, pertama kita punya dialog alert dan
 * yang kedua kita memiliki button "Show Dialog Alert".
 *
 * Kita ingin menampilkan dialog alert ketika button "Show Dialog Alert" di click.
 * Kemudian ketika button "OK" atau button "X" yang ada pada dialog alert di click
 * kita ingin menyembunyikan si dialog alert dan menampilkan kembali si button "Show Dialog Alert".
 */

// mendaftarkan sebuah event "click".
alertButton.addEventListener("click", showAlert);

function showAlert() {
  // kita ingin menampilkan si "dialog alert".
  // kondisi saat ini, "dialog alert" memiliki class yang namanya "hide",
  // yang mana class "hide" itu bertugas untuk menyembunyikan sebuah DOM element.
  //
  // Jadi, jika kita ingin menampilkan DOM element kita harus menghapus class "hide"
  // dari daftar class (classList) yang dimiliki oleh element yang kita inginkan.
  // Atau sebaliknya, jika kita ingin menyembunyikan DOM element maka kita harus
  // menambahkan class "hide" kedalam daftar kelas (classList) element yang
  // kita inginkan.

  // 1. menampilkan "dialog alert" dengan cara menghapus class "hide".
  dialog.classList.remove("hide");

  // 2. menyembunyikan button "Show Dialog Alert" dengan cara menambahkan class "hide".
  alertButton.classList.add("hide");

  // 3. form menghilang
  userForm.classList.add("hide");

  // Kita ingin menampilkan user data.

  // <h1> Name </h1>
  // <p> Comment </p>

  const h1 = document.createElement("h1");
  h1.textContent = userName;

  const p = document.createElement("p");
  p.textContent = userComment;

  //   const formattedMessage = `(${userName}) ${userComment}`;
  //   dialogContent.textContent = formattedMessage;

  dialogContent.appendChild(h1);
  dialogContent.appendChild(p);
}

// Kebalikan dari fungsi `showAlert`.
function onDialogHandleClicked() {
  // 1. menyembunyikan "dialog alert" dengan cara menambahkan class "hide".
  dialog.classList.add("hide");

  // 2. menampilkan button "Show Dialog Alert" dengan cara menghapus class "hide".
  alertButton.classList.remove("hide");
}

// ----  FORM DATA

// Secara default, form ketika di submit melakukan aksi "RELOAD BROWSER
userForm.addEventListener("submit", function (event) {
  event.preventDefault(); // menghilangkan aksi default ketika ada event submit.

  // cara 1:
  //   const userNameInput = document.getElementById("user-name");
  //   const userCommentInput = document.getElementById("user-comment");
  //   const userName = userNameInput.value;
  //   const userComment = userCommentInput.value;
  //   const formattedMessage = `(${userName}) ${userComment}`;

  //   console.log(formattedMessage);

  //   userCommentInput.value = "";
  //   userNameInput.value = "";

  // cara 2:
  const formObject = new FormData(userForm);
  const formValues = Object.fromEntries(formObject);

  const formattedMessage = `(${formValues.nama}) ${formValues.komen}`;

  console.log(formattedMessage);
  userName = formValues.nama;
  userComment = formValues.komen;
  showAlert();
  userForm.reset();
});

// -- ON CHANGE EVENT
// const userNameInput = document.getElementById("user-name");

// let currentUserInput = "";
// userNameInput.addEventListener("input", function (event) {
//   currentUserInput = userNameInput.value;
// });

// const body = document.getElementById("body");

// const h1 = document.createElement("h1");
// h1.textContent = "Created H1";

// h1.addEventListener("click", showAlert);

// body.appendChild(h1);
