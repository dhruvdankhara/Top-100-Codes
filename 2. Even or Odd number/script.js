let n = prompt("enter any number : ");
n = parseInt(n)

if(n !== Number){
    console.log(`${n} is Not A Number`)
    document.write(`${n} is Not A Number`)
}else if(n % 2 === 0){
    console.log(`${n} is Even Number`);
    document.write(`${n} is Even Number`);
}else if(n % 2 !== 0){
    console.log(`${n} is Odd Number`);
    document.write(`${n} is Odd Number`);
}