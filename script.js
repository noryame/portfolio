// On attend que la page et toutes les bibliothèques soient 100% chargées
window.addEventListener('load', function() {
    
    // Vérification de sécurité pour éviter le crash de la console
    if (typeof tsParticles !== 'undefined') {
        
        tsParticles.load("tsparticles", {
            fpsLimit: 120,
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: "#8b5cf6" /* Violet */
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.4
                },
                size: {
                    value: { min: 1, max: 3 }
                },
                links: {
                    enable: true, /* Active les fibres */
                    distance: 150,
                    color: "#6366f1", /* Indigo */
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                        default: "out"
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse" /* La souris repousse les fibres */
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 120,
                        duration: 0.4
                    }
                }
            },
            detectRetina: true,
            background: {
                color: "transparent"
            }
        });

    } else {
        console.error("La bibliothèque tsParticles ne s'est pas chargée correctement.");
    }

});