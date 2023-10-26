// let arr = [3,5,7,2,5,8,9,5,2,8]
// //duplicate


// //  let newArr =  arr.filter((val,index,arr) => arr.indexOf(val) !== index)
// let unique = []
// let unique2 = []
//  for(let i = 0; i<arr.length; i++){
//     // if (unique.indexOf(arr[i]) == -1){
//     //     unique.push(arr[i])
//     // }

//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }
//     else{
//         unique2.push(arr[i])

//     }
//  }

//  console.log(arr)
//  console.log(unique)
//  console.log(unique2)


// let arr = ['a','b','c','z','d','t','a','t','u','n']

// let count = 0

// // total of duplicate elemement


// for(let i = 0; i< arr.length; i++){
//      for(let j = i+1; j<arr.length; j++){
//       if(arr[i] == arr[j])
//       {
//         count++
//       }
//      }
// }

// console.log(count)


//count 2 occurs how many times

let arr = [3,5,7,2,5,8,9,5,2,2,8]

let count = 0
for(let i =0; i<arr.length;i++){
    if(arr[i] == 2) {
        count++
    }
}

console.log(count)