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


let arr = [ 1,2,4,56,'a','b', 23 ,56,78,90,88]

   let index1 =   arr.indexOf('a');
   let index2 = arr.indexOf('b');
    //   let index2 = arr.indexOf('b');

// [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
console.log(arr)