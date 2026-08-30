class Retangulo {
    //constructor(){} //Atualmente, JavaScript aceita apenas 1 construtor.
    constructor(baseUSR, alturaUSR) { //Atualmente, JavaScript aceita apenas 1 construtor.
        this.base = baseUSR;
        this.altura = alturaUSR;
    }
    area() {
        return this.base * this.altura;
    }
}

let retangulo = new Retangulo(6, 7);
console.log("Área: " + retangulo.area());  
