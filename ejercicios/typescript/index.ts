// Tipos:

// boolean. Valor verdadero o falso.
// number. Números.
// string. Cadenas de texto.
// string[]. Arreglo del tipo cadena de texto.
// Array. Arreglo multi-tipo, acepta cadenas de texto o números.
// enum. Es un tipo especial llamado enumeración.
// any. Cualquier tipo.
// object. Del tipo objeto.

// boolean
let muted: boolean = true

// number
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

// string
let nombre: string = "Willy"
let saludo = `Me llamo ${nombre}`

// Arrays
// string[]. Arreglo del tipo cadena de texto.
let people: string[] = []
people = ["Juan", "Daniela", "Raul"]

// Array. Arreglo multi-tipo, acepta cadenas de texto o números.
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push("Ricardo")
peopleAndNumbers.push(9001)

// enum. Es un tipo especial llamado enumeración. y se pueden inicializar los valores o por default empieza en 0
enum Color {
    Rojo = 1, // 0
    Verde, // 1
    Azul, // 2
    Amarrillo // 3
}
let colorFavorito: Color = Color.Rojo // 1
console.log("Mi color Favorito es " + colorFavorito)

// any. Cualquier tipo.
let comodin: any = "Joker"
comodin = { type: "Wildcard" }

// object. Del tipo objeto.
let someObject: object = { type: "Wildcard" }