//Right side triangle with *
console.log("Right side triangle with *")

let stars: number = 5;
for (let i:number = 1; i <=stars; i++) 
{
    let print: string = " ";

    for (let j:number = i; j <=stars; j++)
    { 
        print += " ";
    }
    
            for(let k:number = 1; k<=i; k++)
            {
                print += "*";
            }
        console.log(print);

}
