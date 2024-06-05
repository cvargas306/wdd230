const baseURL = "https://cvargas306.github.io/wdd230/";
const linksURL = "https://cvargas306.github.io/wdd230/data/links.json";

async function getLinks(url) {
    try {
        const respons = await fetch(url);
        if (respons.ok) {

        } else {
            throw Error(await respons.text());
        }
        
        const data = await respons.json();
        console.table(data);
        displayLinks(data);
    } catch (error) {
        console.log(error);
    }
    
}

function displayLinks(links) {
    const card = document.querySelector("#assignments");
    const ul = document.createElement("ul");
    links.weeks.forEach(week => {
        const li = document.createElement("li");
        li.classList.add("week");
        li.textContent = week.week + ": ";
        week.links.forEach(link => {
            const a = document.createElement("a");
            a.ariaLabel = "assignment";
            a.href = link.url;
            a.textContent = link.title;
            li.appendChild(a);
            li.innerHTML += " | ";
        })
        ul.appendChild(li);
        card.appendChild(ul);
    });
}

getLinks(linksURL);