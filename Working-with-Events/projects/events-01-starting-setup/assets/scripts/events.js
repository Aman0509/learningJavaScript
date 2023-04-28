const button = document.querySelector('button');

/* Using the `on` property */

// button.onclick() = function() {

// }

// const buttonClickHandler = () => {
//     alert('Button was clicked!');
// }

// const anotherButtonClickHandler= () => {
//     console.log('This was clicked!');
// }

// Disadvantage of `on` property method is that you can assign multiple functions to an event
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// Recommended Approach
button.addEventListener('click', () => {
    console.log('Clicked!');
});