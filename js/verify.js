
(function verify() {
    const secretCode = "12345";
    const userInput = prompt("Enter the secret code:");
    const verificationResult = [...userInput].reduce((acc, digit, index) => {
        return acc && digit === secretCode[index];
    }, true);
    if (verificationResult) {
        alert("Verification successful!");
    } else {
        alert("Verification failed!");
    }
}());
