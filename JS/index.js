function checkEvenOdd() { 
    var number = parseInt(document.getElementById("number").value);
    var resultMessage;
    if (number % 2 === 0) {
        resultMessage = `${number} is even.`;
    } else {
        resultMessage = `${number} is odd.`;
    }  
    document.getElementById("result").textContent = resultMessage;
}