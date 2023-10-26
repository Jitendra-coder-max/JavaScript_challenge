let arr  = [ 1,2,4,54,6,5,4,3,32,1,1,455,65,78,798,7];


let count = {}

for(let i = 0; i<= arr.length; i++){
    let num = arr[i];

    count[num] = count[num] ? count[num] +1 : 1
}

console.log(count);
