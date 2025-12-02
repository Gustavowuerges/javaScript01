
function celsiusParaFahrenheit(celsius) {
    const resultado = celsius * 9/5 + 32;
    return Math.round(resultado * 100) / 100;
}

function fahrenheitParaCelsius(fahrenheit) {
    const resultado = (fahrenheit - 32) * 5/9;
    return Math.round(resultado * 100) / 100;
}

function celsiusParaKelvin(celsius) {
    const resultado = celsius + 273.15;
    return Math.round(resultado * 100) / 100;
}

console.log("\n=== EXERCÍCIO 6 (BÔNUS) ===");
console.log(celsiusParaFahrenheit(0));      
console.log(celsiusParaFahrenheit(100));    
console.log(fahrenheitParaCelsius(32));     
console.log(fahrenheitParaCelsius(212));   
console.log(celsiusParaKelvin(0));          
console.log(celsiusParaKelvin(100));        
