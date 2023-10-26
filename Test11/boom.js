function myFunc(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr.includes(9)) {
      return "Boom";
    } else {
    //   return "No number in array";
    }
  }

  return "No number in array";
}

console.log(myFunc([1, 2, 3, 4, 5, 6, 7]));
