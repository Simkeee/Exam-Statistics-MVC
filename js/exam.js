// constructor function
class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }
  // add method to prototype
  getExamInfo() {
    return this.subject.getSubjectName() + ', ' + this.student.getStudentData();
  }
  // add method to prototype
  hasPassed() {
    return this.grade > 5;
  }
}


