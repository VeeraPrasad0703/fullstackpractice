var num1=parseInt(prompt("Enter a number: "));
var num2=parseInt(prompt("Enter a number: "));
var num3=parseInt(prompt("Enter a number: "));
document.write("<h1>Numbers are : " +`${num1} ${num2} ${num3}`);
document.write("<br></br>")
if(num1>num2 && num1>num3)
{
    document.write("<p>Largest Number is: "+num1+"</p>");
}
else if(num2>num3 && num2>num1)
{
    document.write("<p>Largest Number is: "+num2+"</p>");
}
else{
    document.write("<p>Largest Number is: "+num3+"</p>");
}