/* // 1- Write a program that allow to user enter number then printit

let input = prompt('Input:');
console.log(input);
*/

/* // 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

const input = prompt('Input:');
input % 3 === 0 && input % 4 === 0 ? console.log('Yes') : console.log('No');
*/

/* // 3- Write a program that allows the user to insert 2 integers then print the max

const input1 = parseInt(prompt('Input1: '));
const input2 = parseInt(prompt('Input2: '));
input1 > input2 ? console.log(input1) : console.log(input2);
*/

/* // 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

const input = parseInt(prompt('Input: '));
input > 0 ? console.log('Positive') : console.log('Negative');
*/

/* // 5- Write a program that take 3 integers from user then print the max element and the min element.

const input1 = parseInt(prompt('Input1: '));
const input2 = parseInt(prompt('Input2: '));
const input3 = parseInt(prompt('Input3: '));

const numArr = [input1, input2, input3];
let max = input1;
let min = input1;
for (let i = 0; i < numArr.length; i++) {
  if (max < numArr[i]) max = numArr[i];
  if (min > numArr[i]) min = numArr[i];
}

console.log(`max element = ${max}`);
console.log(`min element = ${min}`);
*/

/* // 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
const input = parseInt(prompt('Input: '));
input % 2 === 0 ? console.log('Even') : console.log('Odd');
*/

/* // (num 7 Skipped on the pdf) 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

const char = prompt('Enter One Character: ');
const vowels = 'aeiouAEIOU';

let charType = 'Consonant';
for (let i = 0; i < vowels.length; i++)
if (char === vowels[i]) charType = 'Vowel';
console.log(charType);
*/

/* // 9- Write a program that allows user to insert integer then print all numbers between 1 to

const n = parseInt(prompt('Enter a nubmer: '));
for (let i = 1; i < n + 1; i++) console.log(i);
*/

/* // 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

const n = parseInt(prompt('Enter a nubmer: '));
for (let i = 1; i < 12 + 1; i++) console.log(n * i);
*/

/* // 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
const n = parseInt(prompt('Enter a nubmer: '));
for (let i = 2; i < n + 1; i++) i % 2 === 0 ? console.log(i) : null;
*/

/* // 12- Write a program that take two integers then print the power

let n = parseInt(prompt('number: '));
const p = parseInt(prompt('power: '));
let result = 1;

for (let i = 0; i < p; i++) result = result * n;
console.log(result);
*/

/* // (12 is Repeated on the pdf) 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

const subject1 = parseInt(prompt('Subject1 Score: '));
const subject2 = parseInt(prompt('Subject2 Score: '));
const subject3 = parseInt(prompt('Subject3 Score: '));
const subject4 = parseInt(prompt('Subject4 Score: '));
const subject5 = parseInt(prompt('Subject5 Score: '));

console.log(
  `Average Marks = ${
    (subject1 + subject2 + subject3 + subject4 + subject5) / 5
  }`
  );
  
  console.log(
    `Percentage Marks = ${
      ((subject1 + subject2 + subject3 + subject4 + subject5) / 500) * 100
    }%`
    );
    
*/

/* // 13-Write a program to input month number and print number of days in that month.

const monthIndex = parseInt(prompt('Enter Month Number: ')) - 1;
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(`Days in Month: ${daysInMonth[monthIndex]}`);
*/

/* // 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

const subject1 = parseInt(prompt('Physics Score: '));
const subject2 = parseInt(prompt('Chemistry Score: '));
const subject3 = parseInt(prompt('Biology Score: '));
const subject4 = parseInt(prompt('Mathematics Score: '));
const subject5 = parseInt(prompt('Computer Score: '));

const percentage =
  ((subject1 + subject2 + subject3 + subject4 + subject5) / 500) * 100;

if (percentage >= 90) {
  console.log(`Percentage ${percentage}%: Grade A`);
} else if (percentage >= 80) {
  console.log(`Percentage ${percentage}%: Grade B`);
} else if (percentage >= 70) {
  console.log(`Percentage ${percentage}%: Grade C`);
} else if (percentage >= 60) {
  console.log(`Percentage ${percentage}%: Grade D`);
} else if (percentage >= 40) {
  console.log(`Percentage ${percentage}%: Grade E`);
} else {
  console.log(`Percentage ${percentage}%: Grade F`);
}
*/

// USING SWITCH CASE .

/*// 15- Write a program to print total number of days in month

const monthIndex = parseInt(prompt('Month Number: '));

//  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

switch (monthIndex) {
  case 1:
    console.log(31);
    break;
  case 2:
    console.log(28);
    break;
  case 3:
    console.log(31);
    break;
  case 4:
    console.log(30);
    break;
  case 5:
    console.log(31);
    break;
  case 6:
    console.log(30);
    break;
  case 7:
    console.log(31);
    break;
  case 8:
    console.log(31);
    break;
  case 9:
    console.log(30);
    break;
  case 10:
    console.log(31);
    break;
  case 11:
    console.log(30);
    break;
  case 12:
    console.log(31);
    break;
  default:
    console.log('Invalid month number.');
    break;
}
*/

/* // 16- Write a program to check whether an alphabet is vowel or consonant

// aeiouAEIOU

const char = prompt('Enter One Character: ');

switch (char.toLowerCase()) {
  case 'a':
    console.log('Vowel');
    break;
  case 'e':
    console.log('Vowel');
    break;
  case 'i':
    console.log('Vowel');
    break;
  case 'o':
    console.log('Vowel');
    break;
  case 'u':
    console.log('Vowel');
    break;
  case 'A':
    console.log('Vowel');
    break;
  case 'E':
    console.log('Vowel');
    break;
  case 'I':
    console.log('Vowel');
    break;
  case 'O':
    console.log('Vowel');
    break;
  case 'U':
    console.log('Vowel');
    break;
  default:
    console.log('Consonant');
    break;
}
 */

/* // 17- Write a program to find maximum between two numbers
const n1 = parseInt(prompt('Number 1:'));
const n2 = parseInt(prompt('Number 2:'));

switch (true) {
  case n1 > n2:
    console.log(n1);
    break;
  case n2 > n1:
    console.log(n2);
    break;
  default:
    console.log('Number 1 = Number 2');
    break;
}
*/

/* // 18- Write a program to check whether a number is even or odd

const n = parseInt(prompt('Number :'));

switch (true) {
  case n % 2 === 0:
    console.log('Even');
    break;
  case n % 2 !== 0:
    console.log('Odd');
    break;
  default:
    console.log('Not a Number');
    break;
}
*/

/* // 19- Write a program to check whether a number is positive or negative or zero

const number = parseInt(prompt('Number: '));

switch (true) {
  case number > 0:
    console.log('Positive');
    break;
  case number < 0:
    console.log('Negative');
    break;
  default:
    console.log('Zero');
    break;
}
*/

/* // 20- Write a program to create Simple Calculator

const n1 = parseInt(prompt('Number 1:'));
const operator = prompt('Operator: ');
const n2 = parseInt(prompt('Number 2:'));

switch (true) {
  case operator === '+':
    console.log(`${n1} ${operator} ${n2} = ${n1 + n2}`);
    break;
  case operator === '-':
    console.log(`${n1} ${operator} ${n2} = ${n1 - n2}`);
    break;
  case operator === '*':
    console.log(`${n1} ${operator} ${n2} = ${n1 * n2}`);
    break;
  case operator === '/':
    if (n2 !== 0) {
      console.log(`${n1} ${operator} ${n2} = ${n1 / n2}`);
    } else {
      console.log('Error: Division by zero');
    }
    break;
  default:
    console.log('Invalid operator');
    break;
}
*/
