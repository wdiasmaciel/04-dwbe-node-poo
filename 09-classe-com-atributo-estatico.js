class Retangulo {
    static contador = 0;
    constructor(base, altura) { 
        Retangulo.contador++; 
        this.base = base;
        this.alura = altura;
    }
    get getContador() { return Retangulo.contador; }
    get area() {
        let resp = parseFloat(base) * parseFloat(altura); 
        return resp.toFixed(2);
    }
}

let ret1 = new Retangulo(6, 7);
console.log("Contador: " + ret1.getContador);
console.log("Área: " + ret1.area);

let ret2 = new Retangulo(7, 8);
console.log("Contador: " + ret2.getContador);
console.log("Área: " + ret2.area);
