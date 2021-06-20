const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
 const findThirdMax = (arr) => {
   let [first, second, third] = [-Infinity, -Infinity, -Infinity];
   for (let el of arr) {
      if (el === first || el === second || el === third) {
         continue; };
         if (el > first) {
            [first, second, third] = [el, first, second]; continue; };
         if (el > second) {
            [second, third] = [el, second]; continue;
          };
         if (el > third) {
            third = el; continue;
      };
   };
   return third !== -Infinity ? third : first;
};
console.log(findThirdMax(arr));