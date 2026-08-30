class Retangulo {
    static #contador = 0;
    constructor() { #contador++; }
    get getContador() { return #contador; }
    get area(base, altura) {
        let resp = parseFloat(base) * parseFloat(altura); 
        return resp.toFixed(2);
    }
}

let ret1 = new Retangulo();
console.log("Contador: " + ret1.getContador);
console.log("Área: " + ret1.area(6, 7));

let ret2 = new Retangulo();
console.log("Contador: " + ret2.getContador);
console.log("Área: " + ret2.area(7, 8));
