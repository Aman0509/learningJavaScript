// console.log("Starting some analysis...");

// Demonstration of setInterval()

const intervalId = setInterval(() => {
  console.log("Starting some analysis...")
}, 2000);

document.getElementById('stop-analytics').addEventListener(
  'click', () => {
    clearInterval(intervalId);
    // clearTimeout() will also work
  }
)