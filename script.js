/* --------------------------- */
/* MUSIC PLAY FIX */
/* --------------------------- */
const music = document.getElementById("bg-music");

document.body.addEventListener("click", () => {
    music.play().catch(err => console.log("Play failed:", err));
}, { once: true });

/* --------------------------- */
/* INTRO SCREEN FADE OUT */
/* --------------------------- */
window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    setTimeout(() => {
        intro.classList.add("hidden");
        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);
    }, 2200);
});

/* --------------------------- */
/* BIRTHDAY WISHES LIST */
/* --------------------------- */
const wishes = {
    1: "Happy Birthday, sis 💜 You make the world softer just by being in it.",
    2: "Another year, another glow. May this year treat you with kindness and joy.",
    3: "You deserve love, peace, success — and I’m always here for you, no matter what."
};

/* --------------------------- */
/* TYPING EFFECT FIXED */
/* --------------------------- */
let typingTimeout; // store timeout reference

function typeEffect(text, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = ""; 
    let i = 0;

    // Clear any previous typing timeout
    if (typingTimeout) clearTimeout(typingTimeout);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, 40);
        }
    }
    type();
}

function showWish(number) {
    const box = document.getElementById("wishBox");
    box.classList.add("show");
    typeEffect(wishes[number], "wishText");
}

/* --------------------------- */
/* SLIDESHOW */
/* --------------------------- */
const slideshowImages = [
    "images/bts2.jpg",
    "images/rm.jpg",
    "images/jin.jpg",
    "images/suga.jpg",
    "images/jimin.jpg",
    "images/hobi.jpg",
    "images/v.jpg",
    "images/jk.jpg"
];

let slideIndex = 0;

function startSlideshow() {
    const slideImg = document.getElementById("memberSlide");
    slideImg.src = slideshowImages[slideIndex];
    slideIndex = (slideIndex + 1) % slideshowImages.length;
    setTimeout(startSlideshow, 3000);
}

window.onload = () => {
    startSlideshow();
};
