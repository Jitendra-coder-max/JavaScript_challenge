function outerFunction() {
  const outer = "I am outer function";

  function innerFunction() {
    return outer;
  }
  return innerFunction;
}

    let closureFuc =     outerFunction()
          let result           = closureFuc()
   
          console.log(result)

// console.log(outerFunction());

//  const closureFunction = outerFunction()
//    const result       = closureFunction()
// console.log(result)


// function outside() {
//     let rememberedVar = 7; // In this example, rememberedVar is the lexical environment that the closure 'remembers'
//     function inside() { // This is the function which the closure 'remembers'
//       return rememberedVar
//     }
//     return inside;
//   }
  
//   let remember1 = outside(); 
//   var remember2 = outside(); 
  
//   console.log(remember1()); 
//   remember2(); 