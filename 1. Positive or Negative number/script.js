let n = prompt("enter any number : ");
if(n == 0){
    console.log('number is zero');
    document.write('number is zero');
}else if(n > 0){
    console.log(`${n} is Positive Number`);
    document.write(`${n} is Positive Number`);
}else if(n < 0){
    console.log(`${n} is Negative Number`);
    document.write(`${n} is Negative Number`);
}else{
    console.log(`${n} is Not A Number`)
    document.write(`${n} is Not A Number`)
}