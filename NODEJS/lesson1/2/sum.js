function sum(a,b){
    return a+b;
}
console.log(sum(7,3));

function greetWithSum(text,a,b,sum){
    const result = sum(a,b);

    console.log(text,result);
}

greetWithSum("Hello",100,400,sum);
