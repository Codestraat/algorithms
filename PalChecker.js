function isPalindrome(lett) {

  var characters  = lett.split(''),
      first_Lett = chara.shift(),
      last_Lett  = chara.pop();

  if (first_Lett !== last_Lett) {
      return false;
  }
  if (chara.length < 2) {
      return true;
  }
  return isPalindrome(chara.join(''));

}

console.log(isPalindrome('depreciatedd'));
console.log(isPalindrome('understanding'));
