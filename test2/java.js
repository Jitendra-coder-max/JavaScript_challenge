// // // const myArray = [20, 4, 15, 'Raju'];

// // // console.log(myArray.indexOf('Raju'));

// // // const array = [20, 4, 15, 'Raju'];
// // // array.unshift('Geeks Help')
// // // console.log(array);



// // // const arr = [1,2,3,4,5]
// // // arr.shift()
// // // console.log(arr)

// // // const arr = [1,2,3,4,5,1]
// // // arr.reverse()
// // // console.log(arr)

// // // const arr1 = [1,2,3,4,5,1];
// // // const arr2  = [ 6,7,8,9]

// // // // const arr3 = arr1.concat(arr2)
// // // const arr3 = [...arr1,...arr2]
// // // console.log(arr3)

// // // let myObject = {
// // //     key1: 1,
// // //     key2: 2,
// // //     key3: 3
// // //     }
// // //     console.log(myObject);


// // // let obj = {
// // //     name: 'Raju',
// // //     page: 'raju_webdev',
// // //     role: 'web developer'
// // //     }
// // //     console.log(obj);


// // // let obj = {
// // //     name: 'Raju',
// // //     page: 'raju_webdev',
// // //     role: 'web developer'
// // //     }

// // //     console.log(obj['page'])
// //     // for(let key in obj){

// //     //     console.log(`${key} : ${obj[key]}`)

// //     // }
    

// //     // let age = 70;
// //     // if(age>18 && age<=70){
// //     //     console.log("You can go to the party ")
// //     // }

// //     // else if(age>70) {
// //     //     console.log("You are too old to attend the party")
// //     // }

// //     // else{
// //     //    console.log("You cannot go to the party")
// //     // }

// //     // const myArrowFunction = ()=>{
// //     //     console.log('This is arrow function in javascript');
// //     //     }
// //     //     // greeting();
// //     //     myArrowFunction()

// //     // const func1 = () => {
// //     //     return 'I am Jittu'
// //     // }

// //     //  const func2 = func1();

// //     //  console.log(func2)


// //     // let documentAll =document.all;
// //     // console.log(documentAll);


// //     let myData = localStorage.setItem('Name','Raju');
// //     // let getData = localStorage

// //     let getData = localStorage.getItem('Name')
// //     console.log(getData)

//    console.log("hII")

//    let names = [ "Jit","Rahul", "Nishad", "Rajiv"];

// //    names.splice("start","count","replace karne vali value")
// //    console.log(names.splice(2,2, "Jitendra", "Guddu"))
// // console.log(names.splice(2,2))

// // It will delete 2 element with strting index 2
// // two element delte karega start with second position and delete 2 element


// //   const newName =  names.splice(3,1)


// // names.splice(2,0, "Raj")
// // names.splice(2(start),2(delete), "Raj"(add))

// // Add raj at index [position Zero]
//    console.log(names)
//    console.log(newName)

var arr = ['a','b','c','d','é','f']
   // arr = [];
   arr.splice(0,arr.length)

   // arr.length = 0
   console.log(arr)