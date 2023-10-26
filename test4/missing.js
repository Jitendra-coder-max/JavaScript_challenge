






let arr = [1,2,3,5,6,7,8,9];

let n = arr.length+1;

let expect = n*(n+1)/2

let miss = arr.reduce((acc,cur) =>  acc + cur , 0)

let actual = expect - miss;

console.log(actual)




