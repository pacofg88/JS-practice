// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
Given an array of temperatures, the thermometer displays a string with these temperatures.

Sample: [17,21, 23] will print 
"... 17C in 1 days ... 21C in 2 days ... 23C in 3 days..."

Create a function printForecast which takes in an array arr and logs a string like the above to the console.

TEST DATA 17, 21, 23
TEST DATA 12, 5, -5, 0, 4
*/

const printForecast = function (arr) {
  let tmpString = '...';
  for (let i = 0; i < arr.length; i++) {
    //tmpString += String(arr[i]);
    tmpString += ` ${String(arr[i])}C in ${i + 1} days ...`;
  }
  return tmpString;
};

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];
console.log(printForecast(test1));
console.log(printForecast(test2));
