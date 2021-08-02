// Código del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4; 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


// Código del Triángulo
console.group("Triángulo");
//const ladoTriangulo1 = 6;

//const ladoTriangulo2 = 6;

//const baseTriangulo = 4;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm. ")

//const alturaTriangulo = 5.5; 
//console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

//const perimetroTriangulo =  ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const areaTriangulo =  (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triángulo es: " + areaTriangulo + " cm^2")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();    

// Código del círculo 
console.group("Círculo");
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");

//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + " cm");

function diametroCirculo(radio) {
    return radio * radio;
}

//PI = 3.1415
const PI = Math.PI;
//console.log("PI es: " + PI);

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del círculo es: " + areaCirculo + " cm^2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Empezamos interacción con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}