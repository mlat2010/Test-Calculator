/**
 * Javascript file for the functionality of the calculator
 * 
 */

//	Global variable declaration
var firstValue, secondValue, conjug = "0", secondPick = false, ;
	
/**
 * On button press, grabs number and recalls it to memory to be used later
 * @param  {string} value the number grabbed from the particular button pressed.
 * @return {null}   returns no number, because it is waiting for either other numbers or a conjugative button press.
 */
function numberButtonPress(value) {
	if (secondPick == false) {
		firstValue = firstValue.concat(value);
	} else {
		secondValue = secondValue.concat(value);
	}
}

/**
 * Takes the value from the conjugative button, and starts a new numerical value.
 * @param  {string} value a string with the conjugative mathematical term to be used: +, -, *, or /
 * @return {null}   returns no value because it waits for the equals to finalize the equation
 */
function conjugButtonPress(value) {
	conjug = value;
	secondPick = true;
}

function equalButtonPress() {
	var result;

	switch (conjug) {
		case "1":
			result = firstValue + secondValue;
			break;
		case "2":
			result = firstValue - secondValue;
			break;
		case "3":
			result = firstValue / secondValue;
			break;
		case "4":
			result = firstValue * secondValue;
			break;
		default:
			break;
	}

	firstValue = 0, secondValue = 0, secondPick = false;
}