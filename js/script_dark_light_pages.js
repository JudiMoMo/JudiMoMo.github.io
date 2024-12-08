document.getElementById('button_Light_Dark').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
     // Determinar si el modo oscuro está activo
     const isDarkTheme = document.body.classList.contains('dark-theme');
    cambiarIconosModoOscuro(isDarkTheme);
    // Establecer cookies según el tema
    if (isDarkTheme) {
        document.cookie = "cookie_theme_dark=true; path=/; max-age=31536000"; // Cookie para tema oscuro
        document.cookie = "cookie_theme_light=false; path=/; max-age=31536000"; // Desactivar tema claro
    } else {
        document.cookie = "cookie_theme_light=true; path=/; max-age=31536000"; // Cookie para tema claro
        document.cookie = "cookie_theme_dark=false; path=/; max-age=31536000"; // Desactivar tema oscuro
    }
});

// Detectar preferencia del sistema y aplicar la clase "dark-theme" si es necesario
window.addEventListener("load", function checkSystemPreference() {
    // Función para verificar cookies
    function getCookie(name) {
      const cookies = document.cookie.split('; ');
      const cookie = cookies.find(c => c.startsWith(`${name}=`));
      return cookie ? cookie.split('=')[1] : null;
    }
  
    // Comprobar si las cookies de tema están configuradas
    const themeLightCookie = getCookie('cookie_theme_light');
    const themeDarkCookie = getCookie('cookie_theme_dark');
  
    if (themeDarkCookie === "true") {
      // Si la cookie indica tema oscuro, aplicar el tema oscuro
      document.body.classList.add('dark-theme');
      cambiarIconosModoOscuro(true);
    } else if (themeLightCookie === "true") {
      // Si la cookie indica tema claro, asegurarse de que no esté el tema oscuro
      document.body.classList.remove('dark-theme');
      cambiarIconosModoOscuro(false);
    } else {
      // Si no hay cookies, seguir la preferencia del sistema
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
        cambiarIconosModoOscuro(true);
      } else {
        document.body.classList.remove('dark-theme');
        cambiarIconosModoOscuro(false);
      }
    }
  });
  

function cambiarIconosModoOscuro(isDarkMode) {
    // Esta es la manera menos efectiva
    let cart = document.getElementById('icon_cart');
    let user = document.getElementById('icon_user');
    let fav = document.getElementById('icon_fav');
    let button = document.getElementById('button_Light_Dark');

    if(isDarkMode){
        cart.src = '../../img/icons/icons8-carrito-de-compras-dark.png';
        user.src = '../../img/icons/icons8-usuario-dark.png';
        fav.src = '../../img/icons/icons8-favoritos-dark.png';
        button.src = '../../img/icons/icons8-día-y-noche-50-dark.png';
        let estrellas = document.getElementsByClassName("star-light");
        estrellas = Array.from(estrellas);
        console.log(estrellas)
        estrellas.forEach(estrella => {
            estrella.src = '../../img/icons/icons8-estrella-dark.png';
        });
        let user_icon = document.getElementsByClassName("icon_user");
        user_icon = Array.from(user_icon);
        user_icon.forEach(icono => {
            icono.src = '../../img/icons/icons8-usuario-dark.png';
        });

    }else{
        cart.src = '../../img/icons/icons8-carrito-de-compras-90-light.png';
        user.src = '../../img/icons/icons8-usuario-light.png';
        fav.src = '../../img/icons/icons8-favorito-50-light.png';
        button.src = '../../img/icons/icons8-día-y-noche-light.png';

        let estrellas = document.getElementsByClassName("star-light");
        estrellas = Array.from(estrellas);
        console.log(estrellas)
        estrellas.forEach(estrella => {
            estrella.src = '../../img/icons/icons8-estrella-50-dark.png';
        });
        let user_icon = document.getElementsByClassName("icon_user");
        user_icon = Array.from(user_icon);
        user_icon.forEach(icono => {
            icono.src = '../../img/icons/icons8-usuario-light.png';
        });
    }

}