function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(20));


