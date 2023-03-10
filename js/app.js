
let passedExams = [];
let failedExams = [];
let numPassed = 0;
let numFailed = 0;
let passPercentage = 0;

const addButton = document.getElementById("add-button");

const passed = document.getElementById("passed");
const failed = document.getElementById("failed");



addButton.addEventListener("click", function() {
  
  const subject = document.getElementById("subject").value;
  const name1 = document.getElementById("name1").value;
  const surname = document.getElementById("surname").value;
  const grade = document.getElementById("grade").value;


if (!subject || !name1 || !grade) {
alert("Please fill out all fields with valid data.");
return;
}

if (!name1[0].match(/^[A-Z]/)) {
alert("Name must start with a capital letter.");
    return;
}
if (!surname[0].match(/^[A-Z]/)) {
    alert("Name must start with a capital letter.");
        return;
    }

if (isNaN(grade) || grade < 5 || grade > 10) {
alert("Grade must be a numerical value between 5 and 10.");
    return;
}
console.log(subject);
const newExam = new Exam(new Subject(subject), new Student(name1, surname), grade);


  if (newExam.hasPassed()) {
    passedExams.push(newExam);
    numPassed++;
  } else {
    failedExams.push(newExam);
    numFailed++;
  }

  updateExamList(newExam);
  updateStatistics();
});


