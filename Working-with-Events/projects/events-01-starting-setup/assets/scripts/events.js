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
	event.stopPropagation();
	// event.stopImmediatePropagation();
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

/*
Event Delegation

Scenario - We have list of items and we want to change its color to red when clicked and if it is already red then revert.

*/

// Approach 1 - Brute Force (Demerits - Can get cumbersome and can impact performance)

// const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
// 	listItem.addEventListener('click', event => {
// 		event.target.classList.toggle('highlight');
// 	})
// });

// Approach 2 - Event Delegation

const list = document.querySelector('ul');
// list.addEventListener('click', event => {
// 	event.target.classList.toggle('highlight');
// });

// Event delegation will work unexpectedly when in our example, list items are nested

list.addEventListener('click', function(event) {
 event.target.closest('li').classList.toggle('highlight');
 // Triggering button programmatically
 button.click();
 console.log(this);
});