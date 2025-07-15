// Question 21
function getFullName(firstName, lastName)
{
    return firstName+lastName;
}
console.log(getFullName("Nithin","Kumar"));
// Question 22
function large(n1,n2,n3)
{
    let g = (n1>n2 && n1>n3)?(n1):(n2>n3)?(n2):(n3);
    console.log(g);
}
large(5,2,8);
// Question 23
function multiplyOrAdd(a, b, operation)
{
    if(operation == "*")
        return a*b;
    else if(operation == "+")
        return a+b;
    else
        return "Invalid";
}
console.log(multiplyOrAdd(3,4,"+"));
// Question 24
function containJS(str)
{
    return str.includes("JS");
}
console.log(containJS("Love JS"));
// Question 25
function fact(num)
{
    let f = 1;
    for(let i=1;i<=num;i++)
        f = f*i;
    return f
}
console.log(fact(5));
