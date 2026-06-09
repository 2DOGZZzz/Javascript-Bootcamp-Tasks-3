
//question 1

const studentDatabase = [
{ id: 1, firstName: "Michael", lastName: "Jordan", email: "Michael.Jordan@example.com", course: "Biology and Sports sciences", age: 20 },
  { id: 2, firstName: "New", lastName: "Balance", email: "New.Balance@example.com", course: "Fashion Design and Retail Management", age: 22 },
  { id: 3, firstName: "Jim", lastName: "Carrey", email: "Jim.Carrey@example.com", course: "Media and Arts", age: 21 },
  { id: 4, firstName: "James", lastName: "Bond", email: "Bond.007@example.com", course: "Performing Arts", age: 23 },
  { id: 5, firstName: "Michael", lastName: "Night", email: "Michael.N@example.com", course: "Mechanical and Motor Engineering", age: 19 }
        ];
    // question 1  
 function SynchronousExecution() {
  console.log("Step-1 - The function is starting");
  console.log("Step-2 - The Process is in action");
  console.log("Step-3 - The function reached the final stage");
}
   
   // question 2   
function RetrieveStudentRecords() {
  console.log("Retrieving Student Records... This will take 3 seconds.");
  
  setTimeout(() => {
    console.log("Records Retrieved Successfully:");
    console.table(studentDatabase);
  }, 3000);
}


console.log("Initialising Process.....");
SynchronousExecution();

console.log("\n Retrieved Student Information.");
RetrieveStudentRecords();