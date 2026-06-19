function checkNumber() {
    let number = parseInt(document.getElementById("numberInput").value);
    
    if (number % 2 === 0) {
        alert(number + " is Even");
    } else {
        alert(number + " is Odd");
    }
}