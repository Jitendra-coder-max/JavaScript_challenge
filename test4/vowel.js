

// const string = 'A'
//  let str = string.toLowerCase()
// if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
// console.log(str, "is vowel")
// }

// else {
//     console.log( str, " is not vowel")
// }

// let num = 12321
// let str = num.toString()
//   let strnew =   str.split('').reverse().join('');

//   if(strnew === str ){

//     console.log("Palindrome")
//   }

//   else {
//     console.log("Not palindrome")
//   }

//   console.log(strnew)



// let a = 5;
// let b = 6

//  a = a+b; // 11
//  b = a - b  // 5
//  a  = a-b // 6

//  console.log(a, b)

let a = [1,2,34,5,6,7];
let b = [12,3,6,4,5,6,576,6]

 let mergerarr = [...a, ...b];

// let mergerarr = a.concat(b)


let sor = mergerarr.sort((a,b) => a-b)


 console.log(mergerarr)