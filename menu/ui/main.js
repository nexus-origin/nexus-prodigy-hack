// Create the open button
const menuButton = document.createElement("button");
menuButton.id = "menuButton";
menuButton.innerHTML = "☰";
document.body.appendChild(menuButton);

// Create Menu
const menuContainer = document.createElement("div");
menuContainer.id = "menuContainer";
menuContainer.innerHTML = 
    `<div id="particles-js"></div>
    <div id="menuContent">
        <h1 class="glow-text">🚀 Nexus Origon Hack Menu 🚀</h1>
        <div class="menu-grid">
            <button class="menu-btn" id="setGoldBtn">Set Gold</button>
            <button class="menu-btn">Set Tower</button>
            <button class="menu-btn">Set Level</button>
            <button class="menu-btn">Set Bounty</button>
            <button class="menu-btn">Set Member Stars</button>
            <button class="menu-btn">Set Grade</button>
            <button class="menu-btn">Set Walkspeed</button>
            <button class="menu-btn">Player Teleporter [BETA]</button>
            <button class="menu-btn">Skip Tutorial</button>
        </div>
        <button id="closeMenu">✖</button>
    </div>`;

document.body.appendChild(menuContainer);

// Add styles
const style = document.createElement("style");
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
    body {
        margin: 0;
        font-family: 'Orbitron', sans-serif;
        overflow: hidden;
        background: black;
    }
    #menuButton {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 70px;
        height: 70px;
        font-size: 32px;
        background: rgba(138, 43, 226, 0.8);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 15px rgba(138, 43, 226, 1);
        transition: 0.3s;
        font-weight: bold;
    }
    #menuButton:hover {
        box-shadow: 0 0 30px rgba(138, 43, 226, 1);
        transform: scale(1.1);
    }
    #menuContainer {
        position: fixed;
        top: -100vh;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: top 0.6s ease-in-out;
    }
    #menuContent {
        position: relative;
        background: rgba(20, 20, 40, 0.9);
        padding: 50px;
        border-radius: 15px;
        text-align: center;
        color: white;
        box-shadow: 0 0 30px rgba(0, 183, 255, 0.8);
        width: 75vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        opacity: 0;
        transform: translateY(-50px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    .glow-text {
        font-size: 42px;
        text-shadow: 0 0 20px #00b7ff, 0 0 30px #8a2be2;
    }
    .menu-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        margin-top: 30px;
    }
    .menu-btn {
        background: rgba(138, 43, 226, 0.8);
        color: white;
        padding: 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 22px;
        font-weight: bold;
        transition: 0.3s;
        box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
    }
    .menu-btn:hover {
        background: rgba(138, 43, 226, 1);
        box-shadow: 0 0 30px rgba(138, 43, 226, 1);
        transform: scale(1.1);
    }
    #closeMenu {
        position: absolute;
        top: 20px;
        right: 20px;
        background: red;
        border: none;
        color: white;
        font-size: 26px;
        cursor: pointer;
        padding: 12px;
        border-radius: 50%;
        transition: 0.3s;
    }
    #closeMenu:hover {
        background: darkred;
        box-shadow: 0 0 15px red;
    }
    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
`;

document.head.appendChild(style);

// Add event listeners
menuButton.addEventListener("click", () => {
    menuContainer.style.top = "0";
    setTimeout(() => {
        document.getElementById("menuContent").style.opacity = "1";
        document.getElementById("menuContent").style.transform = "translateY(0)";
        document.getElementById("particles-js").style.opacity = "1"; // Particles fade in
    }, 300);
});

document.getElementById("closeMenu").addEventListener("click", () => {
    document.getElementById("menuContent").style.opacity = "0";
    document.getElementById("menuContent").style.transform = "translateY(-50px)";
    document.getElementById("particles-js").style.opacity = "0"; // Particles fade out
    setTimeout(() => {
        menuContainer.style.top = "-100vh";
    }, 500);
});

// Load Particles.js script dynamically
const particlesScript = document.createElement("script");
particlesScript.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
particlesScript.onload = () => {
    particlesJS("particles-js", {
        particles: {
            number: { value: 150 },
            color: { value: "#8a2be2" },
            shape: { type: "circle" },
            opacity: { value: 0, anim: { enable: true, speed: 1, opacity_min: 0.6 } },
            size: { value: 3 },
            move: { speed: 2, direction: "none", random: true },
            line_linked: { enable: true, distance: 150, color: "#8a2be2", opacity: 0.6, width: 1 },
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 120 },
                push: { particles_nb: 5 },
            },
        },
    });
};
document.head.appendChild(particlesScript);
