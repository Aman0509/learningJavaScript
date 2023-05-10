const form = document.getElementById('user-input');

function signUpHandler(event) {
	event.preventDefault();

	const userNameInput = document.getElementById('username');
	const enteredUsername = userNameInput.value;

	const passwordInput = document.getElementById('password');
	const enteredPassword = passwordInput.value;

	if (enteredUsername.trim().length === 0) {
		alert('Invalid Input - Username must not be empty!');
		return;
	}

	if (enteredPassword.trim().length <= 5) {
		alert('Invalid Input - Password must be of 6 characters or longer!');
		return;
	}

	const user = {
		userName: enteredUsername,
		password: enteredPassword
	};

	console.log(`Hello ${user.userName}`);
}

form.addEventListener('submit', signUpHandler);