class Field {
    errors: string[];
    input: HTMLInputElement;
  
    constructor(input: HTMLInputElement) {
      this.input = input;
      this.errors = [];
  
      let errorMessage = document.createElement('p');
      errorMessage.className = 'text-danger';
      this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);
  
      this.input.addEventListener('input', () => {
        this.errors = [];
        this.validate();
        errorMessage.innerText = this.errors[0] || '';
      });
    }
  
    validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
    let validate = field.validate

    // nuevo valor field.validate de la instancia, no de la clase
    field.validate = function() {
        validate()
        let value = field.input.value
        if (!value) {
            field.errors.push("Requerido")
        }
    }
    return field;
}

function EmailFieldDecorator(field: Field): Field {
    let validate = field.validate

    // nuevo valor field.validate de la instancia, no de la clase
    field.validate = function() {
        validate() //llama al metodo validate() del Field anterior el de la clase original o de los decoradores
        let value = field.input.value
        if (value.indexOf("@") === -1) { //si no encontro el caracter @
            field.errors.push("Debe ser un email")
        }
    }
    return field;
}

// aplicamos los decoradores el orden importa | y las clases originales deben estar cerradas para modificar pero abiertas para ser extendidas
let field = new Field(document.querySelector('#email'))
field = RequiredFieldDecorator(field) //RequiredFieldDecorator retorna un Field 
field = EmailFieldDecorator(field)

