// Question 11
let greet = (name) => console.log("Welcome "+name);
greet("Nithin");
// Question 12
let sum = (a,b) => a+b;
console.log(sum(5,6));
// Question 13
let cube = (a) => a*a*a;
console.log(cube(3));
// Question 14
let check = (a) =>
{
    if(a%3 == 0 && a%5 == 0)
    {
        console.log("Number is divisible by both 3 and 5");
    }
    else if(a%3 == 0 && a%5 != 0)
        console.log("Number is divisible by 3 only");
    else if(a%3 != 0 && a%5 == 0)
        console.log("Number is divisible by 5 only");
    else
        console.log("Number is not divisible by both 3 and 5");
}
check(15);
