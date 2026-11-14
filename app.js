document.addEventListener("DOMContentLoaded", () => {
    const btnCarta = document.getElementById("btn-carta");
    const cartaContenido = document.getElementById("carta-contenido");

    btnCarta.addEventListener("click", () => {
        cartaContenido.classList.toggle("visible");
        if (cartaContenido.classList.contains("visible")) {
            btnCarta.textContent = "Guardar mi carta 💌";
            lluviaEspecial(20);
        } else {
            btnCarta.textContent = "Lee lo que siente mi corazón por ti 💌";
        }
    });

    const elementosInteractivos = document.querySelectorAll(".marco-foto, .tarjeta-amor");
    elementosInteractivos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            lluviaEspecial(10);
        });
    });

    const contenedorParticulas = document.getElementById("particulas-container");
    const colores = ["#14B8A6", "#5EEAD4", "#E11D48", "#FDA4AF"];

    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("particula");
        corazon.innerHTML = "♥";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.color = colores[Math.floor(Math.random() * colores.length)];
        corazon.style.fontSize = (Math.random() * 16 + 12) + "px";
        
        const duracion = Math.random() * 4 + 5;
        corazon.style.animationDuration = duracion + "s";
        contenedorParticulas.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, duracion * 1000);
    }

    function lluviaEspecial(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            setTimeout(crearCorazon, i * 80);
        }
    }

    setInterval(crearCorazon, 600);
});