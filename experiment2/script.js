let employees = [];

function addEmployee() {
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    };

    employees.push(emp);

    document.getElementById("output").innerHTML =
        "<strong>Employee Added!</strong>";

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function printData(arr) {
    let data = "";

    for (let emp of arr) {
        data += "<div class='box'>";

        for (let key in emp) {
            data += `<b>${key}:</b> ${emp[key]} <br>`;
        }

        data += "</div>";
    }

    document.getElementById("output").innerHTML =
        data || "No records to display.";
}

function displayAll() {
    printData(employees);
}

function filterSalary() {
    let filtered = employees.filter(
        emp => emp.salary > 50000
    );

    printData(filtered);
}

function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        `<strong>Total Salary:</strong> ${total}`;
}

function avgSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "No employees added yet.";
        return;
    }

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        `<strong>Average Salary:</strong> ${avg.toFixed(2)}`;
}

function countDept() {

    let targetDept =
        document.getElementById("searchDept")
        .value.toLowerCase();

    let count = 0;

    for (let emp of employees) {
        if (emp.dept.toLowerCase() === targetDept) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        `<strong>Count in ${targetDept}:</strong> ${count}`;
}