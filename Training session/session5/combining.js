function wordBlanks(myNown,myadjective,myverb,myadverb){
    var result = "";
result = "my" + myadjective + myNown + myverb + myadverb;
return result;
}
console.log(wordBlanks("dog", "big", "runs", "fast"));