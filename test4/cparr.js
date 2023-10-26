// let arr = [2,3,4,5,7]
//   arr.length = 2

// console.log(arr)

// function myFunc(arr){

//     let unique = [];

    // for (let i = 0; i<arr.length; i++){

    //     if(unique.indexOf(arr[i]) === -1){
    //     unique.push(arr[i])
    //     }
    // }

    // for(let i in arr){
    //     if(unique.indexOf(arr[i]) === -1) {
            
    //         unique.push(arr[i])
    //     }
    // }


    // for (let val of arr) {
    //     if(unique.indexOf(val) === -1){
    //         unique.push(val)
    //     }
    // }


//     arr.forEach(element => {
//         if(unique.indexOf(element) === -1){
//             unique.push(element)
//         } 
//     });
//  return unique;
// }
// console.log(myFunc([1,4,5,6,7,8,1,2,3,4]))

// let arr = [1,4,5,6,7,8,1,2,3,4.10];

// let arr1 = [...new Set(arr)]

// console.log(arr1)


// Comma Operator
// let a = 1, b = 2, c = 3;
// let result = (a++, b++, c++);
// console.log(result); // Output: 3
// console.log(a);      // Output: 2
// console.log(b);      // Output: 3
// console.log(c);      
// console.log(result);

// let a = 5; let b =6;
// let temp;
// // [x,y]= [y,x];

// temp = x  //5
// x = y // 6
// y = temp //5


//  a = a+b // 11
//  b = a - b // 5
//  a = a - b // 6
// console.log(a,b)


// let arr = [1,2,3,4,5,6,7,];

// let ob = {...arr}

// let arr1 =   [...ob]


// console.log(ob)


let array = [1,2,3,4,5,6,7,7,69,110,1,4];

let neArr = array.filter((val,index,arr) => {

   return arr.indexOf(val) !== index;
})

console.log(neArr)









// max secondmax
// let arr = [12,3,34,45,5,6,7,88,8,9,];


// let max = arr.reduce((acc,cur) => acc>cur ? acc : cur)

// let endMax = arr.reduce((acc,cur) => max>cur && cur>acc ? cur : acc  )

// console.log(max)
// console.log(endMax)


// min second min

// let min = arr.reduce((acc,cur) => acc<cur ? acc : cur)

// let endmin = arr.reduce((acc,cur) => min<cur && cur<acc ? cur : acc  )

// console.log(min)
// console.log(endmin)



