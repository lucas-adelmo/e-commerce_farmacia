const headerInfo = {
    logoSrc: "./assets/img/logo.png",
    logoAlt: "logo DEVinPharma",
    menuOptions: [
        {
            content: "TODOS MEDICAMENTOS",
            href: "./index.html"
        },
        {
            content:"SOBRE NÓS", 
            href: ""
        },
        {
            content: "FALE CONOSCO",
            href: "./contato.html"
        }
    ]
};

function createAndAppendLogo() {
    // Select the header element
    const header = document.getElementById("header");

    // Create the logo element and set its attributes
    const logoElement = new Image();
    logoElement.src = headerInfo.logoSrc;
    logoElement.alt = headerInfo.logoAlt;
    logoElement.width = "300";
    logoElement.height = "77.31";

    // Append the logo element to the header
    document.querySelector("#header-logo").appendChild(logoElement);
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createAndAppendLogo);


function menuOptions() {
    // Create the menu element and set its content dynamically
    const menuElement = document.querySelector("#menuElement");
    
    headerInfo.menuOptions.forEach((option) => {
        const navItem = document.createElement("li");
        navItem.classList.add("nav-item");
    
        const listItem = document.createElement("a");
        listItem.textContent = option.content;
        listItem.href = option.href;
        listItem.classList.add("nav-link");
    
        menuElement.appendChild(navItem).appendChild(listItem)
    
        // menuElement.querySelector(".nav-item");
    });
}

document.addEventListener("DOMContentLoaded", menuOptions);
