// let str = "Hello my Name";

// function addNew(str){
//   return str.indexOf('New!') === 0 ? str :  `New! ${str}`;

// }

// console.log(addNew(str))

// let str = 'a'

// function myStr(str){

// return str.length>=3      ?       str.slice(0,3)+ str.slice(-3) : str

// }

// console.log(myStr(str))

// function myStr(str){
// let halfStr =    str.slice(0,str.length/2)
// return halfStr;
// }

// console.log(myStr('ANCDEFG'))

// let str1 = "AB";
// let str2 = "CD"

// let str3 = str1.slice(1)+ '' + str2.slice(1)
// // let str3 = str1.concat(str2)

// console.log(str3)
// function myNum(a,b){

//      return (100-a)< (100-b) ? a : b

// }

// console.log(myNum(150,6))

// let arr = [23,34,56,78,44,22]

//         let Newarr = [...arr]

//  let sortArr = arr.sort();

//   let arr1 = JSON.stringify(Newarr) === JSON.stringify(sortArr)
//   console.log(arr)
//   console.log(sortArr)
//   console.log(Newarr)
//   console.log(arr1)

//  console.log(sortArr)

// let arr = [1,2,3,4,6,7,8]

// function myFunc(arr){

//     for(i=0;i<arr.length;i++){
//         if(arr[i]> arr[i+1]){
//             return false
//         }

//     }
//     return true
// }

// let str = 'abcd1ef4'

//         let newStr =  str.replace(/[0-9]/g,'$')

//         console.log(newStr)

// let arr = [1,2,3,4,6,7,8,77];

//      let newArr =   arr.filter((val,index) =>    val%2 === 0 )
//       console.log(Math.max(...newArr))

// console.log(myFunc(arr))

// let num = 23
// let newArr = arr.filter((val) => (val)%2 === 0).length
//         // let newArr =       arr.map((val) =>  val%2 === 0 ? val : null).filter((val) => val != null)

// console.log(newArr)

// let year = 5001;

// function myFunc(yr){
//     if(yr%4 === 0)
//     {
//     return 'Report'
//     }

// }

// console.log(myFunc(year))

// Hexadecimal Color

// let myFunc = () => Math.floor(Math.random() * 16).toString(16);

// let GetColor = () => "#" + Array.from({ length: 6 }).map(myFunc).join("");

// console.log(GetColor());


// document.getElementById('demo').innerHTML = GetColor();


let str = "khdrercv"

//   let newStr =  str.split('').sort().join('')

//    console.log(newStr);

 let newStr = [... new Set(str.split(''))].join('');

// console.log(str)
console.log(newStr)