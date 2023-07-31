var range=parseInt(prompt("Enter Ramge: "));
document.write("<h1>Range is: "+range);
if(range<=1)
    document.write("<h1>No prime numbers in this range");
else
{
    document.write("<p>Prime numbers are: ");
    document.write("<br></br>")
    for(let i=2;i<=range;i++)
    {
        var count=0;
        for(let j=1;j<=i/2;j++)
        {
            if(i%j==0)
                count++;
        }
        if(count==1)
            document.write(`${i}`+" ");


    }
}