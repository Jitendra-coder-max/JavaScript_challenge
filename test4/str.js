// function myFunc(a){

//     let str = '';

//     for(let i =0; i<a.length/2;i++)[

//         str = str+ a[i]
//     ]

//     return str;
// }

// console.log(myFunc("Hell"))

// function myFunction(a) {

//     return  a.slice(0,-3);
// }

// console.log(myFunction("abcdefg"));

// function
// myFunction
// (
// a, b
// )
// {

// if(a.includes(b)){
//  return b.concat(a);
// }
// else{
//  return a.concat(b);
// }
// }

// console.log(myFunction('cheese', 'cake'))

// function myFunc(a,b){

//     // return  a.indexOf(b) === -1 ?  a+b :   b+a;

//     // If element not found call it

// //    return a.includes(b)  ?  b+a :   a+b;
// }

// console.log(myFunc('cheese', 'ch'))
// let b = "Hello my name"
// let a = "m"

// console.log(b.split(a).length-1)

// function myFunction(a) {
//   let b = a * 100;
//   return Math.floor(b) / 100;
// }

// console.log(myFunction(2.12397));

function myFunction(a) {
  let b = a.toString();
  return b.split('').map(Number);
}


console.log(myFunction(20))