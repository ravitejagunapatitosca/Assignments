// Determine the number is Prime or not


function numberDetermine(
    num: number
):void
{
if (num<=1)
{
 console.log("Given number isn not a Prime Number")
}

  let isPrime: boolean = true;

    for(let i:number = 2; i*i <=num; i++)
    {
        if(num%i==0)
        {
             isPrime= false;
             break;
        }
    }

if(isPrime)
{
    console.log("Given number is a Prime Number")
}
else
{
    console.log("Given number isn not a Prime Number")
}

}
numberDetermine(10)
