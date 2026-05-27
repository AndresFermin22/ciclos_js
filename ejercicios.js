//Ejercicio 1 – Números primos
for (let numero = 1; numero <= 50; numero++) {
    
    let divisores = 0; 

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++; 
        }
    }

    if (divisores === 2) {
        
        console.log("Número primo encontrado: " + numero);
        
        alert("Número primo encontrado: " + numero);
    }
}

//Ejercicio 2 – Tabla de multiplicar personalizada


//Ejercicio 3 – Cajero automático


//Ejercicio 4 – Promedio de notas


//Ejercicio 5 – Tienda de productos


//Ejercicio 6 – Juego del adivinador


//Ejercicio 7 – Contador de pares e impares


//Ejercicio 8 – Control de acceso
