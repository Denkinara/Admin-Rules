document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const liveModeToggle = document.getElementById("liveModeToggle");
    const body = document.body;

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "Light Mode";
        } else {
            darkModeToggle.textContent = "Dark Mode";
        }
    });

    // Live Mode Toggle Effect
    liveModeToggle.addEventListener("click", () => {
        if (!body.classList.contains("live-effect")) {
            body.classList.add("live-effect");
            const liveEffect = document.createElement("div");
            liveEffect.classList.add("live-mode-overlay");
            document.body.appendChild(liveEffect);
            setTimeout(() => {
                liveEffect.remove();
                body.classList.remove("live-effect");
            }, 3000);
        }
    });
});

// CSS for Live Mode Effect
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .live-mode-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 204, 0, 0.1);
            animation: flashEffect 1s infinite alternate;
            pointer-events: none;
        }
        @keyframes flashEffect {
            0% { background: rgba(255, 204, 0, 0.1); }
            100% { background: rgba(255, 204, 0, 0.3); }
        }
    </style>
`);