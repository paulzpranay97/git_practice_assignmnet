let num= 13;
let count=0;
for(let i=2; i<=num ; i++)
{
     if(num%i==0)
    {count++;}
}
if(count==1)
{console.log("It is a prime number");}
else
{console.log("It is not a prime number");}
