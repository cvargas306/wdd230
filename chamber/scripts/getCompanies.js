const companiesURL = "https://cvargas306.github.io/wdd230/chamber/data/members.json";

async function getCompanies(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCompanies(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCompanies(companies) {
    const directory = document.querySelector("#directory");
    directory.innerHTML = ""; // Clear existing content
    companies.members.forEach(member => {
        const section = document.createElement("section");

        const name = document.createElement("h2");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = member.phoneNumber;

        const website = document.createElement("a");
        website.href = member.websiteURL;
        website.textContent = member.name;
        website.target = "_blank";

        const image = document.createElement("img");
        image.src = member.image;
        image.alt = `${member.name} logo`;

        const membershipLevel = document.createElement("h3");
        membershipLevel.textContent = member.membershipLevel;

        switch (member.membershipLevel) {
            case "bronze":
                membershipLevel.classList.add("bronze");
                break;
            case "silver":
                membershipLevel.classList.add("silver");
                break;
            case "gold":
                membershipLevel.classList.add("gold");
                break;
            default:
                break;
        }

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(website);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(membershipLevel);

        directory.appendChild(section);
    });
}

getCompanies(companiesURL);

document.getElementById('grid').addEventListener('click', () => {
    document.getElementById('directory').classList.add('grid');
    document.getElementById('directory').classList.remove('list');
});

document.getElementById('list').addEventListener('click', () => {
    document.getElementById('directory').classList.add('list');
    document.getElementById('directory').classList.remove('grid');
});