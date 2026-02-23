//Assignment 7 on String operations

let sentence: string= "Java programming is fun and challenging";

let split:string [] = sentence.split(" ");

//1. Count of letter in the given string
console.log("1. Count of letter in the given string:" + split.length);

let i:number = split.length;
let reversestring:string="";
for(i; i>0;i--)
{
    reversestring = reversestring+split[i-1]+" ";
}

//2. Output of given string in reverse
console.log("2. Output of given string in reverse:" + reversestring)

//3. Converting the String to UPPER case

let stringUpper: string=""

for(i of split)
{
    stringUpper=stringUpper+ i.substring(0, 1).toUpperCase() + i.substring(1) + " ";

}
console.log("3. Converting the String to UPPER case:"+stringUpper);