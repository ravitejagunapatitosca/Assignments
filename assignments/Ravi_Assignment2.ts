//Assignment-2 (Conditional Statements)
//without functions
console.log('without functions')

let  custommerName: string = "Ravi"

let cibilScore: number = 749;

let Salary: number = 50000;

let DTI: number = 39;

let empStatus: Boolean = true;

console.log(`Loan evealuation process for ${custommerName}`)
if (cibilScore >= 750)
{
    console.log('the loan is automatically approved.');
}
else if(cibilScore >650 && cibilScore < 750)
    {
        console.log('he customer’s income must be at least $50,000');
        if(Salary>=50000)
        {
            console.log('we are considering the salary');

            if(empStatus===true)
            {
                console.log('we are considering the emplyment status');
                
                if(DTI<40)
                {
                console.log('Loan is approved');
                }
                else
                {
                    console.log('the loan is denied because DTI is less than 40');
                }
            }
            else
            {
                console.log('the loan is denied because your emp status is inactive');
            }
        }
    }
else
{

    console.log('the loan is denied because you have cibil score less than 650')
}

//with functions

console.log('with functions')

function evaluateOfLoan(
    custommerName1: string,
    cibilScore1: number,
    Salary1: number,
    DTI1: number,
    empStatus1: boolean): void

{
console.log("Loan evealuation process for "+ custommerName1 )

if (cibilScore1 >= 750)
{
    console.log('the loan is automatically approved.');
}
else if(cibilScore1 >650 && cibilScore1 < 750)
    {
        console.log('he customer’s income must be at least $50,000');
        if(Salary1>=50000)
        {
            console.log('we are considering the salary');

            if(empStatus1===true)
            {
                console.log('we are considering the emplyment status');
                
                if(DTI1<40)
                {
                console.log('Loan is approved');
                }
                else
                {
                    console.log('the loan is denied because DTI is less than 40');
                }
            }
            else
            {
                console.log('the loan is denied because your emp status is inactive');
            }
        }
    }
else
{

    console.log('the loan is denied because you have cibil score less than 650')
}

}

evaluateOfLoan(
    'Ravi',
    749,
    50000,
    39,
    true
)