// const array = [10, 20, 30, 40];
// const result = array.map((num) => num / 2).filter((num) => num >= 15);
// console.log(result);

// let counter = 0;
// for (var  i = 1; i <= 10; i++) {
//   counter+= i;
// }
// console.log(counter);
// console.log(i);


// const object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//       console.log(this.a + this.b);
//     },
//   };
//   const func = object1.c;
//   func();

// function greetHello(name) {
//     return `Hello, ${name}!`;
//   }
//   console.log(greetHello("Brian"));



// function fetchData(callback) {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => callback(null, data))
//       .catch(error => callback(error));
//   }
//    fetchData(function (error, data) {
//     if (error) {
//       console.log('Error:', error);
//     } else {
//       console.log('Data:', data);
//     }
//   });



// const person = {
//     firstName: "Helen",
//     lastName: "Ryan",
//     getFullName: function () {
//       return this.firstName + " " + this.lastName;
//     },
//   };
//   console.log(person.getFullName());



// setTimeout(function () {
//     console.log("This will be executed after 3 seconds");
//   }, 3000);
// //   clearTimeout();

// const timerId = setTimeout(function () {
//     console.log("This will be executed after 3 seconds");
//   }, 3000);
  
//   // To cancel the timeout before it executes:
//   clearTimeout(timerId);

// let a = [1,23,4,56,]

// let   arr = Array.isArray(a)

// console.log(arr)

// let a = [1,23,5,465,7676,9]
// let b = 5;

// console.log(a.includes(b))



// console.log()
  
// let a = [1,23,5,465,7676,9];
//  console.log(a.shift())

//    let arr = a.slice(0,1)
// let arr = a.slice(-1)


//    console.log(arr)




// let myColor = ["Red", "Green", "White", "Black"];

//  let newColor = myColor.join(',')

//  console.log(newColor)



// let myColor = ["Red", "Green", "White", "Black"];
// let myColor = [1,23,3,345,3,56,56,7,4,86,545,6,321,]


// let arr = myColor.sort((a,b) => b-a)


// console.log(arr)



// Initialize an empty array
// const myArray = [];

// // Function to add items to the array
// function addItemToArray(item) {
//   myArray.push(item);
// }

// // Function to display the items in the array
// function displayArrayItems() {
//   console.log("Array Items:");
//   for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//   }
// }

// // Example usage:
// addItemToArray("Item 1");
// addItemToArray("Item 2");
// addItemToArray("Item 3");

// displayArrayItems();


// const originalArray = ["apple", "Banana", "banana", "Cherry", "Apple"];
// let arr  = originalArray.toLowerCase();

//  let newarr = arr.filter((element, index, arr) =>  arr.indexOf(element) !== index )

//  console.log(newarr)



// let arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null];


    //  let newArr = arr.filter((val) => Boolean(val))

    //  console.log(newArr)
// console.log(Boolean(arr))



// var filterArr=arr.filter(function(val){
//     return Boolean(val);  
//    });


//    console.log(filterArr)
// console.log(Boolean(arr))
// let newrr = [];
// for(let i = 0; i<=arr.length; i++){
//     if(arr[i] === 'NaN' && arr[i] ==0 && arr[i] == false && arr[i] == "" ){
//         newrr.push(arr[i])
//     }
// }

// console.log(newrr)


let arr = [2, 5, 9, 6];

let newArr = arr.reduce((a,b) =>  a>b ? a :b )
console.log(newArr)
// slice(0,arr.length)

// //  let newArr = arr.every((val) => arr.includes(5))
//  console.log(newArr)