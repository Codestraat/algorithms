const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
 const findThirdlarg = (arr) => {
   let [first, second, third] = [-Infinity, -Infinity, -Infinity];
   for (let element of arr) {
      if (element === first || element === second || element === third) {
         continue; };
         if (element > first) {
            [first, second, third] = [element, first, second]; continue; };
         if (element > second) {
            [second, third] = [element, second]; continue;
          };
         if (element > third) {
            third = element; continue;
      };
   };
   return third !== -Infinity ? third : first;
};
console.log(findThirdlarg(arr));
