document.addEventListener("scroll", function() {
    let containerNavBar = document.querySelector(".containerNavBar");
    let sectionUno = document.getElementById("seccionUno");

    // Calcula la posición de sectionUno
    let sectionUnoRect = sectionUno.getBoundingClientRect();

    // Agrega o quita la clase según la posición de scroll
    if (window.scrollY > sectionUnoRect.bottom) {
        containerNavBar.classList.add("fixed");
    } else {
        containerNavBar.classList.remove("fixed");
    }
});
