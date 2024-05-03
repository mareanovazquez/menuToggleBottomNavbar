document.addEventListener("scroll", function () {
    let navBarDesktop = document.getElementById('navbar-desktop')
    let sectionUno = document.getElementById("seccionUno");

    // Calcula la posición de sectionUno
    let sectionUnoRect = sectionUno.offsetTop + sectionUno.offsetHeight;
    
    // Agrega o quita la clase según la posición de scroll
    if (window.scrollY > sectionUnoRect) {

        navBarDesktop.classList.add("fixed");
    } else {
        navBarDesktop.classList.remove("fixed");
    }
});
