const visitCounter = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-localStorage")) || 0;
let timeBeforeVisit = Number(window.localStorage.getItem("timeBeforeVisit-localStorage"));
currentVisitTime = Date.now();

if (numVisits !== 0 && (currentVisitTime - timeBeforeVisit) / 86400000 > 24) {
    visitCounter.textContent = `Last visit was ${Math.floor((currentVisitTime - timeBeforeVisit) / 86400000)} ago`
} else if (numVisits !== 0 && (currentVisitTime - timeBeforeVisit) / 86400000 < 24) {
    visitCounter.textContent = "Back so soon, Welcome again!";
} else {
    visitCounter.textContent = "Welcome to La Union Chamber of Commerce";
}

numVisits++;
timeBeforeVisit = currentVisitTime;

localStorage.setItem("numVisits-localStorage", numVisits);
localStorage.setItem("timeBeforeVisit-localStorage", timeBeforeVisit);