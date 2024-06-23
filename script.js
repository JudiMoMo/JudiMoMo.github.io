
//Ponerle evento a todos los folletos
let folletos = document.getElementsByClassName('folleto');

for (let folleto of folletos) {
    folleto.addEventListener('click', cambiarPosicion);
    folleto.addEventListener('mouseover', hoverAMano, true);
    folleto.addEventListener('mouseout', hoverAMano, false)
}

function hoverAMano(event) {
    if (event.type === 'mouseover') {
        this.classList.add('hover');
      } else if (event.type === 'mouseout') {
        this.classList.remove('hover');
      }
}

function cambiarPosicion() {
    // Para hacer esta parte lo mejor sería coger al principal
    //e intercambiarlos, la transicion ya veremos como hacerla mas adelante

    let objetoActual = this;
    if (objetoActual.classList.contains('principal')) {
        return;
    } else {
        let padre = objetoActual.parentElement; //el id del padre con esto sabemos que principal coger

        let principal = padre.querySelector('.principal');
        let derecha = padre.querySelector('.derecha');
        let izquierda = padre.querySelector('.izquierda');

        principal.classList.remove('hover');
        derecha.classList.remove('hover');
        izquierda.classList.remove('hover');


        if (objetoActual.classList.contains('derecha')) {

            // Primero hacemos el movimiento y ya luego añadimos la sclases
            principal.classList.add('moviendo-derecha');

            objetoActual.classList.remove('derecha');
            objetoActual.classList.add('moviendo-principal-derecha');


            // Esperar a que termine la animación antes de reasignar las clases
            setTimeout(function () {
                objetoActual.classList.remove('moviendo-principal-derecha');
                principal.classList.remove('principal');
                principal.classList.remove('moviendo-derecha');
                principal.classList.add('derecha');
                objetoActual.classList.add('principal');

            }, 2000);

        } else if (objetoActual.classList.contains('izquierda')) {

            // Primero hacemos el movimiento y ya luego añadimos la sclases
            principal.classList.add('moviendo-izquierda');

            objetoActual.classList.remove('izquierda');
            objetoActual.classList.add('moviendo-principal-izquierda');


            // Esperar a que termine la animación antes de reasignar las clases
            setTimeout(function () {
                objetoActual.classList.remove('moviendo-principal-izquierda');
                principal.classList.remove('principal');
                principal.classList.remove('moviendo-izquierda');
                principal.classList.add('izquierda');
                objetoActual.classList.add('principal');

            }, 2000);
        }
        principal.classList.remove('disable-hover');
        derecha.classList.remove('disable-hover');
        izquierda.classList.remove('disable-hover');
    }

    // let principal = padre.querySelector('.principal'); //cogemos el principal del bloque que tenemos
    // principal.classList.remove('principal');
    // if (objetoActual.classList.contains('derecha')) {
    //     objetoActual.classList.add('principal');
    //     objetoActual.classList.remove('derecha');

    //     principal.classList.add('derecha');
    //     console.log("se mueve");

    // } else if (objetoActual.classList.contains('izquierda')) {
    //     objetoActual.classList.add('principal');
    //     objetoActual.classList.remove('izquierda');

    //     principal.classList.add('izquierda');
    // }

    // principal.classList.remove('principal');

    // }
}