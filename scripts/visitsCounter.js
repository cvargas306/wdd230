const visitCounter = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-localStorage")) || 0;

if (numVisits !== 0) {
    visitCounter.textContent = numVisits;
} else {
    visitCounter.textContent = "This is your first visit. Welcome! 🎉";
}

numVisits++;

localStorage.setItem("numVisits-localStorage", numVisits);