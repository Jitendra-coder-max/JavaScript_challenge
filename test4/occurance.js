// // let str = "abcbdbsdjjkjk";
// // let str1 = 'j';
// // let count = 0;

// // for(i=0;i<=str.length; i++){
// //     if(str[i]=== str1){
// //         count++
// //     }
// // }

// // console.log(count)

// let arr = [1,2,34,56,7,78,8,9,89,35,34]
// let a = 34;
// let count = 0;

// for(let i = 0; i<=arr.length; i++){
//     if(arr[i] === a){
//         count++
//     }
// }

// console.log(count)



let arr = [1,2,34,56,7,78,8,9,89,35,34]

let newArr = arr.filter((element,index, arr) =>  arr.indexOf(element) !== index) 
console.log(newArr)