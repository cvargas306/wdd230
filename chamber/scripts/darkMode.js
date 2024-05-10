const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const sections = document.querySelector(".sections");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        modeButton.textContent = "🔆";
        sections.style.background = "#000";
        sections.style.color = "#fff";
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        modeButton.textContent = "🕶️";
        sections.style.background = "#eee";
        sections.style.color = "#000";
    }
});
