function soma(a, b) {
    
    return a + b

}

function subtrair(a,b){
    
    return a - b

}

function multiplicar(a, b){

    return a * b

}

function divisao(a,b) {
    if(b === 0){
        return "Erro: divisão por zero"
    }
    return a / b

}
console.log("=== EXERCÍCIO 1 ===");
console.log(soma(5, 3));           // Esperado: 8
console.log(subtrair(10, 4));       // Esperado: 6
console.log(multiplicar(3, 7));     // Esperado: 21
console.log(divisao(15, 3));        // Esperado: 5
console.log(divisao(10, 0));        // Esperado: "Erro: divisão por zero"