function medianArray(arr) {
    // Make a sorted copy of the array
    const sortedArr = arr.slice().sort((a, b) => a - b);
    
    // Calculate the middle index
    const midIndex = Math.floor(sortedArr.length / 2);

    // Check if the array length is even
    if (sortedArr.length % 2 === 0) {
        // If even, return the average of the two middle elements
        return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
    } else {
        // If odd, return the middle element
        return sortedArr[midIndex];
    }
}

// Example usage:
var median=[5, 2, 8, 12, 3]
console.log(medianArray(median)); 