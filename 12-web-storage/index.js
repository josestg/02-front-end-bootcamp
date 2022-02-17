const sessionKey = "todoSession";

// ref:001
// Stardar Object yang kita simpan ke Storage:
// [
//   {
//     id: 1,
//     title: "todo 1 title",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "todo 2 title",
//     completed: false,
//   },
// ];

/**
 * Mengembalikan value dari session yang memiliki key 'todoSession'.
 * Value yang di peroleh dari session storage bertipe String. Sehingga
 * diperlukan sebuah konversi dari string menjadi object.
 * Pada kalus ini bentuk object yang kita inginkan adalah seperti ref:001.
 */
function getTodoSession() {
  let session = sessionStorage.getItem(sessionKey);

  // pertma kita cek dulu, apakah kita sudah memiliki session storage.
  // jika sudah, tinggal kita lakukan konversi value menjadi object.
  // jika belum, kita membuat session baru dengan value awalnya adalah array kosong
  // yang bertipe string. Kenapa? agar nanti kita bisa menambahkan todo baru kedalam
  // array tersebut.
  if (session === null) {
    sessionStorage.setItem(sessionKey, "[]");
    session = sessionStorage.getItem(sessionKey);
  }

  // konversi string kedalam object ref:001.
  const sessionObject = JSON.parse(session);
  return sessionObject;
}

function getTodoLocal() {
  let local = localStorage.getItem(sessionKey);

  // pertma kita cek dulu, apakah kita sudah memiliki local storage.
  // jika sudah, tinggal kita lakukan konversi value menjadi object.
  // jika belum, kita membuat local storage baru dengan value awalnya adalah array kosong
  // yang bertipe string. Kenapa? agar nanti kita bisa menambahkan todo baru kedalam
  // array tersebut.
  if (local === null) {
    localStorage.setItem(sessionKey, "[]");
    local = localStorage.getItem(sessionKey);
  }

  // konversi string kedalam object ref:001.
  const sessionObject = JSON.parse(local);
  return sessionObject;
}

/**
 * Menganti session yang kita miliki saat ini dengan session yang sudah terbaru.
 * Misalnya pertama kita mendapkan session menggunakan getTodoSession(),
 * session yang kita dapatkan mungkin akan mengalami perubahan, sehingga untuk
 * mengsinkronkan perubahan tersebut kita boleh menggunakan fungsi replaceSession.
 */
function replaceSession(updatesArrayOfObject) {
  const str = JSON.stringify(updatesArrayOfObject);
  sessionStorage.setItem(sessionKey, str);
}

function replaceLocal(updatesArrayOfObject) {
  const str = JSON.stringify(updatesArrayOfObject);
  localStorage.setItem(sessionKey, str);
}

/**
 * Membuat element <li> {Todo Name} </li>
 */
function createNewTodoListItem(todo) {
  // <li> Todo Name </li>
  const li = document.createElement("li");
  li.textContent = todo.title;

  if (todo.completed) {
    li.classList.add("completed");
  }

  return li;
}

/**
 * menampilkan todo dari session kedalam DOM element.
 */
function loadCurrentTodosToContainer() {
  const container = document.getElementById("todo-container");

  // Untuk mencegah penambahan child yang duplikasi,
  // solusi paling mudah adalah kita hapus dulu semua child
  // kemudian kita ulangi nemanbahkan dari awal degan todo yang terbaru.
  container.innerHTML = "<!-- MENGHAPUS CHILDREN SEBELUMNYA -->";

  //   const todos = getTodoSession();
  const todos = getTodoLocal();

  todos.forEach((eachTodo) => {
    const listItem = createNewTodoListItem(eachTodo);
    container.appendChild(listItem);
  });

  //   setTimeout(() => {
  //     todos.forEach((eachTodo) => {
  //       const listItem = createNewTodoListItem(eachTodo);
  //       container.appendChild(listItem);
  //     });
  //   }, 3 * 1000);
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // mengubah form entries menjadi object biasa.
  const fd = new FormData(form);
  const data = Object.fromEntries(fd);

  // mengambil todo saat ini dari session
  //   const todos = getTodoSession();

  // mengambil todo saat ini dari local storage.
  const todos = getTodoLocal();

  // membuat todo baru dengan id yang baru.
  const nextID = todos.length + 1;
  const newTodo = {
    id: nextID,
    title: data.todo,
    completed: false,
  };

  // menambahkan todo terbaru kedalam todo saat ini.
  todos.push(newTodo);

  // karna kita sudah memodifikasi todo, artinya todo yang kita miliki saat ini
  // dengan todo yang ada di session itu berbeda.
  // sehingga kita perlu mengupdatenya.
  //   replaceSession(todos);

  replaceLocal(todos);

  // karna ada update baru di todo, kita perlu juga mengupdate tampilan DOM
  loadCurrentTodosToContainer();
});

loadCurrentTodosToContainer();
