document.addEventListener("DOMContentLoaded", () =>{

function darkMode (){
    const {body} = document
    const section = document.querySelectorAll("section h4")
    const card = document.querySelectorAll(".card")
    const cardBody = document.querySelectorAll(".card-body")
    const button = document.querySelectorAll(".button")
    const nav = document.querySelectorAll("#menuElement")
    const navLink = document.querySelectorAll(".nav-link ")
    const header = document.querySelectorAll("header")
    const footer = document.querySelectorAll(".d-flex")
    const forms = document.querySelector(".forms")
    const formsButton = document.querySelector(".forms-button button")
    const loginCard = document.querySelector(".login")
    const loginButton = document.querySelector(".forms-button-login")


    if (forms != null){
        forms.classList.toggle("dark-forms")
        formsButton.classList.toggle("dark-button")
    }

    if (loginCard != null) {
        loginCard.classList.toggle("dark-card")
    }

    
    footer.forEach(footer =>footer.classList.toggle("dark-header"))
    
    body.classList.toggle("dark-mode")
    section.forEach(section => section.classList.toggle("dark-mode"))
    
    header.forEach( header => header.classList.toggle("dark-header"))

    nav.forEach(nav => nav.classList.toggle("dark-nav"))
    navLink.forEach(navLink => navLink.classList.toggle("dark-mode"))
    card.forEach(card => card.classList.toggle("dark-card"))
    cardBody.forEach(cardBody => cardBody.classList.toggle("dark-card"))
    button.forEach(button => button.classList.toggle("dark-button"))



    const isDarkMode = body.classList.contains('dark-mode'); //return true or false

    // The localStorage object stores data with no expiration date. The data is not deleted when the browser is closed
    // and are available for future sessions. Allows you to save key/value pairs in the browser.
    localStorage.setItem('darkMode', isDarkMode); // localStorage.setItem(key, value) 
}


const darkModeToggle = document.getElementById('darkModeToggle'); //get the icon which you click to toggle dark/light mode
darkModeToggle.addEventListener('click', darkMode);


// Check localStorage for dark mode setting
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    darkMode (); // Apply dark mode styles if stored value is true
}

})




