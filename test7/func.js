// let count = 0;

// (function printCount(){


//     if(count===0){
//         let count = 1;
//         console.log(count)
//     }

//     console.log(count)
// })();








function createBase(num){
    return function(innerNum){
        console.log(innerNum + num)
    }
}




var addSix =  createBase(6);

addSix(10);

