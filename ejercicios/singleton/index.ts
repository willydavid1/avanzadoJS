import Singleton from "./Singleton"

// el constructor es privado y el metodo publico es getIntance para poder obtener la instancia
const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log("A es igual a B? ", a === b) // si es verdad Singleton esta exportando una sola instancia

