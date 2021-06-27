//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.




var m =[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
var largest =0;
var a_fill = [];

for(var x =0; x < m.length; x++){
  largest = m[x][0];
 for(var j =0; j < m[x].length; j++){

   if (m[x][j]>largest){
     largest = m[x][j];
   }
 }
 a_fill.push(largest);
}

console.log(a_fill);
