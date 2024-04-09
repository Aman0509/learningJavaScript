# Working with HTTP Requests

| Contents                                                  |
| :-------------------------------------------------------- |
| [What & Why](#what--why)                                  |
| [More Background about Http](#more-background-about-http) |
| [Getting Started with HTTP](#getting-started-with-http)   |

## [What & Why](https://drive.google.com/uc?export=view&id=18MZto3hCXlh6x1PZIgKVotxtfF23MSWh)

This module focuses on network requests, but what precisely do they entail and why do they matter?

- Building web pages involves a combination of HTML code for structure and script logic.
- JavaScript isn't essential for basic functionality; server-side languages like PHP can handle dynamic content generation.
- However, JavaScript can enhance user experience by enabling interaction without page reloads.
- JavaScript can validate user input, manage interactions like post deletion, and facilitate asynchronous communication with the server.
- By preventing default actions, JavaScript can intercept form submissions, validate data, and send HTTP requests to the server.
- Backend typically involves an API, exposing endpoints for various operations like fetching and storing data.
- Direct communication between the browser and server, resulting in full-page reloads, is not ideal for user experience.
- Instead, JavaScript communicates with specific endpoints on the server, allowing targeted interactions without page reloads.

Therefore, understanding APIs and HTTP requests (GET, POST) is crucial for effective use of client-side JavaScript.

Readings:

-[How the Web Works](https://academind.com/tutorials/how-the-web-works)

## [More Background about Http](https://drive.google.com/uc?export=view&id=1CbUrjEutmX7leotpQyU4_P0JENZyWTLo)

Now that we understand the bigger picture, let's zoom in on how HTTP requests work.

**Client and Server: The Separate Worlds**

- Our code runs in two places:
  - **Client-side (Frontend):** The user's browser, responsible for what the user sees and interacts with.
  - **Server-side (Backend):** The web server that handles data storage and retrieval (often using a database on another server).
- These can be on completely different servers (e.g., `mypage.com` for frontend and `mybackend.com` for backend).

**Client-Side JavaScript and Database Communication**

- **Security First:** Client-side JavaScript shouldn't directly access databases. Exposing database credentials in client-side code is a big security risk.
- **The Mediating Server:** Instead, JavaScript talks to a web server, which then interacts with the database.

**Using HTTP Requests and Responses**

- Client and server communicate using structured HTTP requests and responses.
- An HTTP request includes:
  - **URL:** The web address of the server resource (e.g., `mypage.com/posts` [invalid URL removed]).
  - **Method:** An action indicator like GET (retrieve data), POST (create data), PUT (update data), PATCH (partially update), or DELETE (remove data).
  - **Optional Headers:** Extra information for the server.
  - **Optional Body (for `POST`, `PUT`, `PATCH`):** Data to send to the server (e.g., new post content).

**Server Defines Supported Methods and Formats**

- The server decides which HTTP method and URL combinations it understands.
- Common logic applies:
  - `GET`: Retrieve data.
  - `POST`: Create new data.
  - `PUT/PATCH`: Update data (PUT replaces entirely, PATCH updates a part).
  - `DELETE`: Remove data.
- The server also specifies accepted data formats (e.g., JSON, FormData).

## Getting Started with HTTP

### Using [`XMLHttpRequest()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)

`XMLHttpRequest()` is a JavaScript object used to interact with servers asynchronously. It allows you to send HTTP requests (such as `GET`, `POST`, `PUT`, `DELETE`) to a server and handle the responses without reloading the page.

**`GET` Request**

```javascript
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the responseType property to 'json'
xhr.responseType = "json";

// Configure the GET request
xhr.open("GET", "https://api.example.com/data", true);

// Set up a callback function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    // Response data will be automatically parsed as JSON
    console.log(xhr.response);
  } else {
    // Error handling
    console.error("Request failed with status:", xhr.status);
  }
};

// Send the request
xhr.send();
```

**`POST` Request**

```javascript
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the POST request
xhr.open("POST", "https://api.example.com/data", true);
xhr.setRequestHeader("Content-Type", "application/json");

// Set up a callback function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    console.log(xhr.responseText);
  } else {
    // Error handling
    console.error("Request failed with status:", xhr.status);
  }
};

// Data to be sent in the request body
var data = JSON.stringify({ key: "value" });

// Send the request with the data
xhr.send(data);
```

**`DELETE` Request**

```javascript
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the DELETE request
xhr.open("DELETE", "https://api.example.com/data/123", true);

// Set up a callback function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    console.log("Data deleted successfully");
  } else {
    // Error handling
    console.error("Request failed with status:", xhr.status);
  }
};

// Send the request
xhr.send();
```

**Network Related Error Handling**

When error occurs in following scenarios occurs during processing of the request, `onerror` event handler property can be used to handle.

- Establishing connection
- Sending the request (necessary data is included in request or not)
- Waiting for response (request timed out)

```javascript
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the request
xhr.open("GET", "https://api.example.com/data", true);

// Set up a callback function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    console.log(xhr.responseText);
  } else {
    // Error handling
    console.error("Request failed with status:", xhr.status);
  }
};

// Set up error handling for the request
xhr.onerror = function () {
  console.error("Request failed"); // This function will be called if an error occurs during the request
};

// Send the request
xhr.send();
```

These are just the few ways to handle http requests using `XMLHttpRequest()`. To know more about it, refer official docs [here](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

### Using [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API

The Fetch API is a modern JavaScript champion for making asynchronous HTTP requests. It offers a cleaner and more intuitive way to communicate with web servers compared to its predecessor, XMLHttpRequest (XHR).

```javascript
// Example URL for demonstration
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// GET Request
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log("GET Response:", data));

// POST Request
const postData = {
  title: "Sample Title",
  body: "Sample Body",
  userId: 1,
};

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => console.log("POST Response:", data));

// DELETE Request
const postIdToDelete = 1;

fetch(`${apiUrl}/${postIdToDelete}`, {
  method: "DELETE",
}).then((response) => {
  if (response.ok) {
    console.log("DELETE Success");
  } else {
    console.error("DELETE Error:", response.status);
  }
});
```

- We use `fetch()` to send requests to the URL `'https://jsonplaceholder.typicode.com/posts'`, a fake REST API provided by JSONPlaceholder for testing purposes.
- For the GET request, we call `fetch(apiUrl)` to retrieve data from the server. The response is converted to JSON format using `.json()` method.
- For the POST request, we specify the method as `'POST'`, set the `Content-Type` header to `'application/json'`, and provide the request body as JSON string using `JSON.stringify(postData)`.
- For the DELETE request, we specify the method as `'DELETE'` and append the ID of the resource to be deleted to the URL.

---

[<img align="center" src="../images/left_arrow.png" height="20" width="20"/> Async JavaScript: Promises and Callbacks](../Async-JS-Promises-and-Callbacks/README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<img align="center" src="../images/home.png" height="20" width="20"/> Home](../README.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Work in Progress... <img align="center" src="../images/right_arrow.png" height="20" width="20"/>](../README.md)
