document.addEventListener('DOMContentLoaded', () => {
    // --- tsParticles Configuration ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: { color: "transparent" },
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#9ca3af" },
            opacity: { value: 0.4, random: true },
            size: { value: 1.5, random: true },
            links: { enable: true, distance: 150, color: "rgba(156, 163, 175, 0.3)", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 0.8, direction: "none", outModes: { default: "out" } }
        },
        interactivity: { events: { onHover: { enable: true, mode: "grab" } } },
        detectRetina: true,
    });

    // --- Language Toggling Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    const htmlEl = document.documentElement;
    const cards = document.querySelectorAll('.card');

    function applyLanguage(lang) {
        htmlEl.lang = lang;
        htmlEl.dir = lang === 'fa' ? 'rtl' : 'ltr';
        langToggleBtn.textContent = lang === 'fa' ? 'EN' : 'FA';
        localStorage.setItem('portfolio-lang', lang);
    }

    langToggleBtn.addEventListener('click', () => {
        const newLang = htmlEl.lang === 'fa' ? 'en' : 'fa';
        
        // 1. Add fade-out class to all cards
        cards.forEach(card => card.classList.add('fading'));

        // 2. After animation, switch language and fade back in
        setTimeout(() => {
            applyLanguage(newLang);
            cards.forEach(card => card.classList.remove('fading'));
        }, 300); // Must match transition duration in CSS
    });

    // --- Initial Language Setup ---
    // Get language from storage or default to Farsi
    const initialLang = localStorage.getItem('portfolio-lang') || 'fa';
    applyLanguage(initialLang);
});