// list or collection of data

let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];

// arrays starts with index 0
console.log(courses[0]);
console.log(courses[4]); //returns undefined if index out of range
// let coursesAndGPA = ["WDD131", 3.7, "ITM220", 4];
// javascript object
let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
}


// console.log(coursesAndGPA[1]);
// console.log(coursesAndGPA[0]);
console.log(courseAndGPA)
console.log(courseAndGPA.courseName)

// array of objects
let coursesAndGPA = [
    {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner",
    assignments: [
        {
        assignmentName: "W01 Prove",
        assignmentGrade: 89
        },
        {
        assignmentName: "W02 Prove",
        assignmentGrade: 98
        }
    ]
    },
    {
    courseName: "WDD231",
    courseGPA: 4,
    professor: "Brother Warner"
    }
]

console.log(coursesAndGPA[1].courseName)
console.log(coursesAndGPA[0].assignments[1].assignmentGrade)

// looping through an array
for (let i = 0; i < coursesAndGPA.length; i++){
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

// forEach functions
coursesAndGPA.forEach(item => {
    console.log(item.courseName),
    console.log(item.courseGPA)
});

let body = document.querySelector('body')

// build out HTML dynamically based on array contents
let dynamicHTML = `
    <div>
        <h1>${courseAndGPA.courseName}</h1>
        <h2>${courseAndGPA.courseGPA}</h1>
    </div>
    `;

coursesAndGPA.forEach(item => {
    let dynamicHTML = `
    <div>
        <h1>${courseAndGPA.courseName}</h1>
        <h2>${courseAndGPA.courseGPA}</h1>
    </div>
    `;
    body.innerHTML += dynamicHTML
})

