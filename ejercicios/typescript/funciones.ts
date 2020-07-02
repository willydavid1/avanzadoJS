function add(a: number, b: number): number {
    return a + b
}
const sum = add(4, 6)


// funciones generadoras que retornan otra funcion | retorna una funcion qie recibe un numero y retorna un numero
function createAdder(a:number): (number) => number  {
    return function (b:number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)


// funciones parametros opcionales | var ?: TYPE eso indica que el parametro es opcional 
function fullName(firstName?: string, lastName: string = "Valor por default"): string {
    return `${firstName} ${lastName}`
}
const willy = fullName('Willy')
// console.log(willy)