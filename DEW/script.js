const DOM = {
    username: document.getElementById("username"),
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    category: document.getElementById("category"),
    birthYear: document.getElementById("birth-year"),
    showPassword: document.getElementById("show-password"),
    password: document.getElementById("password"),
    form: document.querySelector("form"),
    countTitle: document.getElementById("count_title"),
    countDescription: document.getElementById("count_description"),
    option_DNI_NIE: document.getElementById("dni"),
    dni: document.getElementById("dni_w")
}

//Añadir años
window.addEventListener("load", function () {
    Array.from({ length: 90 }, (_, i) => {
        const option = document.createElement('option');
        option.value = 2009 - i;
        option.textContent = 2009 - i;
        DOM.birthYear.appendChild(option); // o cualquier contenedor
    });
});



// Manejar el evento de envío del formulario
DOM.form.addEventListener('submit', (event) => {
    // Prevenir el envío real del formulario
    event.preventDefault();
    const inputs = DOM.form.querySelectorAll('input');
    let isValid = true;

    //Eliminar campos de error anteriores
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());

    // Validar los campos del formulario
    inputs.forEach(input => {
        if (input.value.trim() === '') { // Comprueba si el campo está vacío
            //const errorMessage = input.validationMessage;
            const errorMessage = "Rellena la información obligatoria";
            input.after(generateErrorMessage(errorMessage));
            isValid = false;
        }
    });

    //primero comprobamos si el dni es un dni o un nie y luego los validamos
    isValid = DOM.option_DNI_NIE.value === "dni" ? validateDni(DOM.dni.value) : validateNIE(DOM.dni.value);

    //Ahora comprobamos que mínimo un hobbie esté seleccionado
    const hobbies = document.querySelectorAll('input[name="hobbies"]');
    isValid = Array.from(hobbies).some(hobbie => hobbie.checked) ? isValid : false;
    if (!isValid) {
        const errorMessage = "Selecciona al menos un hobbie";
        document.getElementById("div_hobbies").after(generateErrorMessage(errorMessage)
        );
    }

    //enviar formulario si todo es válido
    if (isValid) {
        DOM.form.submit();
    }
});

function validateDni(dni) {
    const dni_regex = /^[0-9]{8}[a-zA-Z]{1}$/;
    let isValid = true;
    //Comprobamos que si el dni tiene el formato correcto
    isValid = dni_regex.test(dni) ? isValid : false;
    if (!isValid) {
        const errorMessage = "El DNI debe tener 8 números y una letra mayúscula";
        DOM.dni.after(generateErrorMessage(errorMessage));
    } else {
        //Comprobamos si el dni es un dni válido
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let number = dni.substring(0, dni.length - 1).replace('X', '0').replace('Y', '1').replace('Z', '2');
        //Cogemos la ultima letra y vemos si es correcta
        let letter = dni[dni.length - 1];
        letters[number % 23] === letter.toUpperCase() ? isValid = true : isValid = false;
        if (!isValid) {
            const errorMessage = "El DNI no es válido";
            DOM.dni.after(generateErrorMessage(errorMessage));
        }
    }
    return isValid;
}

function validateNIE(nie) {
    const nie_regex = /^[XYZ][0-9]{7}[A-Z]$/;
    let isValid = true;
    //Comprobamos que si el NIE tiene el formato correcto
    isValid = nie_regex.test(nie) ? isValid : false;
    if (isValid) {
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let number = nie.substring(0, nie.length - 1).replace('X', '0').replace('Y', '1').replace('Z', '2');
        console.log(number);
        //Cogemos la ultima letra y vemos si es correcta
        let letter = nie[nie.length - 1];
        console.log(letters[number % 23]);
        console.log(letter.toUpperCase());
        letters[number % 23] === letter.toUpperCase() ? isValid = true : isValid = false;
        if (!isValid) {
            const errorMessage = "El NIE no es válido";
            DOM.dni.after(generateErrorMessage(errorMessage));
        }
    }

    return isValid;
}

function generateErrorMessage(message) {
    const error = document.createElement("span");
    error.textContent = message;
    error.classList.add("error");
    return error;
}

DOM.showPassword.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});

//Cambio de palabras en el formulario
DOM.title.addEventListener("keydown", function (event) {
    let contador = document.getElementById("count_title");
    let variable = parseInt(contador.innerHTML.split("/")[0]);

    variable += (event.key === 'Backspace' || event.key === 'Delete') ? (variable <= 0 ? 0 : -1) : (variable < 15 ? 1 : 0);
    contador.innerHTML = `${variable}/15`

});

DOM.description.addEventListener("keydown", function (event) {
    let contador = document.getElementById("count_description");
    let variable = parseInt(contador.innerHTML.split("/")[0]);
    variable += (event.key === 'Backspace' || event.key === 'Delete') ? (variable <= 0 ? 0 : -1) : (variable < 120 ? 1 : 0);
    contador.innerHTML = `${variable}/120`
})