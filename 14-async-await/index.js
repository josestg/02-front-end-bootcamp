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
      resolve(3 * dataServerB);
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
    console.log("result", serverF);
  } catch (err) {
    console.log("failed", err);
  }
}

fetchServer();
// 1s 0s
fetchDataFromGoogle().then((message) => console.log(message)); // 1s exec: 0s (DONE)
