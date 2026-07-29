// ================================
// Premium Birthday Website
// Part 1
// ================================

AOS.init({
    duration: 1000,
    once: true
});

const loader = document.getElementById("loader");
const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");

const countdownSection = document.getElementById("countdownSection");
const countdown = document.getElementById("countdown");

const giftSection = document.getElementById("giftSection");
const gift = document.getElementById("gift");

const hero = document.getElementById("hero");

const music = document.getElementById("music");

const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");

const replay = document.getElementById("replay");

// Hide sections initially

countdownSection.style.display = "none";
giftSection.style.display = "none";
hero.style.display = "none";

// Loader

window.onload = () => {

    setTimeout(() => {

        loader.style.display = "none";

    },2500);

}

// Start Button

startBtn.addEventListener("click",()=>{

    music.play();

    welcome.style.display="none";

    countdownSection.style.display="flex";

    startCountdown();

});

// Countdown

function startCountdown(){

    let number = 3;

    countdown.innerHTML = number;

    let timer = setInterval(()=>{

        number--;

        if(number==0){

            clearInterval(timer);

            countdownSection.style.display="none";

            giftSection.style.display="flex";

            return;

        }

        gsap.fromTo("#countdown",
        {
            scale:0,
            opacity:0
        },
        {
            scale:1,
            opacity:1,
            duration:.6
        });

        countdown.innerHTML = number;

    },1000);

}

// Gift Animation

gift.addEventListener("click",()=>{

    gsap.to("#gift",{

        rotation:25,

        duration:.2,

        repeat:5,

        yoyo:true,

        onComplete:openGift

    });

});

// Open Gift

function openGift(){

    confetti({

        particleCount:250,

        spread:180,

        origin:{
            y:.6
        }

    });

    gift.innerHTML="💖";

    setTimeout(()=>{

        giftSection.style.display="none";

        hero.style.display="flex";

        hero.scrollIntoView({

            behavior:"smooth"

        });

        typeMessage();

    },1200);

}

// Typed Message

function typeMessage(){

new Typed("#typing",{

strings:[

`Happy Birthday Yashika ❤️<br><br>

Today is all about celebrating you.

May your smile always stay bright,

your dreams come true,

and your heart always stay happy.

Thank you for being

my best friend.

🎂❤️`

],

typeSpeed:45,

showCursor:false

});

}
