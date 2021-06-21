function isPalindrome(letters) {

  var characters  = letters.split(''),
      first_Letter = characters.shift(),
      last_Letter  = characters.pop();

  if (first_Letter !== last_Letter) {
      return false;
  }
  if (characters.length < 2) {
      return true;
  }
  return isPalindrome(characters.join(''));

}

console.log(isPalindrome('depreciatedd'));
console.log(isPalindrome('understanding'));
