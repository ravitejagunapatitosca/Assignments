//Assignment -4 (Conditional Statements & Loops)

let totalTransactions: number [] = [50000, -2000, 3000,-15000, -200, -300, 4000, -3000]

//get the no of values present in the array to run the loop
let totalnofTransactions: number = totalTransactions.length;

//declare the variables for use
let balance: number = 0;
let noofcredits: number = 0;
let noofdebits: number = 0;
let noofsuspecious: number =0;
let creaditamount:number= 0;
let debitamount:number= 0;

console.log(totalnofTransactions)

for(let i:number =0; i<totalnofTransactions;i++ )
{
    let amount: number = totalTransactions[i];

    //check for suspecious

        if(amount > 10000){
        console.log(`transaction ${amount} is a suspecious transaction`);

        noofsuspecious++;
    }
    else if(amount <- 10000){
            console.log(`transaction ${amount} is a suspecious transaction`);

            noofsuspecious++;
        }
//check for debit or credit
    if(amount>0)
    {
        noofcredits++;
        creaditamount = creaditamount + amount

    }
    else if(amount<0)
    {
        noofdebits++
        debitamount = debitamount + amount
    }
    balance = balance +amount;

}

//print the output
console.log(`no of credit transactions ${noofcredits}`);
console.log(`no of debit transactions ${noofdebits}`);
console.log(`no of suspecious transactions ${noofsuspecious}`);
console.log(`balance is ${balance}`);
console.log(`credit total amount ${creaditamount}`)
console.log(`debit total amount ${debitamount}`)