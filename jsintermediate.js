//1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

for( var count = 200; count <= 2700; count ++) {
if (count % 3 == 0 || count % 5 == 0) {
console.log(count);
}

}


// 2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].


//3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]
var str="", x, y, a;
for ( a = 1; a <= 135; a++)
{
    x =  a % 3 == 0;
    y =  a % 5 == 0;
    if(x)
    {
        str+="fizz"
    }
    if (y)
    {
        str+="buzz"
    }
    if (!(x||y))
    {
        str += a;
    }
    str+="\n"
}
console.log(str);


// 4. Fibonacci

// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
function sumFibs(num) {
    let previous = 0;
    let current = 1;
    let sum = 0;
    let next;
  
    for(current; current <= num;){
      next = current + previous;
      previous = current;
  
      if(current % 2 === 0) {
        sum += current;
      }
  
      current = next;
    }
  
    return sum;
  }
  
  sumFibs(1000000);


//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

//0 1 1 2 3 5 8 13 21...

 
// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// 6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice


