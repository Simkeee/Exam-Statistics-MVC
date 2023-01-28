
function updateExamList(exam) {
 
    var newListItem = document.createElement("li");
    newListItem.innerHTML = exam.getExamInfo();

    if(exam.hasPassed()) {
        document.getElementById("passed").appendChild(newListItem);
    } else {
        document.getElementById("failed").appendChild(newListItem);
    }

  }

  function updateStatistics() {
    totalExams = passedExams.length + failedExams.length;
    passRate = (passedExams.length / totalExams) * 100;

    var total = document.getElementById("total");
    total.innerHTML = totalExams;

    var average = document.getElementById("average");
    average.innerHTML = passRate;

    var numPass = document.getElementById("numPass");
    numPass.innerHTML = numPassed;

    var numFai = document.getElementById("numFai");
    numFai.innerHTML = numFailed;
  }