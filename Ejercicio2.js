const scanner = require("prompt-sync")({sigint: true});
let cancelar = false
let cadenasc = ""
let cadena = ""
let nosonvocales = 0

while (!cancelar) {
    cadenasc = scanner ("Introduzca cadenas de texto: ")
    if(cadenasc.toLowerCase() === "cancelar"){
        break
    }
    cadena = cadena + cadenasc
} 
console.log("La suma de tus cadenas es: " + cadena);


const frase = cadena.toLowerCase()
for (let i = 0; i < frase.length; i++) {
    if (
    frase.charAt(i)==="b" ||
    frase.charAt(i)==="c" ||
    frase.charAt(i)==="d" ||
    frase.charAt(i)==="f" ||
    frase.charAt(i)==="g" ||
    frase.charAt(i)==="h" ||
    frase.charAt(i)==="j" ||
    frase.charAt(i)==="k" ||
    frase.charAt(i)==="l" ||
    frase.charAt(i)==="m" ||
    frase.charAt(i)==="n" ||
    frase.charAt(i)==="p" ||
    frase.charAt(i)==="q" ||
    frase.charAt(i)==="r" ||
    frase.charAt(i)==="s" ||
    frase.charAt(i)==="t" ||
    frase.charAt(i)==="v" ||
    frase.charAt(i)==="w" ||
    frase.charAt(i)==="x" ||
    frase.charAt(i)==="y" ||
    frase.charAt(i)==="z" ||
    frase.charAt(i)==="0" ||
    frase.charAt(i)==="1" ||
    frase.charAt(i)==="2" ||
    frase.charAt(i)==="3" ||
    frase.charAt(i)==="4" ||
    frase.charAt(i)==="5" ||
    frase.charAt(i)==="6" ||
    frase.charAt(i)==="7" ||
    frase.charAt(i)==="8" ||
    frase.charAt(i)==="9" 
    
    ){
        nosonvocales = nosonvocales + 1
    } 
}
console.log("Los caracteres que no son vocales suman: " + nosonvocales);



