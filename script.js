// Temperature Conversion
function convertTemperature() {
    let celsius = document.getElementById('tempInput').value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('tempResult').innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

// Simple Interest Calculation
function calculateSimpleInterest() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let time = document.getElementById('time').value;
    let simpleInterest = (principal * rate * time) / 100;
    document.getElementById('simpleInterestResult').innerText = `Simple Interest is ${simpleInterest.toFixed(2)}`;
}

// Compound Interest Calculation
function calculateCompoundInterest() {
    let principal = document.getElementById('cPrincipal').value;
    let rate = document.getElementById('cRate').value;
    let time = document.getElementById('cTime').value;
    let compounds = document.getElementById('compounds').value;
    let compoundInterest = principal * (Math.pow((1 + rate / (compounds * 100)), (compounds * time))) - principal;
    document.getElementById('compoundInterestResult').innerText = `Compound Interest is ${compoundInterest.toFixed(2)}`;
}
