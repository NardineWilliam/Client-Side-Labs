/*In JavaScript, a closure is formed when a function is defined inside another function,
and the inner function has access to the variables of the outer function, 
even after the outer function has finished executing.*/

/*Lexical Environment: 
The lexical environment is the set of variables and their values that are in scope for a particular piece of code.*/

function counter() {
    let count = 0;

    function increment() 
    {
      count++;
      console.log(count);
    }
    return increment;
  }
  
  // Create a closure by assigning the returned function to a variable
  const myCounter = counter();
  
  // Call the inner function, which still has access to 'count'
  myCounter(); // Output: 1
  myCounter(); // Output: 2
  myCounter(); // Output: 3


/*In this example: Closure: 
When counter is called, it returns the increment function. 
The returned increment function still has access to the count variable, 
even though counter has finished executing. This forms a closure.*/

/*In this example: Lexical Environment: 
The lexical environment of the increment function includes the variable count from its outer function(counter), 
forming the closure.*/ 

/*This example demonstrates how closures can be used to create private variables 
that are accessible only within the scope of the outer function, 
even after the outer function has completed execution. 
The inner function increment "closes over" the variable count, 
allowing it to persist and be modified across multiple calls.*/
