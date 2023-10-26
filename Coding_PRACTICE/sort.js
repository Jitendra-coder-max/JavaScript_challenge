// let  arr = [1,2,3,6,4,2,7,0,34,21,11,15]

//  arr.sort((a,b) => a-b)

//  console.log(arr)

// for(let i =0; i<arr.length; i++){
//     for(j=i+1; j<arr.length; j++){
      
//         let temp
//         if( arr[i]>arr[j]){
//                temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j]  = temp
//         }


//     }
// }

// console.log(arr)


// let arr = ["jan","fab", "March", "April","May", "June", "july", "August"]


// arr.sort()


// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr.length; j++){
//         if(arr[i]<arr[j]){
//             temp = arr[i];
//             arr[i]= arr[j];
//             arr[j]  = temp
//         }
//     }
// }

// console.log(arr)

// unique sort

let  arr = [1,2,3,6,4,2,7,0,34,21,11,15,11]

    let uniqueSort = arr.filter((val,index,arr) =>   arr.indexOf(val) == index).sort((a,b) => a-b)

    console.log(uniqueSort)
