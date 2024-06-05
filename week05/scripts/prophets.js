const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.table(data.prohets);
            displayProphets(data.prophets);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");


        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${fullName.textContent}'s portrait`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "310");
        portrait.setAttribute("height", "415");

        card.classList.add("card");
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData(url);