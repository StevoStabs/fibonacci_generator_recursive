/*
   Method takes an integer input n and prints n digits 
   in fibonacci sequence. 

   Steven Stabile
*/

const fibonacci_generator_recursive = (n, prev, curr) => {
    
    if(n === 0) { return; }
    console.log(prev);
    n--;
    // curr moves to previous and prev+curr becomes new curr
    fibonacci_generator_recursive(n, curr, (prev+curr));
}

// Tests
// Expect 0 1 1 2 3 5 8 13 21 34
fibonacci_generator_recursive(10, 0, 1);

// Expect 0 1 1 2 3
fibonacci_generator_recursive(5, 0, 1);

// Expect 0 1 1 2
fibonacci_generator_recursive(4, 0, 1);