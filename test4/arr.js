// function myFunction(a, n) {
//   return a[n - 1];
// }
// console.log(myFunction([1, 2, 3, 4, 5], 3));

// function myFunction(a) {
//   return a.length - 1;
// }

// console.log(myFunction([1, 2, 2, 4]));

// function
// myFunction(a)
// {
// let count = 0;
// for(let i = 0; i< a.length; i++){
// if(a[i]< 0) {
// count++;
// }
// }
// return  count;
// }

// console.log(myFunction([1,-2,2,-4]))

// function myFunction(a, b) {
//   let c = [...a, ...b];
//   let d = [...new Set(c)];
//   return d.sort();
// }

// console.log(myFunction([1, 2, 3], [3, 4, 5]));

// [1,2,3,3,4,5,5,7,7] remove duplicate

// function myFunc(arr){

// let unique = [];

// for(let i = 0 ; i<arr.length ; i++){
// if(unique.indexOf(arr[i]) == -1){
//     unique.push(arr[i])

// }
// }
// return unique
// }
// console.log(myFunc([1,2,3,4,5,4,3,2,7]))


// Write a function that takes an array (a) and a number (b) as 
// arguments. Sum up all array elements with a value greater than b. Return the sum


// function MyFunc(arr,b){

//     let sum = 0

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > b){
//             sum = sum + arr[i]
//         }
//     }

//     return sum;
// }
// console.log(MyFunc([1,2,3,4,5,4,3,2,7], 3))


// write a function that takes two numbers (min and max) 
// as arguments. Return an array of numbers in the range min to max

// function myFunc(min,max){
//     let result = [];


//     for(let i=min;i<=max; i++){
//         result.push(i)
//     }

//     return result;
// }



// console.log(myFunc(1, 8))




// // Write a function that takes an array with arbitrary elements and a number as 
// // arguments. Return a new array, the first element should be either the given
// //  number itself. or zero if the number is smaller than 6.
// //  The other elements should be the elements of the original array. 
// //  Try not to mutate the original array


// function myFunc(arr,n) {

//     let newArr = [...arr];

//     if(n>=6){
//         newArr.unshift(n)
//     }
//     else{

//          newArr.unshift(0)
//     }
    
//     return newArr;
// }



// console.log(myFunc([1, 2, 3, 4, 5],4))

// function myFunc(arr,n){
//     let newArr = [];
//   for( let i = n - 1; i<arr.length; i += n){
//        newArr.push(arr[i]);   
//     }
//     return newArr;


// }
// console.log(myFunc([1, 2, 3, 4, 5, 6, 7, 8, 9],3))