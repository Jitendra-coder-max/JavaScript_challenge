// let a = [1,2,3,4,56,78,3,2,3]
// let b = [1,3,4,6,5,62,3,56,5,7]

//  let c = a.filter((element) => b.includes(element))
//  console.log(c)
// console.log(...new Set(c))


let a = [1,2,3,4,56,78,3,2,3]
let b = [1,3,4,6,5,62,3,56,5,7]

let c = [...a,...b];

console.log(...new Set(c))