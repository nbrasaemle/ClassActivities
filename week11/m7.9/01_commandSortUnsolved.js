// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var numbers = process.argv;
var numArr= [];

function sortNum(a, b)
{
    return (a-b);
}


for (let i = 2; i < numbers.length; i++) {
    numArr.push(parseInt(numbers[i]));
}
console.log(numArr);
// var sorted = numArr.sort(function (a, b) { return a - b });

console.log(numArr.sort(sortNum));