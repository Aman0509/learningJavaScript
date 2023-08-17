const button = document.querySelector('button');
const output = document.querySelector('p');

// Wrapping setTimeout() inside `setTimer()` function and it returns Promise object.
// This Promise object will now handle the success or failure outcomes.
// So, point here is, since these web API methods (setTimeout() and navigator.geolocation.getCurrentPosition())
// does not support Promise object but only callbacks, hence, for demonstration, they are encapsulated under
// Promise object.
const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(data => {
        console.log(data, posData);
      });
  }, error => {
    console.log(error);
  });
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  console.log("Getting position...");
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//     result += i;
// }

// console.log(result);