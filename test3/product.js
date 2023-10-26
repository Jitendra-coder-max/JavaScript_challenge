function maxProductOfThree(arr) {
    if (arr.length < 3) {
      throw new Error("Array should have at least three elements");
    }
  
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  console.log(arr)
    // Calculate two possible products
    const product1 = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    const product2 = arr[0] * arr[1] * arr[arr.length - 1];
  console.log(product1)
  console.log(product2)
    // Return the maximum of the two products
    return Math.max(product1, product2);
  }
  
  const arr = [1, 2, 3, 4, 5,0, -3,-6, -1];
  const result = maxProductOfThree(arr);
//   console.log(result); // Output will be 60 (3 * 4 * 5)
  