console.log("Funciona");

function imprimeNombre() {
    console.log("Natalia")
}

imprimeNombre();

function convertir() {
    let c = prompt("Ingresa temperatura en C°");
    let f = (1.8 * c) + 32;
    console.log("La temperatura convertida es:" + f)
}
convertir();

function determinar(letra) {
    console.log(letra);
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log("Es una vocal");
    } else {
        console.log("Es consonante");
    }
}

determinar("a");
determinar("b");
determinar("c");
determinar("e");

function suma(a,b){
    let suma = a+b;
    console.log(suma);
}
suma(5, 3);
suma (3,4);
suma(1000, 300);