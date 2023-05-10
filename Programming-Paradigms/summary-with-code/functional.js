const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validator(value, flag, validatorValue){
	if (flag === REQUIRED) {
		return value.trim().length > 0;	
	}

	if (flag === MIN_LENGTH) {
		return value.trim().length > validatorValue;
	}
}

function createUser(userName, userPassword) {
	if (!validator(userName, REQUIRED) || !validator(userPassword, MIN_LENGTH, 5)) {
		/* Here `alert` is not used to show the error message because using it make changes in DOM (a side-effect) and eventually this function becomes impure. Always remember, functional programming paradigms focusing on using Pure functions. However, sometimes, you can't avoid it and you have to consider side-effects of function. */
		throw new Error(
			'Invalid Input - username or password is wrong (password should have at least six characters)'
		);
	}
	return {
		userName: userName,
		password: userPassword
	}
}

function getUserInput(inputElementId) {
	return document.getElementById(inputElementId).value;
}

function greetUser(user){
	console.log(`Hello ${user.userName}!`)
}

function signUpHandler(event){
	event.preventDefault();

	const enteredUsername = getUserInput('username');
	const enteredPassword = getUserInput('password');
	try {
		const newUser = createUser(enteredUsername, enteredPassword);
		console.log(newUser);
		greetUser(newUser);
	} catch(err) {
		alert(err.message);
	}
	
}

function connectForm(formId, formSubmitHandler) {
	const form = document.getElementById(formId);
	form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signUpHandler);