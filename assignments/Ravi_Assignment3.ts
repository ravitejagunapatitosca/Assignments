//Assignment -3 (Arrays/Datatypes/Operators)

console.log("creating array for student")
let studentName: string[] = ["Ravi","Teja","Gopi","Vijay"];
console.log("students Names")
console.log(studentName)
let marks: number[] = [50, 60, 70, 80];
console.log("students marks")
console.log(marks)

let updatedMarks: number[] = [];

for(let i =0; i< marks.length; i++)
{
    let newMark: number = marks[i];
    newMark += 10;
    updatedMarks.push(newMark);
    console.log(`${studentName[i]} marks are ${updatedMarks[i]}`)
}

//average marks of all the students
let totalMarks: number =0;
for(let i =0; i< marks.length; i++)
{
    totalMarks =  totalMarks + updatedMarks[i];
}

let averageMarks = totalMarks/updatedMarks.length;

console.log("updated marks after adding 10:", updatedMarks)
console.log(`Total marks of the students is ${totalMarks}`);
console.log(`Average marks of the students is ${averageMarks}`);
