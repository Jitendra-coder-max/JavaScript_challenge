// // Replace

// let arr = [1, 2, 3, 4, 5,3,2,5,8];

// // arr[2] = 5
// let position = 2;
// let element = 56

//  let newArr =  [...arr.slice(0,position),element, ...arr.slice(position+1)]

// // console.log(arr)
// console.log(newArr)


// insert the element at specific positon
// let arr = [1, 2, 3, 4, 5,3,2,5,8];

// const position = 3;

// const element = 54


// let newArr = [...arr.slice(0,position) , element, ...arr.slice(position)]

// console.log(newArr)

//delete element at specific position

// let arr = [1, 2, 3, 4, 5,3,2,5,8];

//  let position = 5


//   let newArr = [...arr.slice(0,position), ...arr.slice(position+1)]

//   console.log(newArr)

let arrays = [1, 2, 3, 4, 5,3,2,5,8];
const del = 4

 let newArr =  arrays.filter((item) => item !== del)
 console.log(newArr)