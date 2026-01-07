let prompt = require('prompt-sync') ();
// FOR LOOP

// let n = Number(prompt("Enter a Number "));

// switch(day ) {
//     case 1: {
//         console.log("Monday");
//         break
//     }
//     case 1: {
//         console.log("Tuesday");
//         break
//     }
//     case 1: {
//         console.log("Wednesday");
//         break
//     }
//     case 1: {
//         console.log("Tursday");
//         break
//     }
// default : console.log("Kuch bhi nhi")
// }

// Q. Check consonant and vowel using switch

// let s = Number(prompt("Enter a string"))

// let consonant = 0, vowel = 0;

// for (let i= 0; i<s.length; i++) {
//     let ch = s.charAt(i);
//     switch(ch){
        
//     }
// }

// Q. WAP to calculate the area of circle, rectangle, triangle using switch


// Q. Print hello world "n" times

// let n = Number(prompt('Enter a number  '))

// for (let i = 1; i<=n; i++) {
//     console.log("hello world")
// }

// Q. print reverse no. from n to 1

// let n = Number(prompt("Enter a number "))

// for (i= n; i>=1; i--){
//     console.log(i);
    
// }

// Q. Take a no. input and print its table

// let n = Number(prompt("Enter a number "))

// for(let i =1; i<=10; i++) {
//     console.log(n + " * " + i + " = " + (n*i));
    
// }

// Q. sum up to n terms

// let n = Number(prompt("ENTER A NO. "));
// let sum = 0;
// for(i= 1; i<=n; i++) {
//     sum = sum + i;
// }
// console.log(sum)

// Q. Factorial of given no.

// let n = Number(prompt("Enter a number "))
// let factorial = 1;

// for(i = 1; i <=n; i++) {
//     factorial= factorial* i;
// }
// console.log(factorial)

// Q. Print the sum of all even & odd no. in a range separately

// let a = Number(prompt("Enter a first Number "));
// let b = Number(prompt("Enter a second Number "));
// let evenSum = 0, oddSum= 0;

// if (a>b) {
//     let temp = a;
//     a=b;
//     b=temp;
// }

// for (let i=a; i<=b; i++) {
//     if (i%2==0) evenSum +=i;
//     else  oddSum +=i;

// }
// console.log("even sum " + evenSum ," & odd sum " + oddSum);
    
// Q. Print all the factors of number

// let n = Number(prompt("Enter a number: "));

// for (let i=1;i<=n/2;i++) {
//     if(n%i==0) process.stdout.write(i + " , ");

// } 
// console.log(n);

// Q. Check if the numbr is prime or not.

// let n = Number(prompt("Enter Number "))
// let count= 0;
// if (n<=1) console.log("Not Prime");
// else {
//     for (i=2; i<=n/2; i++) {
//     if(n%i==0) count++;

// }
// if (count == 0) console.log("Prime");
//     else console.log("Not Prime");

// }
    
// wHILE LOOP


// Q. Reverse the number

// let rev = 0;
// while(n>0) {
//     rev = (rev * 10) + (n%10);
//     n = Math.floor(n/10);
// }
// console.log(rev);

// Q. Know the number of digits 

//  let count = 0;
//  while (n>0) {
//     count++;
//     n= (Math.floor(n/10));
//  }
//  console.log(count);


// Q. ISBN

// let copy= n, count = 0, ans= 0;

// while (n>0) {
//     count++;
//     n = Math.floor(n/10);
// }
// if(count != 10) console.log("Invalid ISBN");
// else{
//     while(copy>0) {
//         let dig= copy%10;
//         ans = ans+ (dig*count);
//         count--;
//         copy= Math.floor(copy/10);
//     }
// }

// console.log(ans%11==0? "valid isbn": "invalid isbn")

// Q. Automorphic Number

//  let n= Number(prompt("Enter the number: "));
//  let sq= n*n;
//  let copy= n, count = 0;
//  while (n>0) {
//      count++;
//      n = Math.floor(n/10);


// }
// console.log(count);

// if(sq%Math.pow(10, count)== copy){
//     console.log("automorphic number");
// }
// else console.log("No automorphic")
// let rev = 0;
// while(n>0){
//     rev= (rev*10)+ n%10;
//     n = Math.floor(n/10);
// }
// console.log(rev);

 // While Loop

 // Q. Guess the number 

//  let computer = Math.floor((Math.random()*10)+1);
//  let user;
//  let attempt = 0;

//  do{
//     attempt++;
//     user = Number(prompt("Enter a Number "))
//     if(user>computer)console.log("too large");
//     else if (user<computer)console.log("too small");
//     else if(user== computer) {console.log("Congratulations you guess the correct number !");
//     }else console.log("Invalid number");
    
    
    
    
//  } while (user != computer);

// Q. Sasta calculator 
// let n;
// do{
//     console.log("Enter 1 for addition");
//     console.log("Enter 2 for subtraction");
//     console.log("Enter 3 for Divide");
//     console.log("Enter 4 for Modulus");
//     console.log("Enter 5 for multiplication");

//     n = Number(prompt("Enter a number "))
//     switch(n) {
//         case 1: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Addtion= " + (a+b));
//             break
//         }
//         case 2: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Subtraction= " + (a-b));
//             break
//         }
//         case 3: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Divide= " + (a/b));
//             break
//         }
//         case 4: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Modulus= " + (a%b));
//             break
//         }
//         case 5: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Multiply= " + (a*b));
//             break
//         }
//         default: console.log("Invalid number ");

//         }
//         n = Number(prompt("Enter 10 to recontinue "))
    
// }while(n==10)


// let n;
// do{
//     console.log("Enter 1 for Indian");
//     console.log("Enter 2 for Italian");
//     console.log("Enter 3 for Swedish");
//     console.log("Enter 4 for Chinese");
//     console.log("Enter 5 for Japanese");

//     n = Number(prompt("Enter a number "))
//     switch(n) {
//         case 1: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Addtion= " + (a+b));
//             break
//         }
//         case 2: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Subtraction= " + (a-b));
//             break
//         }
//         case 3: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Divide= " + (a/b));
//             break
//         }
//         case 4: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Modulus= " + (a%b));
//             break
//         }
//         case 5: {
//             let a = Number(prompt("Enter first number "))
//             let b = Number(prompt("Enter second number "))
//             console.log("Multiply= " + (a*b));
//             break
//         }
//         default: console.log("Invalid number ");

//         }
//         n = Number(prompt("Enter 10 to recontinue "))
    
// }while(n==10)

// Q. Strong number

let n = Number(prompt("Enter a number "))
// let copy = n;
// let ans = 0;
// while (n>0) {
//     let dig = n%10;
//     let fact = 1;
//     for(let i = 1; i<=dig; i++) {
//        fact = fact * i;
//     }
//     ans = ans + fact;
//     n= Math.floor(n/10);
    
// }
// if(copy=== ans) console.log("Strong number");
// else console.log("not strong number");

// Pattern Programming

// Q.      * 
//       * *
//     * * *
//   * * * *
// * * * * * 

// for (let i=1; i<=n; i++) {
    
//     for (let j=1; j<=n-i; j++) 
//         {
//         process.stdout.write("  ");
//     }
//     for(let j=1; j<=i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

// Q. Draw this

// *       * 
//   *   *
//     *
//   *   *
// *       *

for (let i=1; i<=n; i++) {
    
    for (let j=1; j<=n; j++) 
        if(i==j || (i+j==n+1))
        process.stdout.write("* ");
        else process.stdout.write("  ")
    
    
    console.log();
    
}

// Q. 

