function verificarStatus(idade){
    
    if(idade < 0){
        return "Idade inválida"
    }
    
    if (idade < 12){
        return "Criança";
    }else if (idade < 18) {
        return "Adolecente";
    }else if (idade < 60){
        return "Adulto"
    }else{
        return "Idoso";
    }

}

console.log("\n=== EXERCÍCIO 2 ===");
console.log(verificarStatus(-5));   // Esperado: "Idade inválida"
console.log(verificarStatus(8));    // Esperado: "Criança"
console.log(verificarStatus(15));   // Esperado: "Adolescente"
console.log(verificarStatus(30));   // Esperado: "Adulto"
console.log(verificarStatus(70));   // Esperado: "Idoso"