// // let arr = [1,23,546,76,6,7,88,9];

// // // arr.splice(1,0 ,3)
// // // arr.push(99)
// // // arr.unshift(33,0,3)
// // // arr[0] = 67
// // // arr.pop()
// // // arr.shift()
// // // console.log(arr)

// // let obj = {x: 2, 
// //     y : 5,}

// //     // arr.push(obj)
// //     // arr.splice( 1,0, obj)


// //     let newArr = [...arr,obj]
// //      console.log(newArr)
// //     console.log(arr)


// // let obj = {x: 2, 
// //     y : 5,} 


// //     let arr = Array.isArray(obj)
// //     console.log(arr)


// let arr = [1,23,546,76,6,7,88,9];
// // arr.unshift(666)
// // arr[0] = 66
// //  arr = []
// //  arr.length = 0
// // arr.splice(0,arr.length)
// // arr.splice(0,0 ,55)
// // let Newarr = [4,...arr]
// let Newarr = [4].concat(arr)
//  console.log(arr)
//  console.log(Newarr)


// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

//            let std = students.sort((a,b) => a.x - b.x)

//            console.log(std)
//         console.log(students)
// const students = [{name: 'Sara', age: 29}, {name: 'John', age: 24}, {name: 'Jack', age: 25}];

// To sort the students array based on age
// students.sort((a, b) => a.age - b.age);
// students.sort((a,b) =>a.name.localeCompare(b.name))

// console.log(students);

// const arr = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// let unique = [];

// for(let i = 0; i<arr.length; i++){
//       unique.push(arr[i]['a'])
    
// }

// console.log(unique)

// let newArr = arr.map(item => item['a'])

// console.log(newArr)
// console.log(arr)

// let arr = [1,23,45,6]

// let arr2 = [1,23,45,6,5,6,7,7,8]


// let arr = '   Hello My Name'
// let newArr = arr.split(' ').join('')
// console.log(arr)
// console.log(newArr)


// let str = " "

// if(str.trim() === ''){
//     console.log("emt")
// }

// else{
//     console.log("val")
// }



// console.log(typeof str == 'string')

       


// console.log(JSON.stringify(arr) ===  JSON.stringify(arr2))

// let str = "Hello my name"

// //    let newStr =   str.slice(6,8)
// // let newStr = str.substring(6,8)
// let newStr = str.substr(9,4)

//    console.log(newStr)

// let n = 5 ;
//    let str =     n.toString()
//     //    let newStr =  str.padStart(5, "0")
//                    let newStr = str.padEnd(6,"0")
//        console.log(newStr)


let str = 'HELLO MY NAME IS JITT MALHOTRA'
//    let newArr =    str.replace(/H/g, 'U');
// let newStr = str.replaceAll('H','G')

    // let newStr =       str.slice(0,5)
    // let newStr = str.substring(0,5)
    let newStr = str.substr(0,5)

console.log(newStr)
 


