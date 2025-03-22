export default function controlPopUp (document) {
    const aboutButton = document.getElementById("aboutButton");
    const cvButton = document.getElementById("cvButton");
    const contactButton = document.getElementById("contactButton");

    const aboutPopup = document.getElementById("popupAbout");
    const cvPopup = document.getElementById("popupCV");
    const contactPopup = document.getElementById("popupContact");

    const closePopupAbout = document.getElementById("closePopupAbout");
    const closePopupCV = document.getElementById("closePopupCV");
    const closePopupContact = document.getElementById("closePopupContact");

    // Verifica que los elementos existan
    if (!aboutButton || !aboutPopup || !closePopupAbout) {
        console.error("El botón o el pop-up 'Acerca de' no se encontraron en el DOM.");
    } else {
        console.log("Botón y pop-up 'Acerca de' encontrados.");
    }

    if (!cvButton || !cvPopup || !closePopupCV) {
        console.error("El botón o el pop-up 'CV' no se encontraron en el DOM.");
    } else {
        console.log("Botón y pop-up 'CV' encontrados.");
    }

    if (!contactButton || !contactPopup || !closePopupContact) {
        console.error("El botón o el pop-up 'Contacto' no se encontraron en el DOM.");
    } else {
        console.log("Botón y pop-up 'Contacto' encontrados.");
    }

    // Eventos para el pop-up "Acerca de"
    if (aboutButton && aboutPopup && closePopupAbout) {
        aboutButton.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("aboutButton presionado");
            aboutPopup.style.display = "flex"; // Mostrar el pop-up
        });

        closePopupAbout.addEventListener("click", () => {
            aboutPopup.style.display = "none"; // Ocultar el pop-up
        });

        aboutPopup.addEventListener("click", (event) => {
            if (event.target === aboutPopup) {
                aboutPopup.style.display = "none"; // Cerrar al hacer clic fuera del contenido
            }
        });
    }

    // Eventos para el pop-up "CV"
    if (cvButton && cvPopup && closePopupCV) {
        cvButton.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("cvButton presionado");
            cvPopup.style.display = "flex"; // Mostrar el pop-up
        });

        closePopupCV.addEventListener("click", () => {
            cvPopup.style.display = "none"; // Ocultar el pop-up
        });

        cvPopup.addEventListener("click", (event) => {
            if (event.target === cvPopup) {
                cvPopup.style.display = "none"; // Cerrar al hacer clic fuera del contenido
            }
        });
    }

    // Eventos para el pop-up "Contacto"
    if (contactButton && contactPopup && closePopupContact) {
        contactButton.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("contactButton presionado");
            contactPopup.style.display = "flex"; // Mostrar el pop-up
        });

        closePopupContact.addEventListener("click", () => {
            contactPopup.style.display = "none"; // Ocultar el pop-up
        });

        contactPopup.addEventListener("click", (event) => {
            if (event.target === contactPopup) {
                contactPopup.style.display = "none"; // Cerrar al hacer clic fuera del contenido
            }
        });
    }
}