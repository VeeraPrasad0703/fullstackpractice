var arr=[];
var len=parseInt(prompt("Enter length of array: "));
document.write("<h1>Enter Array Elememts : </h1>")
for(var i=0;i<len;i++)
{
    var ele=(parseInt(prompt("Enter elememt: ")));
    document.write(ele+ " ");
    arr.push(ele);
}
var sum=0;
for(let i in arr)
{
    sum+=arr[i];
}
sum/=len;
document.write("<p>Average of array is: "+`${sum}`);