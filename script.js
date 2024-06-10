// Temperature Converter
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const tempUnit = document.getElementById('tempUnit').value;
    let result;
    if (tempUnit === 'CtoF') {
        result = (tempInput * 9/5) + 32;
    } else {
        result = (tempInput - 32) * 5/9;
    }
    document.getElementById('tempResult').innerText = `Result: ${result.toFixed(2)}`;
}

// Simple Interest Calculator
function calculateSimpleInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
    const simpleInterest = (principal * rate * time) / 100;
    document.getElementById('simpleInterestResult').innerText = `Simple Interest: ${simpleInterest.toFixed(2)}`;
}

// CGPA Calculator
function calculateCGPA() {
    const grades = document.getElementById('grades').value.split(',').map(Number);
    const totalGrades = grades.reduce((acc, grade) => acc + grade, 0);
    const cgpa = totalGrades / grades.length;
    document.getElementById('cgpaResult').innerText = `CGPA: ${cgpa.toFixed(2)}`;
}

// Money Converter (USD to EUR for example purposes)
function convertMoney() {
    const amount = document.getElementById('amount').value;
    const exchangeRate = 0.85; // Example exchange rate
    const convertedAmount = amount * exchangeRate;
    document.getElementById('moneyResult').innerText = `Converted Amount: €${convertedAmount.toFixed(2)}`;
}

// Compound Interest Calculator
function calculateCompoundInterest() {
    const principal = document.getElementById('principalCI').value;
    const rate = document.getElementById('rateCI').value / 100;
    const time = document.getElementById('timeCI').value;
    const n = document.getElementById('nCI').value;
    const compoundInterest = principal * Math.pow((1 + rate / n), (n * time)) - principal;
    document.getElementById('compoundInterestResult').innerText = `Compound Interest: ${compoundInterest.toFixed(2)}`;
}
