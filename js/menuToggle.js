// Obtén el elemento con el id "toggle"
let toggleButton = document.getElementById("toggle");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function () {
    // Toggle de la clase "on" en el botón
    toggleButton.classList.toggle("on");

    // Obtén el elemento con el id "menu"
    let menu = document.getElementById("menu");

    // Alternar la visibilidad del menú con transición lateral suave
    menu.classList.toggle("show");
});

// Función para cerrar el menú de manera consistente
function closeMenu() {
    let menu = document.getElementById("menu");
    
    // Remueve las clases para iniciar la animación de cierre
    menu.classList.remove("show");
    toggleButton.classList.remove("on");
}

// Obtén todos los elementos con la clase "itemMenuMobile"
let menuItems = document.querySelectorAll(".itemMenuMobile");

// Agrega un controlador de eventos a cada elemento de menú para cerrar el menú cuando se hace clic
menuItems.forEach(item => {
    item.addEventListener("click", function () {
        closeMenu();
    });
});

// Cerrar menú con tecla Escape
window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeMenu();
    }
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    let menu = document.getElementById("menu");
    let isClickInsideMenu = menu.contains(event.target);
    let isClickOnToggle = toggleButton.contains(event.target);
    
    // Si el clic no fue dentro del menú ni en el botón toggle, cerrar el menú
    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains("show")) {
        closeMenu();
    }
});