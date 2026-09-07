function factorialCiclo(n) {
    if (n < 0) {
        throw new Error("El número debe ser un entero no negativo.");
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorialCiclo(5)); // Resultado: 120