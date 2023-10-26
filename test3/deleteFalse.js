// var array = [1, 2, 3, 3, 4, 5, 5, 14,16, 18];

// var includes16Before = array.includes(16);

// var narray = array.filter(function(value) {
//   return value !== 16;
// });

// var includes16After = narray.includes(16);

// var isDeleted = !includes16After && includes16Before;

// console.log(isDeleted); // Output: true



var array = [1, 2, 3, 3, 4, 5, 5, 14,16, 18];

var narr = array.filter((value ,index) => {
    return value !== 16;
 })

 
//  console.log(narr)

var isDeleted= narr.includes(16) ? false : true;
console.log(isDeleted)