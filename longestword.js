

function findLongestWord(str) {
  let words = str.split(" ");
 for (let i = 0; i < words.length; i++) {
   if (words[i].length > maxLength) {
 maxLength = words[i].length;
      
}
   
}
 
return maxLength;
}
results = findLongestWord("The quick brown fox overjumped over the lazy dog");
console.log(results)


