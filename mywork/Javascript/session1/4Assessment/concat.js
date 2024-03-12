function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of str) {
        if(vowels.includes(char)){
            count++;
         }
    }
    return count;
}
const str = "Bangalore India";
console.log(countVowels(str));

/*2. Count the Number of Vowels in a Given String
Given a string str, return the number of vowels in the string.
Input: str = "Hello World"
Output: 3
*/