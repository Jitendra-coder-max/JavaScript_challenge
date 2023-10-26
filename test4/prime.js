let num = 101;

let isPrime = true;

if(num <=0 || num== 1){
    console.log("Not prime number")
}

else if(num>=2){

    for(let i = 2 ; i<=num/2; i++){
        if(num%i ===0){
           isPrime = false;
            break;
        }
    }


    if(isPrime){
        console.log(num , "is prime number")
    }

    else{
        console.log(num, "Not prime number")
    }
}
else {
    console.log("The number is not a prime number.");
}
console.log("Hii")