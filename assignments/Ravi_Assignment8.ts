//1. Search of Java word from the string

let sentence: string= "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

function searchJavaWord(sentence: string): void
{
let count:number = 0;
let split: string[] = sentence.split(" ");
for(let i: number =0; i<split.length;i++)
{
    if(split[i].toLowerCase() === "java")
    {
         console.log("2. index of 'java' in the given sentence"+i) 
        count++;
    }

}    
console.log("1. The word 'java' appears " + count + " times in the given sentence");

}

searchJavaWord(sentence)
