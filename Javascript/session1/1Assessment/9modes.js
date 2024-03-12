function findmode(arr){
var freqObj = {};
var maxFreq = 0;
var modes = [];
arr.forEach(num => {
    freqObj[num] = (freqObj[num] || 0) +1 ;
    if (freqObj[num] > maxFreq){
        maxFreq = freqObj[num]
    }
});
for(var num in freqObj){
    if (freqObj[num] === maxFreq){
    modes.push(parseInt(num));
}
}
return modes.length === 1 ? modes[0] : modes;
}
var arr = [5, 2, 8, 12, 3, 8];
console.log("Mode(s) of the array:", findmode(arr));
