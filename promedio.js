/*const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
   sumaLista1 = sumaLista1 + lista1[i]
}

const promedioLista1 = sumaLista1 / lista1.length;*/

function calcularPromedio(lista) {
    /*let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
       sumaLista = sumaLista + lista[i]
    }*/

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Código de la mediana

const listaMediana1 = [
    100,
    200,
    500,
    4000000000,
];

const mitadLista1 = parseInt(listaMediana1.length /2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(listaMediana1.length)) {
  const elemento1 = listaMediana1[mitadLista1 - 1];
  const elemento2 = listaMediana1[mitadLista1];

  const promedioElemento1y2 = calcularPromedio([
      elemento1,
      elemento2,
  ]); 

  mediana = promedioElemento1y2;
} else {
    mediana = listaMediana1[mitadLista1];
}

// Código de la moda

const listaModa1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

listaModa1.map(
    function (elemento) {
        if (lista1Count[elemento])  {
            lista1Count[elemento] = lista1Count[elemento] + 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
       return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

