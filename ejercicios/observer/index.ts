interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}


// va a recibir los cambios del precio del BC y les va a informar a sus observadores
class BitcoinPrice implements Subject {
    observers: Observer[] = []

    constructor(){
        const el: HTMLInputElement = document.querySelector("#value")
        el.addEventListener("input", () => {
            this.notify(el.value) // cuando cambie el input notificamos al los observadores
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex((obs) => {
            return obs === observer
        })
        this.observers.splice(index, 1)
    }

    // cuando el precio cambie queremos notificar a los observadores 
    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement

    constructor(){
        this.el = document.querySelector("#price")
    }

    // cada vez que el sujeto notifica a este observador modificamos el valor
    update(data: any) {
        this.el.innerText = data
    }
}

// instancias para suscribirnos al sujeto
const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display) // display esta suscrito a todos los cambios que notifica el sujeto (input)
setTimeout(
    () => value.unsubscribe(display),
    5000
)