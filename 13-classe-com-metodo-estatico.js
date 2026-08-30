class Retangulo {
    static area(base, altura) {
        let resp = parseFloat(base) * parseFloat(altura); 
        return resp.toFixed(2);
    }
}

console.log("Área: " + Retangulo.area(6, 7));
