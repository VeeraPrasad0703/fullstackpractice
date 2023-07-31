var arr=[1,3,4,2,5,3];
document.write("<h1>Array Elememts are: </h1>")
for(let i in arr)
    document.write(`${arr[i]}`+" ");
var min=arr[0];
for(let i in arr)
{
    if(min>arr[i])
        min=arr[i];
}
document.write("<p>Smallest in an array is: "+`${min}`);
// document.write("<p>Smallest in an array is: "+Math.min.apply(null,arr));