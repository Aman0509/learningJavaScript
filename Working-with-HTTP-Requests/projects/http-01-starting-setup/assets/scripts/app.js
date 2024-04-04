const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    //MLHttpRequest (XHR) is a JavaScript class that allows a browser to send HTTP requests to a web server.
    // It is a JavaScript API that provides methods for sending network requests between a browser and a server.
    const xhr = new XMLHttpRequest();

    // defining request type and endpoint
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    // if you define like this, it will internally parse JSON into JS datatype
    // so, you need not to handle that
    xhr.responseType = "json";

    // Converting response text into JS native data type
    xhr.onload = function () {
      resolve(xhr.response);
      // const listOfPosts = JSON.parse(xhr.response); // will convert json to JS object
    };

    // sending request to endpoint
    xhr.send();
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
}

fetchPosts();
