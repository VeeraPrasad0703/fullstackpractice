var num1=parseInt(prompt("Enter a number: "));
var num2=parseInt(prompt("Enter a number: "));
var num3=parseInt(prompt("Enter a number: "));
document.write("<h1>Numbers are : " +`${num1} ${num2} ${num3}`);
if(num1<num2 && num1<num3)
{
    document.write("<p>Smallest Number is</p>"+num1);
}
else if(num2<num3 && num2<num1)
{
    document.write("<p>Smallest Number is</p>"+num2);
}
else{
    document.write("<p>Smallest Number is</p>"+num3);
}