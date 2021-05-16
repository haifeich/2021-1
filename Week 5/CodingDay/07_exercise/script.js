/*Write a function that reverses a number: given a number, reverse its digits. 

Examples: <br>
Input: 1234 <br>
Output: 4321 <br> <br>
Input: 100000000 <br>
Output: 1 <br> <br>
Input: -321 <br>
Output: -123

Estimated time: 15 minutes <br>
Total points: 15 */

function reverseNumber (num){
   if (num  < 0) {
       num = Math.abs(num);
       num = String(num);
        num = num.split("");
        num = num.reverse();
        num = num.join("");
        num = Number(num);
        num = -num;
   } else {num = String(num);
    num = num.split("");
    num = num.reverse();
    num = num.join("");}
  return num = Number(num);
}
console.log(reverseNumber(1234));
console.log(reverseNumber(100000000));
console.log(reverseNumber(-321));
