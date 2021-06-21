//1. Print 1 - 135

// Write a program using JavaScript that will print all the numbers from 1 to 135.


for(let i = 1; i <=135; i++){
    console.log([i]);
}

//Diagram
i  |0|1|2|3|4|5|6|7|8|...|135



//2. Print Odd Numbers 1 - 135

// Write a program using JavaScript that will print all the odd numbers from 1 to 135.
 var i;
for(i = 1; i <= 135; i++){ 
    if((i % 2)!== 0){ 
     console.log([i])
    }
}

i           |1|2|3|4|5|6|7|8...
%2          |1|0|3|0|5|0|7|0....
console.log |1|3|5|7|....

// 3. Sum of Printed Numbers

//Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. 
let sum = 0;

for (let i = 0; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i}; Sum: ${sum}`);
}

i           | 1|2 |3 |4 |5 |6 |7 |8 |9
sum         |1 |3 |6 |10 |15 |21 |28 |36 |45 

// 4. Print the elements of an array

// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

var X = [1,4,2,12];
X.forEach(function(entry) {
  console.log(entry);
});

i |0 |1 |2 |3
x |1 |4 |2 |12
    

// 5. Find Max

// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.


console.log(Math.max(0, -2, -3, -1));

x   | 0|-2 |-3|-1
i   |0 |1 |2 |3
max |0 |0 |0 |0

// 6. Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

let avg = [1,2,3].reduce((a,v,i)=>(a*i+v)/(i+1));

console.log(avg)

number  |1 |2 |3 
i       |0 |1 |2 
avarage |2




// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

var x = [1, -2, 8, -6];
console.log(x)

x           |1 |-2 |8 |-6 
l           |- |0 |- | 0
i           |0 |1 |2 |3 
console.log |1 |0 |8 | 0



// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

var my_array = [7, -1, 2, 0, -2];
for(i=0; i < my_array.length; i++){
    if( my_array[i]< 0){
        my_array[i] = "Turing"
    }
}
console.log(my_array)

x           |7 |-1 |2 |0 | -2
l           |- |"Turing"|- | - |"Turing"
i           |0 |1       |2 |3 | 4
console.log |7 |"Turing"|2 |0 |"Turing"



