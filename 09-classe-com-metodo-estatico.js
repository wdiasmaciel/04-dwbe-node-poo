class Retangulo {
    static area(base, altura) {
        return (parseFloat(base) * parseFloat(altura)).toFixed(2);
    }
}

console.log("Área: " + Retangulo.area(6, 7));
