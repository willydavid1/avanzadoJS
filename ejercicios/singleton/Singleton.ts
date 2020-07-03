// Singleton tiene tres propiedades metodos | static significa que es un método que pertenece a la clase y no al objeto
class Singleton {
    private static instance: Singleton;

    private constructor() {
        // init
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }
}

export default Singleton;