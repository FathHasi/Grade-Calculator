function calculateGrade() {
    var mark = parseFloat(document.getElementById("mark").value);
    var grade;

    if (isNaN(mark) || mark < 0 || mark > 100) {
        document.getElementById("result").innerHTML = "Enter a number between 0 and 100.";
        return;
    }

    if (mark >= 90) {
        grade = 'A+';
    } else if (mark >= 80) {
        grade = 'B+';
    } else if (mark >= 70) {
        grade = 'C+';
    } else if (mark >= 60) {
        grade = 'D+';
    } else {
        grade = 'Failed';
    }

    document.getElementById("result").innerHTML = "Grade: " + grade;
}