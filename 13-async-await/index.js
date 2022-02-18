// const content = document.getElementById("content");
const button = document.getElementById("button");
// const alertBtn = document.getElementById("alert");

button.addEventListener("click", () => {
  setTimeout(() => {
    for (let i = 0; i < 100_000; i++) {
      console.log("processing...");
    }
  }, 1);

  // prosess yang disini akan menunggu proses sebelum selesai.
  content.textContent = "Di ubah!";
  console.log("SELESAI");
});

// alertBtn.addEventListener("click", () => {
//   alert("Hello");
// });

// function task1() {
//   for (let i = 0; i < 1000; i++) {
//     console.log("task 1", i);
//   }
// }

// function task2() {
//   for (let i = 0; i < 100; i++) {
//     console.log("task 2", i);
//   }
// }

// function task3() {
//   for (let i = 0; i < 100; i++) {
//     console.log("task 3", i);
//   }
// }

// setTimeout(task1, 100);
// setTimeout(task2, 10);
// setTimeout(task3, 30);

// function exec(fn) {
//   console.log("start exec");
//   fn();
//   console.log("end exec");
// }

// exec(function () {
//   console.log("Hello");
// });

// exec(function () {
//   console.log("Hi");
// });

// const arr = [1, 2, 3];

// Array.prototype.myMap = function (callback) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     const eachValue = this[i];
//     const eachIndex = i;
//     const result = callback(eachValue, eachIndex);
//     newArr.push(result);
//   }

//   return newArr;
// };

// console.log("Built in map");
// const result1 = arr.map((eachValue) => eachValue * 2);
// console.log(result1);

// console.log("Custom map");
// const result2 = arr.myMap((eachValue, eachIndex) => eachValue * 2);
// console.log(result2);

const url = "http://jsonplaceholder.typicode.com/users/1";

async function fetchUserTodo() {
  try {
    const userResponse = await fetch(url);
    const userJSON = await userResponse.json();

    const userID = userJSON.id;
    const userTodosURL = `https://jsonplaceholder.typicode.com/users/${userID}/todos`;

    const todoResponse = await fetch(userTodosURL);
    const todoJSON = await todoResponse.json();

    console.log(userJSON);
    console.log(todoJSON);
  } catch (error) {
    console.log(error);
  }
}

fetchUserTodo();

// fetch(url, { method: "GET" })
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonData) => {
//     console.log(jsonData);
//     const id = jsonData.id;
//     const userTodosURL = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
//     return fetch(userTodosURL, { method: "GET" });
//   })
//   .then((userTodosResponse) => {
//     return userTodosResponse.json();
//   })
//   .then((userTodosData) => {
//     console.log(userTodosData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("HERE....");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const fn = () => {
      const dataPromise = new Promise((dataResolve, dataReject) => {
        setTimeout(() => {
          dataReject("ON FAILED");
        }, 3 * 1000);
      });

      return dataPromise;
    };

    resolve(fn);
  }, 2 * 1000);
});

console.log(promise);

async function handle() {
  try {
    const fn = await promise;
    const result = await fn();
    console.log(result);
  } catch (error) {
    console.log("CATCH ERROR", error);
  }
}

handle();

// promise
//   .then((fn) => {
//     // const result = fn();
//     // console.log("ON THEN", result);
//     return fn();
//   })
//   .then((data) => {
//     console.log("ON SECOND THEN", data);
//   })
//   .catch((reason) => {
//     console.log("on catch", reason);
//   });
