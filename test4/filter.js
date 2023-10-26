let arr = [1,2,33,4,556,7,7,89,2,1,2,45,34,34,1,2,3]
let newArr= []


arr.forEach((element) =>{ if(element%2 ==0)  {newArr.push(element)}})

 console.log(newArr)

// let newArr = arr.filter((element) =>    element%2 !== 0);

// console.log(newArr)
// let newArr= []
// for(let i in  arr){
//     if(arr[i]%2 === 0){
//        newArr.push(arr[i])
//     }
    
  


// for(let val of arr){
//     if(val%2 !==0){
//         newArr.push(val)
//     }
// }

// console.log(newArr)