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
let repetir;

do {
    let numero = parseInt(prompt("¿De qué número quieres ver la tabla de multiplicar?"));
    let resultado = "Tabla del " + numero + ":\n";

    for (let i = 1; i <= 12; i++) {
        let multiplicacion = numero * i;
        resultado += numero + " x " + i + " = " + multiplicacion + "\n";
    }

    alert(resultado);
    console.log(resultado);

    // Preguntamos si quiere repetir. Si escribe "si", el ciclo vuelve a empezar.
    repetir = prompt("¿Deseas consultar otra tabla? (Escribe 'si' para continuar o 'no' para salir)").toLowerCase();

} while (repetir === "si");

alert("Gracias por usar la calculadora de tablas");


//Ejercicio 3 – Cajero automático
const SALDO_INICIAL = 500000; 
let saldoActual = SALDO_INICIAL;
let continuar = true;

alert("Bienvenido al Cajero Automático. Tu saldo inicial es: $" + saldoActual);

while (continuar && saldoActual > 0) {
    let retiro = parseFloat(prompt("Tu saldo es $" + saldoActual + ".\n¿Cuánto deseas retirar? (Escribe 0 para salir)"));

    if (retiro === 0) {
        continuar = false; 
    } else if (retiro > saldoActual) {
        alert("Error: Fondos insuficientes. Intenta retirar una cantidad menor.");
    } else if (retiro > 0) {
        saldoActual = saldoActual - retiro;
        alert("Retiro exitoso. Has retirado $" + retiro);
    } else {
        alert("Error: Ingresa un valor válido.");
    }
}

alert("Gracias por usar nuestro cajero. Tu saldo final es: $" + saldoActual);

//Ejercicio 4 – Promedio de notas
for (let estudiante = 1; estudiante <= 5; estudiante++) {
    alert("Ingresando datos del Estudiante #" + estudiante);
    
    let nota1 = parseFloat(prompt("Estudiante " + estudiante + " - Ingresa la nota 1 (0.0 a 5.0):"));
    let nota2 = parseFloat(prompt("Estudiante " + estudiante + " - Ingresa la nota 2 (0.0 a 5.0):"));
    let nota3 = parseFloat(prompt("Estudiante " + estudiante + " - Ingresa la nota 3 (0.0 a 5.0):"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 3.0) {
        alert("Estudiante #" + estudiante + "\nPromedio: " + promedio.toFixed(1) + "\nEstado: ✅ APROBADO");
        console.log("Estudiante " + estudiante + ": Aprobado con " + promedio.toFixed(1));
    } else {
        alert("Estudiante #" + estudiante + "\nPromedio: " + promedio.toFixed(1) + "\nEstado: ❌ REPROBADO");
        console.log("Estudiante " + estudiante + ": Reprobado con " + promedio.toFixed(1));
    }
}

//Ejercicio 5 – Tienda de productos
let totalCompra = 0;
let comprando = true;

alert("Bienvenido a la Tienda. Registra tus productos.");

while (comprando) {
    let precio = parseFloat(prompt("Ingresa el precio del artículo (o escribe 0 para finalizar la compra):"));

    if (precio === 0) {
        comprando = false; // Detiene el ciclo
    } else if (precio > 0) {
        totalCompra = totalCompra + precio; // Acumulamos el valor
        console.log("Artículo añadido: $" + precio + " | Total acumulado: $" + totalCompra);
    }
}

if (totalCompra > 100000) {
    let descuento = totalCompra * 0.10; 
    let totalPagar = totalCompra - descuento;
    alert("¡Felicidades! Superaste los $100.000 y obtienes un 10% de descuento.\nTotal original: $" + totalCompra + "\nDescuento: $" + descuento + "\nTotal a Pagar: $" + totalPagar);
} else {
    alert("Compra finalizada.\nTotal a Pagar: $" + totalCompra);
}


//Ejercicio 6 – Juego del adivinador
const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let adivinado = false;
let intentos = 0;

alert("¡Bienvenido al Juego del Adivinador!\nHe pensado un número entre 1 y 20. ¡Intenta adivinarlo!");

while (adivinado === false) {
    let intento = parseInt(prompt("Ingresa tu número:"));
    intentos++; // Sumamos un intento

    if (intento === numeroSecreto) {
        alert("CORRECTO El número era " + numeroSecreto + ".\nLo adivinaste en " + intentos + " intentos.");
        adivinado = true; // Esto rompe el ciclo porque ya adivinó
    } else if (intento > numeroSecreto) {
        alert("Fallaste. El número que buscas es MENOR que " + intento);
    } else if (intento < numeroSecreto) {
        alert("Fallaste. El número que buscas es MAYOR que " + intento);
    }
}


//Ejercicio 7 – Contador de pares e impares
let pares = 0;
let impares = 0;

alert("Vamos a clasificar 10 números entre pares e impares.");

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Ingresa el número " + i + " de 10:"));

    if (numero % 2 === 0) {
        pares++; 
    } else {
        impares++; 
    }
}

alert("Resultados finales:\nNúmeros Pares: " + pares + "\nNúmeros Impares: " + impares);
console.log("Pares: " + pares + ", Impares: " + impares);


//Ejercicio 8 – Control de acceso
const USUARIO_CORRECTO = "admin";
const PASS_CORRECTA = "1234";

let intentosFallidos = 0;
let accesoConcedido = false;

while (intentosFallidos < 3 && accesoConcedido === false) {
    let usuario1 = prompt("Ingresa el usuario (Intento " + (intentosFallidos + 1) + " de 3):");
    let contraseña1 = prompt("Ingresa la contraseña:");

    if (usuario1 === USUARIO_CORRECTO && pass === PASS_CORRECTA) {
        accesoConcedido = true; 
        alert("Bienvenido al sistema, " + user + ".");
        console.log("Login exitoso");
    } else {
        intentosFallidos++; 
        if (intentosFallidos < 3) {
            alert("Credenciales incorrectas. Te quedan " + (3 - intentosFallidos) + " intentos.");
        }
    }
}

if (accesoConcedido === false) {
    alert("Has superado el límite de intentos.");
    console.log("Cuenta bloqueada por múltiples intentos.");
}

//arreglo publish