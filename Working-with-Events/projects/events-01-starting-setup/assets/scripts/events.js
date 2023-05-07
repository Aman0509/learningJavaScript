const button = document.querySelector('button');

/* Using the `on` property */

// button.onclick() = function() {

// }

// const buttonClickHandler = () => {
// 	alert('Button was clicked!');
// }

const buttonClickHandler = event => {
	console.log(event);
	// event.target.disabled=true;
}

const anotherButtonClickHandler= () => {
  console.log('This was clicked!');
}

// Disadvantage of `on` property method is that you can assign multiple functions to an event
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// Recommended Approach
// button.addEventListener('click', anotherButtonClickHandler);

// Suppose, we are removing event listener after 2 seconds
// setTimeout(() => {
// 	button.removeEventListener('click', anotherButtonClickHandler)
// }, 3000);

// buttons.forEach(btn => {
// 	btn.addEventListener('click', buttonClickHandler);
// });

// buttons.forEach(btn => {
// 	btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
// 	console.log(event);
// });

const form = document.querySelector('form');

// with `preventDefault()`, we will stop the default behavior of submit event
form.addEventListener('submit', event => {
	event.preventDefault();
	console.log(event);
});

const div = document.querySelector('div');

// Bubbling Phase
div.addEventListener('click', event => {
	console.log('CLICKED DIV');
	console.log(event);
});

button.addEventListener('click', event => {
	console.log('CLICKED BUTTON');
	console.log(event);
});

// Capturing Event
// div.addEventListener('click', event => {
// 	console.log('CLICKED DIV');
// 	console.log(event);
// }, true);

// button.addEventListener('click', event => {
// 	console.log('CLICKED BUTTON');
// 	console.log(event);
// });