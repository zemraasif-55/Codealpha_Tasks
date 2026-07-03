// Typing Effect

const textArray = [
    "Frontend Developer",
    "Web Designer",
    "Student",
    "React Learner"
];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.querySelector(".typing");

function typeText(){

    if(charIndex <
    textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(eraseText,1500);
    }
}

function eraseText(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex]
        .substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeText,300);
    }
}

document.addEventListener(
"DOMContentLoaded",
function(){

    if(textArray.length){
        setTimeout(typeText,500);
    }

}
);


// Scroll Reveal Animation

function revealElements() {

    const elements = document.querySelectorAll(
        ".about-text, .skill, .featured-project, .contact-card"
    );

    elements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Active Navbar Highlight

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Run once on page load
revealElements();