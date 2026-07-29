// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// ===============================
// Elements
// ===============================

const giftBtn = document.getElementById("giftBtn");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");
const typing = document.getElementById("typing");
const wishBtn = document.getElementById("wishBtn");
const flame = document.querySelector(".flame");

// ===============================
// Typewriter Message
// ===============================

const message = `Dear Yashika ❤️

Today is all about celebrating YOU.

Thank you for being such an amazing best friend.
Your kindness, your smile, your support and all the memories we've shared mean so much to me.

I hope this birthday brings you endless happiness, success, laughter and beautiful moments.

Keep smiling.
Keep shining.
Stay exactly the wonderful person you are.

Happy Birthday Yashika 🎂❤️`;

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

// ===============================
// Gift Button
// ===============================

giftBtn.addEventListener("click", () => {

    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });

    music.play();

    typeWriter();

    confetti({
        particleCount: 300,
        spread: 180,
        origin: {
            y: 0.6
        }
    });

});

// ===============================
// Music Button
// ===============================

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔊";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

});

// ===============================
// Blow Candle
// ===============================

wishBtn.addEventListener("click", () => {

    // Candle goes out
    flame.style.display = "none";

    // Confetti
    confetti({
        particleCount: 400,
        spread: 360,
        origin: {
            y: 0.5
        }
    });

    // Small delay before changing page
    setTimeout(() => {

        // Hide cake section
        document.querySelector(".cake-section").style.display = "none";

        // Hide old letter section if it exists
        const oldLetter = document.querySelector(".letter");

        if(oldLetter){
            oldLetter.style.display = "none";
        }

        // Show new page
        const letterPage = document.getElementById("letterPage");

        letterPage.style.display = "flex";

        // Scroll to it
        letterPage.scrollIntoView({
            behavior:"smooth"
        });

    },2000);

});
// Floating Hearts
// ===============================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = 0;

    const move = setInterval(() => {

        pos++;

        heart.style.bottom = pos * 3 + "px";
        heart.style.opacity = 1 - pos / 250;
        heart.style.transform = `translateX(${Math.sin(pos/10)*20}px)`;

        if (pos > 250) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}, 900);

// ===============================
// Image Click Zoom
// ===============================

document.querySelectorAll(".photos img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.inset = "0";
        popup.style.background = "rgba(0,0,0,.85)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.cursor = "pointer";
        popup.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";

        popup.appendChild(image);

        popup.onclick = () => popup.remove();

        document.body.appendChild(popup);

    });

});

// ===============================
// Sparkle Effect
// ===============================

document.addEventListener("click", e => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.fontSize = "22px";
    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    let y = 0;

    const sparkle = setInterval(() => {

        y++;

        star.style.top = e.clientY - y * 2 + "px";
        star.style.opacity = 1 - y / 50;

        if (y > 50) {

            clearInterval(sparkle);

            star.remove();

        }

    }, 15);

});
