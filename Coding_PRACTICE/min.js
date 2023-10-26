let  arr = [1,2,3,6,4,2,7,34,21,11,15,11]

// console.log(Math.min(...arr))
// let min = arr[0]

// for(let i =1; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }

// }

 let min = arr.reduce((acc,cur) => {return  acc< cur ? acc: cur })
console.log(min)