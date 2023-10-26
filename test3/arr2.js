function generateRange(min, max) {
    // if (min > max) {
    //     return [];
    // }

    return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

// Example usage
const minNum = 3;
const maxNum = 8;
const resultArray = generateRange(minNum, maxNum);
console.log(resultArray);  // Output: [3, 4, 5, 6, 7, 8]
