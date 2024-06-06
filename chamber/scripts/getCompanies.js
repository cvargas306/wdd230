const companiesURL = "https://cvargas306.github.io/wdd230/chamber/data/members.json";

async function getCompanies(url) {
    try {
        const respons = await fetch(url);
        if (respons.ok) {

        } else {
            throw Error(await respons.text());
        }

        const data = await respons.json();
        // console.table(data);
        displayCompanies(data);
    } catch (error) {
        console.log(error);
    }

}

function displayCompanies(companies) {
    const artical = document.querySelector("#directory");
    companies.members.forEach(member => {
        const section = document.createElement("section");

        const name = document.createElement("h2");
        name.textContent = member.name;
        const address = document.createElement("p");
        address.textContent = member.address;
        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = member.phoneNumber;
        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = member.name;
        const image = document.createElement("img");
        image.src = member.image;
        image.alt = "company logo";
        const membershipLevel = document.createElement("h3");
        membershipLevel.textContent = member.membershipLevel;
        switch (member.membershipLevel) {
            case "bronze": {
                membershipLevel.classList.add("bronze");
                break;
            }
            case "silver": {
                membershipLevel.classList.add("silver");
                break;
            }
            case "gold": {
                membershipLevel.classList.add("gold");
                break;
            }
            default: {
                break;
            }
        }


        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(website);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(membershipLevel);

        artical.appendChild(section);
    });
}

getCompanies(companiesURL);