/* Write a function called *getFirstValue*. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

Example: <br>
Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
Output: Wednesday

Estimated time: 15 minutes <br>
Total points: 15  */

function getFirstValue (arr){
 arr.sort();
 return arr[arr.length -1];
}
const a =["Monday","Thursday","Saturday","Wednesday","Tuesday"];
console.log(getFirstValue(a));