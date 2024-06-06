document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeBannerButton = document.getElementById("close-banner");
    const spotlightContainer = document.getElementById("spotlight");
    const membersURL = "https://cvargas306.github.io/wdd230/chamber/data/members.json";


    

    
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = "block";
    }

    // Close banner functionality
    closeBannerButton.addEventListener("click", () => {
        banner.style.display = "none";
    });

    // Fetch members and display spotlight members
    async function getMembers(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(await response.text());

            const data = await response.json();
            displaySpotlight(data.members);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displaySpotlight(members) {
        const eligibleMembers = members.filter(member => 
            member.membershipLevel === "silver" || member.membershipLevel === "gold"
        );
        
        const randomMembers = [];
        while (randomMembers.length < 3 && eligibleMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
            randomMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
        }

        randomMembers.forEach(member => {
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
            const image = document.createElement("img");
            image.src = member.image;
            image.alt = `${member.name} logo`;
            
            section.appendChild(image);
            section.appendChild(name);
            section.appendChild(website);
            section.appendChild(address);
            section.appendChild(phoneNumber);

            spotlightContainer.appendChild(section);
        });
    }

    getMembers(membersURL);
});
