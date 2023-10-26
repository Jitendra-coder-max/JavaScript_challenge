// function myFunc(arr,b)

let myFunc = (arr,b) =>
{

    return arr.filter((num) => num >b).reduce((sum,num) => num+sum, 0)
    
}

// console.log(myFunc([3, 7, 2, 9, 4],4));
// console.log(myFunc([3, 7, 2, 9, 4], 4)); 
 console.log(myFunc([3, 7, 2, 9, 4], 4))

