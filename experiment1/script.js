function calculateResult() {

    const n = document.getElementById("subjects").value;
    console.log(n);

    let total = 0;

    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter the subject no. " + (i + 1)));
        total += x;
    }

    let avg = total / n;
    let grade;

    if (avg > 90) {
        grade = "A+";
    }
    else if (avg > 80) {
        grade = "A";
    }
    else if (avg > 70) {
        grade = "B";
    }
    else if (avg > 60) {
        grade = "C";
    }
    else if (avg > 50) {
        grade = "D";
    }
    else {
        grade = "E";
    }

    let Result;

    if (avg >= 40) {
        Result = "Pass";
    }
    else {
        Result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks : " + total + "<br>" +
        "Average Marks : " + avg.toFixed(2) + "<br>" +
        "Grade : " + grade + "<br>" +
        "Result : " + Result;

    console.log(Result);
}