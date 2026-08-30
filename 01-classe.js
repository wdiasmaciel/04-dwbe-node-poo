class Retangulo {
    //constructor(){}
    constructor(baseUSR, alturaUSR) { //Atualmente, JavaScript aceita apenas 1 construtor.
        this.base = baseUSR;
        this.altura = alturaUSR;
    }
    area() {
        return this.base * this.altura;
    }
}

retangulo = new Retangulo(6, 7);
console.log("Área: " + retangulo.area());  
