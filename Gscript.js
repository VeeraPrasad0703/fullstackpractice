var arr=[1,3,4,2,5,3];
document.write("<h1>Array Elememts are: </h1>")
for(let i in arr)
    document.write(`${arr[i]}`+" ");
var max=arr[0];
for(let i in arr)
{
    if(max<arr[i])
        max=arr[i];
}
document.write("<p>Largest in an array is: "+`${max}`);
// document.write("<p>Largest in an array is: "+Math.max.apply(null,arr));