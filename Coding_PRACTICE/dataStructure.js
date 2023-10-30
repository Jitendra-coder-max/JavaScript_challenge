// // // let person ={
// // //     name : "jIT",
// // //     lname:"Guru"
// // // }

// // // let person2 ={
// // //     namel : "jIT",
// // //     lnamel:"Guru"
// // // }

// // // const newSet1 = new WeakSet()
    


// // // newSet1.add(person)
// // // newSet1.add(person2)

// // // // console.log(newSet1.has(person))
// // // // newSet1.delete(person)

// // // console.log(newSet1)



// // // let str = ['a','b','c','e','t']


// // // for(let i = 0; i<str.length; i++){

// // //     str[i] = str[i].replace('c','z')

// // // }

// // // console.log(str)

// // //replace c with z
// // // let newStr = []
// // // for(let i = 0; i<str.length; i++){
// // //     if(str[i] == 'c'){
// // //         // str[i].replace('c','z')
// // //         newStr.push('z')
// // //     }
// // //     else{
// // //         newStr.push(str[i])

        
// // //     }
// // // }

// // // console.log(newStr)



// // let str = 'Hello world name is universe'

// // //make array

// // //  let newStr  = str.split(' ')

// // let sentense = []

// // let word = ''

// // for(let i = 0; i<str.length; i++){
// //     if(str[i] != ' '){
// //      word = word + str[i]
// //     }

// //     else{
// //         sentense.push(word)
// //         word = ''
// //     }
// // }


// // if (word !== '') {
// //     sentense.push(word);
// //   }

// // //   console.log(newStr)
// // console.log(sentense)


// // let person = {
// //     name: "Jadu",
// //     lname: "alien"
// // }

// // let weakSet1 = new WeakMap()
// // weakSet1.set(person,30)
// // console.log(weakSet1)

// // let person = {
// //     name: "Jadu",
// //     lname: "alien"
// // }


// // const {name,lname} = person
// // console.log(name)
// // console.log(lname)


// // How can we generate a random alphanumeric string in JavaScript?
// //  let str1 = 'ABCDEfghijklmnop'
// // let length = 7
// // let result = ''

// // for(i = 0;i<=length; i++){

// //        let index =  Math.floor(Math.random()*str1.length)
// //        result += str1.substring(index,index+1)
// // }

// // console.log(result)



// //   console.log(str)



// // function message(){

// //     console.log("Hello")
// // }

// // setInterval(message, 5000)


// // const myFunc =() =>{
// // console.log("helloo")
// // }
// // setTimeout(myFunc, 5000)

// // let arr = [1,2,3,4,5,6,7,8]


// // const person = '{"name": "John", "age": 30, "city": "New York"}';

// // let person1 = JSON.parse(person)

// // console.log(person1.name)

// // let  str = 'ABCDERFGR'
// // let str1 = 'AB'

// // //    let newStr =    str.includes('AB')


// // if(str.indexOf(str1) !== -1){
// //     console.log("found")
// // }

// // else{
// //     console.log("Not found")
// // }
// //    console.log(newStr)



//     //   let date = new Date()

//     //   console.log(date.getDate())

//     // let str = '        ABCDEFG GG ERR DFFDGT KY     ';

// //    let result= str.startsWith('Z')

// //    let result = str.trim()
// // let result = str.replace(/\s/g, '')
// // let result = str.split(' ').join('');

//     // console.log(result)


//     // function myFunc(x,y,z){


//     // }

//     // console.log(myFunc.length)

//     // Implement a method which generates 5 random numbers?
//     // for(let i =0; i<5; i++){

//     // let n =   Math.floor(Math.random()*(67-41)+ 41)
//     //                                     // (max-min)+min 

//     // console.log(n)
//     // }


//     // Implement a method which 
//     // generates random numbers between 41 and 67 


//     let arr = [ 1,2,4,56,'a','b', 23 ,56,78,90,88]

//     //swap and swap y

//       let index1 =  arr.indexOf('a')
//       let index2 = arr.indexOf('b')
//     //  [ arr[index1], arr[index2]] = [ arr[index2], arr[index1]]
//     let arr = [1, 2, 4, 56, 'a', 'b', 23, 56, 78, 90, 88];

//     // Find the indices of 'a' and 'b'
//     let index1 = arr.indexOf('a');
//     let index2 = arr.indexOf('b');
    
//     // Swap the values at indices index1 and index2
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    
//     console.log(arr);
    
//     // console.log(x)

//       console.log(arr)

//     // let arr = [1, 2, 4, 56, 'a', 'b', 23, 56, 78, 90, 88];

// // Find the indices of 'a' and 'b'
// // let index1 = arr.indexOf('a');
// // let index2 = arr.indexOf('b');

// // // Swap the values at indices index1 and index2
// // [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

// // console.log(arr);


//     // let arr = [1, 2, 4, 56, 'a', 'b', 23, 56, 78, 90, 88];

// // Find the indices of 'a' and 'b'
// // let index1 = arr.indexOf('a');
// // let index2 = arr.indexOf('b');

// // Check if both 'a' and 'b' are in the array
// // if (indexOfA !== -1 && indexOfB !== -1) {
//   // Swap the values at the indices
// //   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// // }

// // console.log(arr);


// let arr = [ 1,2,4,56,'a','b', 23 ,56,78,90,88]

//    let index1 =   arr.indexOf('a');
//    let index2 = arr.indexOf('b');
//     //   let index2 = arr.indexOf('b');

// // [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
// [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// console.log(arr)





// var pattern = pattern;

// var text = "This is a sample text with the word pattern in it.";
// console.log(text.match("sample"));

// console.log(matches)

// const _ = require('lodash')


// let person = {
//     id:1,
//     name: "Jit",
//     lname: "Nishad"
    
// }

// Object.seal(person)

// person.age = 56;
// console.log(person)

//  console.log(Object.isSealed(person))





// let person2 ={
    
// }

// const {id ,name, lname} = person

// person2 = {id,name,lname}
// person2.name ="Ram"

// console.log(person2)
// console.log(person)

//  console.log(person.name=== person2.name)
// console.log(_.isEqual(person,person2))



//  Object.freeze(person)

//    let newOb = Object.isFrozen(person)

//    console.log(newOb)




// const myObject = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };

//    let value = Object.values(myObject)
// console.log(value)

//  let myObj = Object.entries(myObject)

//  for(let [key,val]  of myObj){
//     console.log(`${key} == ${val}`)
//  }

//  console.log(myObj)
//  Object.keys(myObject).forEach(key  => {
//     console.log(`${key}  and  ${myObject[key]}`)
// })

// for (let i in myObject){

//     console.log(` key is ${i} and value ${myObject[i]}`)
// }

// let URL = "https://www.example.com/search?q=query with spaces&lang=JavaScript"

//         // let encodeURL = encodeURIComponent(URL)
//         let encodeURL = encodeURI(URL)

//         console.log(encodeURL)




// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// }


// const extensibleObject = { a: 1, b: 2 };

// //    Object.preventExtension(extensibleObject)
// Object.freeze(extensibleObject)

//                  let extent = Object.isExtensible(extensibleObject)

//                  console.log(extent)



// let str = "Hello world"

//       let vowel =         str.match(/[aeiouAIOUE]/g)

//       console.log(vowel)


// let person = {
//     name: "Jit",
//    
// }

// const { name , age = 56 } = person

// console.log(age)



// let numbers = [1,2]
// const [ first, sec = 66, third = 56] = numbers

// console.log(sec)



//  let arr = [3,4,3,23,56,78,9,3,'a','b', 45,67,34,23];

//  let str1 = arr.indexOf('a');
//  let str2 = arr.indexOf('b');

//  [arr[str1],arr[str2]] = [arr[str2], arr[str1]];


// console.log(arr)


// let str = 'myWeb'

// let n = 3 

//   let  repeatStr = ''


//   for(let i =0; i<=n; i++){
//     repeatStr +=  ' '+ str
//   }

//   console.log(repeatStr)

// const array = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];

// const obj = Object.fromEntries(array)

// console.log(obj);



// function myFunc( arr1){

// console.log(isNaN(arr1))
        
// }

// myFunc("")
    // let newStr =  str.repeat(3)

    // console.log(newStr)






// let car = new Car('Toyota', 'Carry')

// console.log(car.make)
// console.log(car.model)






// const length = 5; // Specify the length of the array
// const staticValue = 42; // The value to fill the array with

// const filledArray = Array.from({ length}, () => 42);

// console.log(filledArray);
// Output: [42, 42, 42, 42, 42]

// a

// let arrays = [12,23,34,56,78,90]


//   let newArr = arrays.some((arr) =>  arr<=12)

//   console.log(newArr)



// let day = new Date()
// let num = 15;
//     let newData = day.getTime()+ num*60*1000
//     let newDate = new Date(newData)
// console.log(newData)
//     console.log(day)
//     console.log(newDate)




// Create a Date object for the initial date and time
// const initialDate = new Date();

// // Calculate the timestamp for 15 minutes later
// const fifteenMinutesLaterTimestamp = initialDate.getTime() + 15 * 60 * 1000;

// // Create a new Date object using the updated timestamp
// const newDate = new Date(fifteenMinutesLaterTimestamp);

// console.log("Initial Date:", initialDate);
// console.log("New Date (15 minutes later):", newDate);

      
                //    localStorage.setItem("nam", "Jit")
                // localStorage.setItem("userName", "John");

        //    let myName =  localStorage.getItem("nam")
        // const userName = localStorage.getItem("userName");

        // console.log(userName)

        //    console.log(myName)
           
        
        
        // console.log( n)
let n = 4
let count = 0

        for(let i = 2; i<=n/2; i++){

            if(n%i ==0){
                 count ++
            }
               
           

            
        }

          if( n !== 1 && count ==0){
            console.log("Prime")
          }
          else{
            console.log("Not prime")
          }
