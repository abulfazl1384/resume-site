document.addEventListener('DOMContentLoaded', () => {
    // --- tsParticles Configuration ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: {
            color: "transparent"
        },
        particles: {
            number: {
                value: 40, // Reduced for a subtler effect
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#9ca3af" // A neutral color that works on both themes
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.4,
                random: true
            },
            size: {
                value: 1.5,
                random: true
            },
            links: { // Changed from line_linked
                enable: true,
                distance: 150,
                color: "rgba(156, 163, 175, 0.3)",
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8, // Slower speed
                direction: "none",
                outModes: { // Changed from out_mode
                    default: "out"
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab" // A gentler hover effect
                },
                onClick: {
                    enable: false,
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: { // Changed from line_linked
                        opacity: 0.7
                    }
                },
                repulse: {
                    distance: 100
                }
            }
        },
        detectRetina: true,
    });

    // --- Theme Toggling Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const docElement = document.documentElement; // Target <html> element

    function applyTheme(theme) {
        if (theme === 'dark') {
            docElement.classList.add('dark-mode');
        } else {
            docElement.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', () => {
        const isDarkMode = docElement.classList.contains('dark-mode');
        applyTheme(isDarkMode ? 'light' : 'dark');
    });

    // Initial theme is set by the inline script in <head>
    // This just ensures the button icon is correct on load
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(currentTheme);
});