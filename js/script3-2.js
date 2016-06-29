
// COMM644:Assignment 3 - Part 2
//

/*
//// ROCK, PAPER, SCISSORS GAME
// 	
// STEP 1
//Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//
var compChoice = Math.random();
var yourChoice = prompt('We are playing Rock, Paper, Scissors.' + '\n' + 'Choose one of the following: (rock, paper, or scissors)  ');
if(yourChoice !== ('rock'|| 'paper' || 'scissors' )){
    window.alert('You entered an incorrect value. Please try again!');
}

if(compChoice < .34) {
    compChoice = 'rock';
} else if (compChoice <.67) {
    compChoice = 'paper';
} else {
    compChoice = 'scissors';
}
window.console.log('Your opponent chose: ' + compChoice);
//need to compare the two choices
var result = function compare(pick1, pick2) {
    if(pick1 === pick2) {
        window.alert('It\'s a tie! Try again. ');
    }
    else if(pick1 === 'rock') {
        if(pick2 === 'scissors'){
            window.console.log('Rock destroys scissors.  You win! ');
        } else {
             window.alert('Paper covers rock. Sorry you lose! ');
        }
    }  
    else if(pick1 === 'paper') {
        if(pick2 === 'rock') {
            window.alert('Paper covers rock. You win! ');
        } else {
             window.alert('Scissors cut paper. Sorry you lose! ');
        }
 
    }
     else if(pick1 === 'scissors') {
        if(pick2 === 'paper') {
            window.alert('Scissors cut paper. You win! ');
        } else {
             window.alert('Rock destroys scissors.  Sorry you lose! ');
        }
 
    }
   
}
 result(yourChoice, compChoice);
*/

/*
// THE BASIC CALCULATOR
//
var yourNum1 = prompt('Enter the first number of the operation you wish to perform: ' );
var yourNum2 = prompt('Enter the second number of the operation you wish to perform: ' );
var yourOp = prompt('Enter the operation you wish to perform (add, subtract, multiply, divide: ');

var convrt1 = Number(yourNum1);
var convrt2 = Number(yourNum2);

//var result;
 function calculate(num1, num2, operation) {
  switch ( yourOp ) {
    case 'add':''
        window.alert('The result of your calculation: ' + yourNum1 + ' + ' + yourNum2 + ' = ' + (convrt1 + convrt2));
        break;
    case 'subtract':
         alert('The result of your calculation: ' + yourNum1 + ' - ' +  yourNum2 + ' = ' + (convrt1 - convrt2));
        break;
    case 'multiply':
        alert('The result of your calculation: ' + yourNum1 + ' * ' +  yourNum2 + ' = ' + (convrt1 * convrt2));
        break;
    case 'divide':
        alert('The result of your calculation: ' + yourNum1 + ' / ' +  yourNum2 + ' = ' + (convrt1 / convrt2));
        break;
    default:
        alert('You have not entered add, subtract, multiply, or divide. Please enter all values if you wish to complete the calculation.');
        
        break;
  }  
    
}
calculate(convrt1, convrt2, yourOp);
*/


/*
// DEATH BY JAVASCRIPT
//
//  STEP 1

function sortMe(someString) {
    var splitStr = (someString.split(''));
         sortStr = splitStr.sort();
return   sortStr.join('');  
  }  
console.log(sortMe('supercalifragilisticexpialidocious')); 
//
*/

/*
//
//  STEP 2
//
window.console.log('The original string is: how now brown cow where goest thou');
//
function capMe(someString) {
//   console.log(someString);
//
//   split string into array
var splitStr = [someString.split(' ')];
//    console.log(splitStr);
//   
// for each index location set value = (strip first letter & change to upper case) + (the remaining part of the word) 
//  originally used substr instead of slice, but saw that substr has been deprecated. So updated to slice.
 for (var x in splitStr) {
 var myWords = splitStr[x];     
};
//   
//  re-assemble string and display in console

console.log(myWords[0].charAt(0).toUpperCase() + myWords[0].slice(1) + ' ' + 
        myWords[1].charAt(0).toUpperCase() + myWords[1].slice(1) + ' ' + 
        myWords[2].charAt(0).toUpperCase() + myWords[2].slice(1) + ' ' + 
        myWords[3].charAt(0).toUpperCase() + myWords[3].slice(1) + ' ' +  
        myWords[4].charAt(0).toUpperCase() + myWords[4].slice(1) + ' ' + 
        myWords[5].charAt(0).toUpperCase() + myWords[5].slice(1) + ' ' +  
        myWords[6].charAt(0).toUpperCase() + myWords[6].slice(1)); 
        }
// call function capMe
capMe('how now brown cow where goest thou');
//
*/

/*
//
// STEP 3
//
// count your vowels
//
function howManyVowels(someString) {
//
//   search string for vowels and output to # of vowels found to the console
//
var result = someString.match(/[aeiou]/g);
//     window.console.log(result);
     window.console.log(result.length);
//
}
// call function howManyVowels
howManyVowels('how now brown cow where goest thou');
//
*/

/*
//
// STEP 4
//
var randomStr = function() {
    var availChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var lengthOfString = 8; // desired length of string
    var randomStr = (''); // start with empty string
    for (var i=0; i < lengthOfString; i++) {
            var x = Math.random(); // generate random number
            var y = availChar.length; // number of available choices
            var z = Math.floor(x * y); // round product down to nearest integer
            randomStr += availChar.charAt(z); // match integer to position in availChar & return
  }
    return randomStr;
}
console.log(randomStr(''))  ;  
//

*/

/*
//
// STEP 5
// Built into "sort" function
// Less than 0: "a" gets sorted to be a lower index than "b"
// Zero: "a" and "b" are considered equal, and no sorting performed.
// Greater than 0:  "b" gets sorted to be a lower index than "a". Then the next pair is assessed.
// Longest value is then found in position[0]
// var countryNames = ['country1', 'country2', 'country3', 'country4', 'country5'];

var countryNames = ['Uruguay', ' Australia', 'New Zealand', 'Germany', 'The Netherlands'];
    countryNames.sort(function(country1, country2) {
//        console.log(country2);     
//        console.log(country1);          
//        console.log(country2.length - country1.length);
//        
        return (country2.length - country1.length);
        });     
             
    console.log('The country with the longest name is :' + countryNames[0]);
//
//
*/