arr = [1,2,3,3,4,5,5,6,4]


//  var narr = arr.filter((value,index) =>{

//     return arr.indexOf(value) === index
//  })

//  console.log(narr)


// var array = [1, 2, 3, 3, 4, 5, 5];

// var uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

// console.log(uniqueArray); // Output: [1, 2]



var array = [1, 2, 3, 3, 4, 5, 5];

var uniqueArray = [];

array.forEach(function(element) {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }
});

console.log(uniqueArray); // Output: [1, 2]

