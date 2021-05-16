/** Write a function called *weekNumbersToWords* with given given input array of numbers 1-7 and outputs an array of the weeksdays written out. You must use a switch, not if/else.

Example: <br>
Input: [1,4,6,3,2] <br>
Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

Estimated time: 30 minutes <br>
Total points: 30 */
function weekNumbersTowords (arr){
    let output = [];
    for (i = 0; i<arr.length; i++){
        
        switch(arr[i]){
            case 1:
                output.push('MONDAY');
                break;
            case 2:
                output.push('Tuesday');
                break;
            case 3:
                output.push('Wednesday');
                break;
            case 4:
                output.push('Thursday');
                break;
            case 5:
                output.push('Friday');
                break;
            case 6:
                output.push('Saturday');
                break;
            case 7:
                output.push('Sunday');
                break;
        }
    }
    return output;
}
let a = [3, 4, 1, 5, 2];
console.log(weekNumbersTowords(a));