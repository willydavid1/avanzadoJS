enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}

// Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no. | Se podria decir que se convierten en un type, como un contrato
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color // atributo opcional de la interface
}


let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rojo // opcional
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function name() {
    return this.color ? `Un rectangulo ${this.color}` : "Un rectangulo"
}
console.log(rect.toString())