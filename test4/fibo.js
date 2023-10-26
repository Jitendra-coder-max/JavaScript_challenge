let n = 15;

let a = 0;
let b = 1;

for(i = 0; i<=n; i++){

    temp = a+b;
    a =b;
    b = temp;
    console.log(temp)
}