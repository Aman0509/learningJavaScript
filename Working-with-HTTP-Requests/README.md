# Working with HTTP Requests

| Contents                                                  |
| :-------------------------------------------------------- |
| [What & Why](#what--why)                                  |
| [More Background about Http](#more-background-about-http) |

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

---

[<img align="center" src="../images/left_arrow.png" height="20" width="20"/> Async JavaScript: Promises and Callbacks](../Async-JS-Promises-and-Callbacks/README.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [<img align="center" src="../images/home.png" height="20" width="20"/> Home](../README.md) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Work in Progress... <img align="center" src="../images/right_arrow.png" height="20" width="20"/>](../README.md)
