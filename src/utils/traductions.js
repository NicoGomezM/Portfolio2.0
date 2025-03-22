export default function traduction(translations) {
    let currentLanguage = localStorage.getItem('language') || 'es';
    if (!translations[currentLanguage]) {
        console.warn(`El idioma "${currentLanguage}" no está definido en translations. Usando "es" como predeterminado.`);
        currentLanguage = 'es'; // Idioma predeterminado
    }

    console.log(`Idioma actual: ${currentLanguage}`);

    function updateTexts() {
        const languageElements = document.querySelectorAll('[data-key]');
        languageElements.forEach(element => {
            const key = element.dataset.key;
            if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            } else if (key) {
                // console.warn(`No se encontró la traducción para la clave: "${key}" en el idioma: "${currentLanguage}"`);
            }
        });
    }

    // Configurar el botón de cambio de idioma
    const languageButton = document.querySelector('[data-key="language"]');
    if (languageButton && languageButton.parentElement?.parentElement) {
        const supportedLanguages = ['es', 'en', 'ja']; // Agrega más idiomas aquí
        let currentIndex = supportedLanguages.indexOf(currentLanguage);

        languageButton.parentElement.parentElement.addEventListener("click", function (e) {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % supportedLanguages.length;
            currentLanguage = supportedLanguages[currentIndex];
            localStorage.setItem('language', currentLanguage);

            // Actualizar textos en la página actual
            updateTexts();

            // Disparar evento global
            window.dispatchEvent(new CustomEvent('languageChange', {
                detail: { language: currentLanguage }
            }));
        });
    } else {
        console.warn('El botón de cambio de idioma no se encontró en el DOM.');
    }

    // Escuchar el evento global para actualizar textos en otras páginas/componentes
    window.addEventListener('languageChange', (event) => {
        currentLanguage = event.detail.language || 'es';
        updateTexts();
    });

    // Observar cambios en el DOM
    const observer = new MutationObserver(() => {
        updateTexts();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cargar textos iniciales
    updateTexts();
}