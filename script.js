document.addEventListener('DOMContentLoaded', () => {
    // --- tsParticles Configuration ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: { color: "transparent" },
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#9ca3af" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: 1.5, random: true },
            links: { enable: true, distance: 150, color: "rgba(156, 163, 175, 0.3)", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 0.8, direction: "none", outModes: { default: "out" } }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 140, links: { opacity: 0.7 } } }
        },
        detectRetina: true,
    });

    // --- Language Toggling Logic ---
    const langToggle = document.getElementById('lang-toggle');
    const htmlEl = document.documentElement;
    const cards = document.querySelectorAll('.card');

    function setLanguage(lang) {
        if (lang === 'en') {
            htmlEl.lang = 'en';
            htmlEl.dir = 'ltr';
            htmlEl.classList.add('lang-is-en');
            langToggle.textContent = 'FA'; // Show option to switch to Farsi
        } else {
            htmlEl.lang = 'fa';
            htmlEl.dir = 'rtl';
            htmlEl.classList.remove('lang-is-en');
            langToggle.textContent = 'EN'; // Show option to switch to English
        }
        localStorage.setItem('language', lang);
    }

    langToggle.addEventListener('click', () => {
        const currentLang = htmlEl.lang === 'fa' ? 'en' : 'fa';
        
        // 1. Start fading out
        cards.forEach(card => card.classList.add('fading-out'));

        // 2. Wait for fade-out to finish, then switch content
        setTimeout(() => {
            setLanguage(currentLang);
            
            // 3. Remove fading class to allow fade-in
            // Use another timeout to ensure the DOM has updated before fading in
            setTimeout(() => {
                 cards.forEach(card => card.classList.remove('fading-out'));
            }, 50);

        }, 300); // This duration should match the opacity transition in CSS
    });

    // On initial load, check for saved language
    const savedLang = localStorage.getItem('language') || 'fa'; // Default to Farsi
    setLanguage(savedLang);
});