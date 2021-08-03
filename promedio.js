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