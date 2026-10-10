// =============================================
// 2. FUNCTIONS AND LOOPS — TASK: Sum of an array
// =============================================
// Write sumArray(numbers) that returns the sum of all numbers.
// An empty array should return 0.
//
// The checks at the bottom print ✅ when your function is correct.

function sumArray(numbers) {
  // your code here

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}


// ----- Checks (do not edit) -----
check("sumArray([1, 2, 3])", () => sumArray([1, 2, 3]), 6);
check("sumArray([10, 20, 30])", () => sumArray([10, 20, 30]), 60);
check("sumArray([])", () => sumArray([]), 0);
