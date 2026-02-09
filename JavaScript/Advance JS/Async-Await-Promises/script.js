// Promise - default state is pending

const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

pro
  .then(function () {
    console.log("Resolved!!!");
  })
  .catch(function () {
    console.log("Rejected!!!");
  });

// API Example

let data = fetch("https://randomuser.me/api/")
  .then((unstructuredData) => unstructuredData.json())
  .then(function (realData) {
    console.log(realData.results[0].name);
  })
  .catch((err) => console.log(err));

// Async-Await

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num > 5) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 2000);
  });
}

async function abcd() {
  let newNum = await getNum();
  console.log(newNum);
}

abcd();
