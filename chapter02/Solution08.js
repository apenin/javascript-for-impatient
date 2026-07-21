let digit = 1;
let numeral;

// A switch statement implementing the required action
switch (digit) {
    case 0:
        numeral = 'zero';
        break;
    case 1:
        numeral = 'one';
        break;
    case 2:
        numeral = 'two';
        break;
    case 3:
        numeral = 'three';
        break;
    case 4:
        numeral = 'four';
        break;
    case 5:
        numeral = 'five';
        break;
    case 6:
        numeral = 'six';
        break;
    case 7:
        numeral = 'seven';
        break;
    case 8:
        numeral = 'eight';
        break;
    case 9:
        numeral = 'nine';
        break;                                    
}
console.log(numeral);

// A similar action can easily be accomplished with an array by first storing
// the string representations of the numbers in it and then accessing its elements by index to retrieve them
numeral = undefined;
const numerals = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
console.log(numerals[digit]);

// The reverse conversion can be accomplished using an object whose keys are the string representations of the numbers,
// and whose values are the numbers themselves
numeral = 'eight';
const numeralObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};
digit = numeralObj[numeral];
console.log(digit);