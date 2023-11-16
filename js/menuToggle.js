// Obtén el elemento con el id "toggle"
let toggleButton = document.getElementById("toggle");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function() {
    // Toggle de la clase "on" en el botón
    if (toggleButton.classList.contains("on")) {
        toggleButton.classList.remove("on");
    } else {
        toggleButton.classList.add("on");
    }

    // Obtén el elemento con el id "menu"
    let menu = document.getElementById("menu");

    // Alternar la visibilidad del menú
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
