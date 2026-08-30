var RetanguloAnonimo = class { //Classe anônima:
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() { return this.base * this.altura; }
};

var RetanguloComNome = class Ret { //Classe com nome:
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() { return this.base * this.altura; }
};
var r1 = new RetanguloAnonimo(3, 4);
var r2 = new RetanguloComNome(4, 5);
//var r3 = new Ret(5, 6); -> ERRO!!!
document.write("Área do primeiro retângulo: " + r1.area() + "<br>");
document.write("Área do segundo retângulo: " + r2.area() + "<br>");
