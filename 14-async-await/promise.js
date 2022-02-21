function fetchDataFromGoogle() {
  return new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver("fetch data from Google success");
    }, 1000);
  });
}

function fetchDataFromBing() {
  return new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver("fetch data from Bing success");
    }, 5 * 1000);
  });
}

function fetchDataFromNasa() {
  return new Promise((resolver, rejector) => {
    setTimeout(() => {
      rejector("fetch data from Nasa failed");
    }, 3 * 1000);
  });
}

function fetchDataFromSpaceX() {
  return new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver("fetch data from Space X success");
    }, 4 * 1000);
  });
}

const start = new Date();

fetchDataFromBing().then((message) => console.log(message)); // 5s exec: 4s 3s 2s 1s 0s (DONE, FULFIELD)
fetchDataFromNasa() // 3s execs: 2s 1s 0s (DONE, REJECTED)
  .then((message) => console.log(message))
  .catch((err) => {
    // waiting time: 3s
    console.log(err);
    fetchDataFromSpaceX().then(
      (message) => console.log("percobaan ke-2", message) // 4s 3s 2s 1s 0s (DONE, FULFIELD)
    );
  });
fetchDataFromGoogle().then((message) => console.log(message)); // 1s exec: 0s (DONE)

const end = new Date();
console.log(end - start);
