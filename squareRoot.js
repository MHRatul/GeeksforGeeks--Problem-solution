function findSquareRoot(n) {
    const sqrt = Math.sqrt(n);  // Calculate the square root of n
    if (Number.isInteger(sqrt)) {
        return sqrt;  // If it's an integer, return the exact square root
    } else {
        return Math.floor(sqrt);  // If not a perfect square, return the floor value
    }
}

// Examples
console.log(findSquareRoot(4));  // Output: 2
console.log(findSquareRoot(11)); // Output: 3
console.log(findSquareRoot(1));  // Output: 1
