/* This function specifically sets up the animated star background: it defines the teal color, 
   the slow drifting speed, and the interactive 'grab' effect when the mouse hovers over stars. */
export function initParticles() {
    
    if (typeof tsParticles !== 'undefined' && document.getElementById("tsparticles")) {
        
        tsParticles.load("tsparticles", {
            fpsLimit: 60, 
            particles: {
                // This specifically controls how many stars appear and their teal color
                number: { 
                    value: 40, 
                    density: { enable: true, area: 800 } 
                },
                color: { value: "#2dd4bf" }, 
                shape: { type: "circle" },
                // This specifically makes some stars dimmer than others for a realistic depth
                opacity: { 
                    value: 0.2, 
                    random: true 
                },
                size: { value: { min: 1, max: 3 } },
                // This specifically handles the slow, random drifting movement
                move: { 
                    enable: true, 
                    speed: 0.6, 
                    direction: "none", 
                    random: true, 
                    straight: false, 
                    outModes: { default: "out" } 
                }
            },
            interactivity: {
                detectsOn: "canvas",
                // This specifically triggers the 'grab' effect when your mouse moves
                events: { 
                    onHover: { enable: true, mode: "grab" } 
                },
                modes: { 
                    grab: { 
                        distance: 140, 
                        links: { opacity: 0.3 } 
                    } 
                }
            },
            retina_detect: true 
        });
    }
}