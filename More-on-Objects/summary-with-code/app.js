function objectsRecap() {
	const personOne = {
			name: "John",
			age: 30,
			address: {
				street: "123 Main St",
				city: "Anytown",
				state: "CA",
				zip: "12345"
			}
		};
	console.log(personOne);

	const personTwo = new Object();
	personTwo.name = "John";
	personTwo.age = 30;
	personTwo.address = {
		street: "123 Main St",
		city: "Anytown",
		state: "CA",
		zip: "12345"
	};
	console.log(personTwo);

	const myObj = {
		1: 'one',
		2.5: 'two',
		3: 'three'
	};
	console.log(myObj['1']); // outputs 'one'
	console.log(myObj[2.5]); // outputs 'two'
	console.log(myObj[3]);   // outputs 'three'
}

function spreadOperator() {
	const person = {
		name: 'John',
		age: 30,
		address: {
		  street: '123 Main St',
		  city: 'New York',
		  state: 'NY'
		}
	  };
	  
	const newPerson = {
		...person,
		age: 31,
		address: {
			...person.address,
			city: 'Los Angeles'
		}
	};
	  
	console.log(newPerson);

	const p = {
		name: "John",
		age: 39,
		hobbies: [
		  "singing",
		  "cooking",
		  "traveling"
		]
	  }
	  
	const newP = {...p, age:30};
	console.log(newP); // {name: 'John', age: 30, hobbies: Array(3)}

	const newP1 = {...p, hobbies: [...p.hobbies]};
	console.log(newP1); // {name: 'John', age: 39, hobbies: Array(3)}
}

// objectsRecap();
spreadOperator();