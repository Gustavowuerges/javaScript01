
function contarParesImpares(numeros) {
    let pares = 0;
    let impares = 0;

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

console.log("\n=== EXERCÍCIO 4 ===");
const resultado1 = contarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resultado1); // { pares: 5, impares: 5 }

const resultado2 = contarParesImpares([2, 4, 6, 8]);
console.log(resultado2); // { pares: 4, impares: 0 }

const resultado3 = contarParesImpares([1, 3, 5, 7, 9]);
console.log(resultado3); // { pares: 0, impares: 5 }