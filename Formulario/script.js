// Seleccionar el formulario
const form = document.getElementById('user-form');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function (event) {
  // Prevenir el envío real del formulario
  event.preventDefault();

  alert("algo");
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
  alert(`Datos enviados: ${JSON.stringify(jsonObject, null, 2)}`);
});