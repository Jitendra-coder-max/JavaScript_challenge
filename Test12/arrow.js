// Function declaration (hoisted)

traditionalFunction();
  
function traditionalFunction() {
    console.log("This is a traditional function.");
  }
  
  // Calling the function before its declaration works
//   traditionalFunction();
  
  // Arrow function (not hoisted)
  const arrowFunction = () => {
    console.log("This is an arrow function.");
  };
  
  // Attempting to call the arrow function before its declaration will result in an error
  arrowFunction(); // Error: Cannot access 'arrowFunction' before initialization
  