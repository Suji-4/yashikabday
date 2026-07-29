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
// =====================================
// PART 2
// Gallery • Candle • Hearts • Replay
// =====================================

// ---------- Gallery Popup ----------

const images = document.querySelectorAll(".gallery-grid img");

images.forEach((img)=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.cssText=`
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.92);
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:99999;
            cursor:pointer;
            backdrop-filter:blur(10px);
        `;

        const image=document.createElement("img");

        image.src=img.src;

        image.style.cssText=`
            max-width:90%;
            max-height:90%;
            border-radius:20px;
            box-shadow:0 20px 60px rgba(255,255,255,.2);
            animation:zoomImage .4s ease;
        `;

        overlay.appendChild(image);

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });

});

// ---------- Floating Hearts ----------

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*window.innerWidth+"px";

    heart.style.bottom="-50px";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=0;

    const move=setInterval(()=>{

        pos++;

        heart.style.bottom=(pos*3)+"px";

        heart.style.transform=`translateX(${Math.sin(pos/12)*30}px)`;

        heart.style.opacity=1-pos/260;

        if(pos>260){

            clearInterval(move);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,800);

// ---------- Cursor Sparkles ----------

document.addEventListener("mousemove",(e)=>{

    const star=document.createElement("span");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=e.clientX+"px";

    star.style.top=e.clientY+"px";

    star.style.pointerEvents="none";

    star.style.fontSize="16px";

    star.style.opacity=".8";

    document.body.appendChild(star);

    gsap.to(star,{

        y:-35,

        opacity:0,

        duration:1,

        onComplete(){

            star.remove();

        }

    });

});

// ---------- Blow Candle ----------

blowBtn.addEventListener("click",()=>{

    gsap.to(flame,{

        opacity:0,

        scale:0,

        duration:.6

    });

    confetti({

        particleCount:500,

        spread:360,

        origin:{y:.5}

    });

    createFireworks();

    setTimeout(()=>{

        document.getElementById("letterSection").scrollIntoView({

            behavior:"smooth"

        });

    },2500);

});

// ---------- Fireworks ----------

function createFireworks(){

    const duration=5000;

    const end=Date.now()+duration;

    (function frame(){

        confetti({

            particleCount:6,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:6,

            angle:120,

            spread:70,

            origin:{x:1}

        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}

// ---------- Replay ----------

replay.addEventListener("click",()=>{

    location.reload();

});

// ---------- Welcome Animation ----------

gsap.from(".glass-card",{

    y:80,

    opacity:0,

    duration:1.2

});

gsap.from("#welcome h1",{

    scale:.5,

    opacity:0,

    delay:.3,

    duration:1

});

gsap.from("#startBtn",{

    y:40,

    opacity:0,

    delay:.8,

    duration:1

});

// ---------- Floating Gift ----------

gsap.to("#gift",{

    y:-20,

    repeat:-1,

    yoyo:true,

    duration:1.5,

    ease:"power1.inOut"

});
