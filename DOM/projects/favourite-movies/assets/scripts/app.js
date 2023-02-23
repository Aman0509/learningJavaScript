const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdropElement = document.getElementById("backdrop");
const cancelAddMovieModalButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieModalButton = cancelAddMovieModalButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];
let counter = 1;

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = `block`;
  } else {
    entryTextSection.style.display = "none";
  }
};

const toggleBackdropElement = () => {
  backdropElement.classList.toggle("visible");
};

const closeMovieDeletionModal = () => {
  toggleBackdropElement();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdropElement();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrlValue, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src=${imageUrlValue} alt=${title}/>
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5</p>
    </div>
    `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdropElement();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const rating = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please enter valid values (Rating between 1 and 5)");
    return;
  }
  const newMovie = {
    id: counter,
    title: titleValue,
    image: imageUrlValue,
    rating: rating,
  };
  movies.push(newMovie);
  counter++;
  console.log(movies);
  closeMovieModal();
  toggleBackdropElement();
  clearMovieInput();
  renderNewMovieElement(
    newMovie["id"],
    newMovie["title"],
    newMovie["image"],
    newMovie["rating"]
  );
  updateUI();
};

const clearMovieInput = () => {
  for (const usrInp of userInputs) {
    usrInp.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
  toggleBackdropElement();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdropElement.addEventListener("click", backdropClickHandler);
cancelAddMovieModalButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieModalButton.addEventListener("click", addMovieHandler);
