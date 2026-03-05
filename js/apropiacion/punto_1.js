let base = parseFloat(prompt("Ingrese la base del terreno en metros:"));
let altura = parseFloat(prompt("Ingrese la altura del terreno en metros:"));
let area = base * altura;
let perimetro = 2 * (base + altura);
console.log("El área del terreno es: " + area + " metros cuadrados");
console.log("El perímetro del terreno es: " + perimetro + " metros");