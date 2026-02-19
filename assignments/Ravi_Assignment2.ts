//Assignment-2 (Conditional Statements)

let cibilScore: number = 749;

let Salary: number = 50000;

let DTI: number = 39;

let empStatus: Boolean = true;

if (cibilScore >= 750)
{
    console.log('the loan is automatically approved.');
}
else if(cibilScore >650 && cibilScore < 750)
    {
        console.log('he customer’s income must be at least $50,000');
        if(Salary>=50000)
        {
            console.log('we are considering the emplyment status');

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