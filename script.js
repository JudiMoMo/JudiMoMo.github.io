//Añadir años
window.addEventListener("load", function () {
    select = document.getElementById("birth-year");
    Array.from({ length: 90 }, (_, i) => {
        const option = document.createElement('option');
        option.value = 2023 - i;
        option.textContent = 2023 - i;
        select.appendChild(option); // o cualquier contenedor
    });
});

// Seleccionar el formulario
const form = document.querySelector('form');

// Manejar el evento de envío del formulario
form.addEventListener('submit', (event) => {
    // Prevenir el envío real del formulario
    event.preventDefault();

    // Crear un objeto FormData con los datos del formulario
    const formData = new FormData(form);


    // Convertir FormData en un objeto JSON
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    // Mostrar el objeto JSON en la consola
    console.log(JSON.stringify(jsonObject, null, 2));

    // Mostrarlo como un alerta (opcional)
    alert(`Datos enviados: ${JSON.stringify(jsonObject, null, 6)}`);
});

document.getElementById("show-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

//Cambio de palabras en el formulario
document.getElementById("title").addEventListener("keydown", function (event) {
    let contador = document.getElementById("count_title");
    let variable = parseInt(contador.innerHTML.split("/")[0]);

    variable += (event.key === 'Backspace' || event.key === 'Delete') ? (variable <=0 ? 0:-1) : (variable < 15 ? 1:0);
    contador.innerHTML = `${variable}/15`
    

});