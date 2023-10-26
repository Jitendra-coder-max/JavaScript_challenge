
// const arr = [1,2,3,4,57,0,6]

//  const arrF= arr.reduce((num1,num2) =>{
//     return num1+num2
// })
// console.log(arrF)

function reverseString(str) {
    return str.split('').
  reduce(function (reversed, character) {
      return character + reversed;
    }, '');
  }
  
  var reversed = reverseString("Hello");
  console.log(reversed); // Output: "!dlroW ,olleH"
  