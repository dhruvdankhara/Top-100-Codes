// Sum of N natural numbers
let m = 5;
let n = 10;
let sum = 0;
// for(let i = m; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

function rec(sum,m,n){
    if(m > n){
        return sum;
    }
    return m + rec(sum,m + 1,n)
}

console.log(rec(sum,m,n));
