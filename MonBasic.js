//1. Print 1 - 135

// Write a program using JavaScript that will print all the numbers from 1 to 135.


for(let i = 1; i <=135; i++){
    console.log([i]);
}

//Diagram
// start looping
// i = 1
// i = 2
// i = 3
// i = ........ 135



//2. Print Odd Numbers 1 - 135

// Write a program using JavaScript that will print all the odd numbers from 1 to 135.
 var i;
for(i = 1; i <= 135; i++){ 
    if((i % 2)!== 0){ 
     console.log([i])
    }
}

// The start
// variable i is declared
// loop start
// condition statement is set
// i loop from 1 to 135, 
// i divisible by 2 is not equal to 0
// result prime numbers


// 3. Sum of Printed Numbers

//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
let sum = 0;

for (let i = 0; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i}; Sum: ${sum}`);
}


// 4. Print the elements of an array

// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

var X = [1,4,2,12];
X.forEach(function(entry) {
  console.log(entry);
});

// 5. Find Max

// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.


console.log(Math.max(0, -2, -3, -1));
// 6. Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

let avg = [1,2,3].reduce((a,v,i)=>(a*i+v)/(i+1));

console.log(avg)




// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

var array = [18, -42, 21, 6, -50];
array = array.filter(function(x) { 
    return x > -1; 
});
console.log(array);


// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].


