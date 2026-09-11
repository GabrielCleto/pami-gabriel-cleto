function MultiplicaNumeros() {
    let n1 = 2;
    let n2 = 3;

    console.log(n1 * n2);
}

MultiplicaNumeros();


function MultiplicarParametros(v1, v2) {
    console.log(v1, "x", v2, "=", v1 * v2);
}

MultiplicarParametros(2, 3);
MultiplicarParametros(1, 3);
MultiplicarParametros(4, 3);


function EquacaoDeBurrinho(x, y, z) {
    let resultado = (x + y) / z;
    return resultado;
}

console.log(EquacaoDeBurrinho(2, 3, 5));

const EquacaoDeToninho = (x, y, z, w) => {
    return (x+y)*(z+w)/2 ;
}

console.log("o Resultado é:"), EquacaoDeToninho