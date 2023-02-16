const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 13;
const STRONG_ATTACK_VALUE = 15;
const HEAL_VALUE = 5;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function getMaxLifeValues(){
	const enteredLifeValue = prompt('Enter the life for you and monster', '100');
	const parsedValue = parseInt(enteredLifeValue);
	if (isNaN(parsedValue) || parsedValue <= 0){
		throw {message: "Invalid User Input, Not a Number"}
	}
	return parsedValue;
}
let chosenMaxLife;
try {
	chosenMaxLife = getMaxLifeValues();
} catch (error) {
	console.log(error);
	chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth){
	let logEntry;
	if (event === LOG_EVENT_PLAYER_ATTACK){
		logEntry = {
			event: event,
			value: value,
			target: 'MONSTER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	} else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK){
		logEntry = {
			event: event,
			value: value,
			target: 'MONSTER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	}  else if (event === LOG_EVENT_MONSTER_ATTACK){
		logEntry = {
			event: event,
			value: value,
			target: 'PLAYER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	}  else if (event === LOG_EVENT_PLAYER_HEAL){
		logEntry = {
			event: event,
			value: value,
			target: 'PLAYER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	}  else if (event === LOG_EVENT_GAME_OVER){
		logEntry = {
			event: event,
			value: value,
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	}
	battleLog.push(logEntry);
}

function reset(){
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound(){
	const initialPlayerHealth = currentPlayerHealth;
	const player_damage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= player_damage;
	writeToLog(
		LOG_EVENT_MONSTER_ATTACK,
		player_damage,
		currentMonsterHealth,
		currentPlayerHealth
	);
	if (currentPlayerHealth <= 0 && hasBonusLife){
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		alert('Bonus Life Saved You!')
		setPlayerHealth(initialPlayerHealth);
	}
	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
		alert("You Won!!!");
		writeToLog(
			LOG_EVENT_GAME_OVER,
			'PLAYER_WON',
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
		alert("Monster Won!!!");
		writeToLog(
			LOG_EVENT_GAME_OVER,
			'MONSTER_WON',
			currentMonsterHealth,
			currentPlayerHealth
		);
	} else if (currentMonsterHealth <= 0 && currentPlayerHealth <=0){
		alert("Draw!!!")
		writeToLog(
			LOG_EVENT_GAME_OVER,
			'DRAW',
			currentMonsterHealth,
			currentPlayerHealth
		);
	}

	if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
		reset();
	}
}

function attackMonster(mode){
	// Ternary Operator can also be used for 'maxDamage' & logEvent
	let maxDamage;
	let logEvent;
	if (mode === MODE_ATTACK){
		maxDamage = ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_ATTACK
	} else if (mode === MODE_STRONG_ATTACK) {
		maxDamage = STRONG_ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	}
	const monster_damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= monster_damage;
	writeToLog(
		logEvent,
		monster_damage,
		currentMonsterHealth,
		currentPlayerHealth
	);
	endRound();
}

function attackHandler() {
	attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
	attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
		healValue = chosenMaxLife - currentPlayerHealth
	} else {
		healValue = HEAL_VALUE
	}
	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue
	writeToLog(
		LOG_EVENT_PLAYER_HEAL,
		healValue,
		currentMonsterHealth,
		currentPlayerHealth
	);
	endRound();
}

function printLogHandler(){
	let i = 1;
	for (const logEntry of battleLog){
		console.log(`${i} ==>`,logEntry);
		i++;
	}
	console.log("-".repeat(50));
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);