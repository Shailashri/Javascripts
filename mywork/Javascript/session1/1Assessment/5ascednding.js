function isSortedAscending(array_elements) {
    for (let i = 0; i < array_elements.length - 1; i++) {
        if (array_elements[i] > array_elements[i + 1]) {
            return false;
        }
    }// 
	//let i =4,4<(6-1)=5 
    // i=55 >56 = false  == if(false) it execute the block

	
    return pass;
}

// Example usage:
const inputArray = [2, 24, 3, 4, 55,2];
console.log(isSortedAscending(inputArray)); // Output: true