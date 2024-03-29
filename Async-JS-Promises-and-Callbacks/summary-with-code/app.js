const button = document.querySelector('button');
const output = document.querySelector('p');

// Wrapping setTimeout() inside `setTimer()` function and it returns Promise object.
// This Promise object will now handle the success or failure outcomes.
// So, point here is, since these web API methods (setTimeout() and navigator.geolocation.getCurrentPosition())
// does not support Promise object but only callbacks, hence, for demonstration, they are encapsulated under
// Promise object.

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  console.log(timerData, posData);
  //   .then(posData => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .then(data => {
  //     console.log(data, positionData);
  //   });

  // setTimer(1000).then(() => {
  //   console.log('Timer Done!');
  // });
  // console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);
// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//     result += i;
// }

// console.log(result);