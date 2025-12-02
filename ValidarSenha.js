
function validarSenha(senha) {

    if (senha.length < 8) {
        return false;
    }


    const temMaiuscula = senha.toLowerCase() !== senha;


    const temMinuscula = senha.toUpperCase() !== senha;

   
    const temNumero = /[0-9]/.test(senha);

    return temMaiuscula && temMinuscula && temNumero;
}

console.log("\n=== EXERCÍCIO 5 (BÔNUS) ===");
console.log(validarSenha("Abc12345"));   
console.log(validarSenha("abc12345"));   
console.log(validarSenha("ABC12345"));   
console.log(validarSenha("AbcDefgh"));  
console.log(validarSenha("Abc123"));    
