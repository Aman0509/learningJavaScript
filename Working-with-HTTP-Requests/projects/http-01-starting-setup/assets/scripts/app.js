const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   //MLHttpRequest (XHR) is a JavaScript class that allows a browser to send HTTP requests to a web server.
  //   // It is a JavaScript API that provides methods for sending network requests between a browser and a server.
  //   const xhr = new XMLHttpRequest();

  //   // defining request type and endpoint
  //   xhr.open(method, url);

  //   // if you define like this, it will internally parse JSON into JS datatype
  //   // so, you need not to handle that
  //   xhr.responseType = "json";

  //   // Converting response text into JS native data type
  //   xhr.onload = function () {
  //     if (xhr.response >= 200 && xhr.response < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error("Something went wrong!"));
  //     }
  //     // const listOfPosts = JSON.parse(xhr.response); // will convert json to JS object
  //   };

  //   // error handling; `onerror` event in XMLHttpRequest() triggers when there is a network level failure.
  //   // This can happen when: The request cannot be issued, The server returns an error code,
  //   // and A denied cross-domain request.
  //   xhr.onerror = function () {
  //     reject(new Error("Failed to send request"));
  //   };

  //   // sending request to endpoint
  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;
  return fetch(url, { method: method, body: JSON.stringify(data) }).then(
    (response) => {
      return response.json();
    }
  );
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPosts(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  const responseData = await sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPosts(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
