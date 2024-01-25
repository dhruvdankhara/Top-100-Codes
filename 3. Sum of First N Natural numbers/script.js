// let n = 6;
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum += i;
// }
// console.log(`sum of first ${n} numbers is ${sum}.`);

// Using Recursion
let n = 5;
function sumOfN(num){
    if(num === 1){
        return 1;
    }
    return (num + sumOfN(num - 1));
}

console.log(`sum of first ${n} numbers is ${sumOfN(n)}.`)