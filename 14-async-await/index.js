function fetchDataFromServerA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Server A");
      resolve(10);
    }, 2000);
  });
}

function fetchDataFromServerB(dataServerA) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Server B");
      resolve(2 * dataServerA);
    }, 1000);
  });
}

function fetchDataFromServerC(dataServerB) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Server C");
      //   resolve(3 * dataServerB);
      reject(new Error("INI SYNTAX ERROR DI C"));
    }, 1000);
  });
}

function fetchDataFromServerD(dataServerC) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Server D");
      resolve(4 * dataServerC);
    }, 1000);
  });
}

function fetchDataFromServerE(dataServerD) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Server E");
      resolve(5 * dataServerD);
    }, 1000);
  });
}

function fetchDataFromServerF(dataServerE) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Server F");
      resolve(6 * dataServerE);
    }, 1000);
  });
}

function fetchDataFromGoogle() {
  return new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver("fetch data from Google success");
    }, 5000);
  });
}

// callback HELL.
// fetchDataFromServerA()
//   .then((dataServerA) => {
//     fetchDataFromServerB(dataServerA)
//       .then((dataServerB) => {
//         fetchDataFromServerC(dataServerB)
//           .then((dataServerC) => {
//             fetchDataFromServerD(dataServerC)
//               .then((dataServerD) => {
//                 fetchDataFromServerE(dataServerD)
//                   .then((dataServerE) => {
//                     fetchDataFromServerF(dataServerE)
//                       .then((dataServerF) => {
//                         console.log("result", dataServerF);
//                       })
//                       .catch((err) => console.log(err));
//                   })
//                   .catch((err) => console.log(err));
//               })
//               .catch((err) => console.log(err));
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err)); // 7s+

// Async Await

async function fetchServer() {
  try {
    const serverA = await fetchDataFromServerA();
    const serverB = await fetchDataFromServerB(serverA);
    const serverC = await fetchDataFromServerC(serverB);
    const serverD = await fetchDataFromServerD(serverC);
    const serverE = await fetchDataFromServerE(serverD);
    const serverF = await fetchDataFromServerF(serverE);
    // throw "x";
    return serverF;
  } catch (err) {
    if (err instanceof Error) {
      const serverD = await fetchDataFromServerD(10);
      const serverE = await fetchDataFromServerE(serverD);
      const serverF = await fetchDataFromServerF(serverE);
      return serverF;
    }

    throw new Error("is an even number");
    // throw new FetchAPIError(500, "is an even number");
  }
}

// class FetchAPIError extends Error {
//   constructor(status, message) {
//     super(message);
//     this.status = status;
//     this.message = message;
//   }
// }

fetchServer()
  .then((result) => {
    console.log("INI RESULT", result);
  })
  .catch((err) =>
    console.log(err, "apakah benaran error?", err instanceof Error)
  );
// 1s 0s
fetchDataFromGoogle().then((message) => console.log(message)); // 1s exec: 0s (DONE)

async function renderTodo() {
  const ul = document.getElementById("todos");
  try {
    const todosResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "GET",
      }
    );

    const todosJSON = await todosResponse.json();
    for (let i = 0; i < todosJSON.length; i++) {
      const title = todosJSON[i].title;
      //   <li>Title</li>
      const li = document.createElement("li");
      li.textContent = title;
      ul.appendChild(li);
    }
  } catch (error) {
    console.log(error);
  }
}

setTimeout(renderTodo, 3 * 1000);
