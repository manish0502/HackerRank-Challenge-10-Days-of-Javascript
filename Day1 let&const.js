function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
     const PI = Math.PI;
     let r = parseFloat(readLine());
     let area = PI*Math.pow(r,2);
     
    
    // Print the area of the circle:
     console.log(area);
    // Print the perimeter of the circle:
     let perimeter = 2*PI*r;
     console.log(perimeter);
     
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}