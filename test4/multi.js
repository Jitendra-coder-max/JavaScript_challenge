let arr = [1,23,34,4,5,6,78]
let len = arr.length;
// for(let i = 0; i<len; i++){
//     console.log(arr[i]*len)
// }


let newarr = arr.map((val) => val*len)

console.log(newarr)