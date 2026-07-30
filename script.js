// ================================
// Premium Birthday Website
// Multi-Page Navigation
// ================================

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".nextBtn");

const music = document.getElementById("music");
const gift = document.getElementById("gift");
const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const replay = document.getElementById("replay");

let currentPage = "page1";

// -------------------------------
// Show Page
// -------------------------------

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

    currentPage=id;

}

// -------------------------------
// Start Buttons
// -------------------------------

nextButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(music.paused){

            music.play().catch(()=>{});

        }

        const next=btn.dataset.next;

        showPage(next);

        if(next==="page2"){

            startCountdown();

        }

        if(next==="page4"){

            startTyping();

        }

    });

});

// -------------------------------
// Countdown
// -------------------------------

function startCountdown(){

    const count=document.querySelector(".countdown");

    let number=3;

    count.innerHTML=number;

    const timer=setInterval(()=>{

        number--;

        if(number===0){

            clearInterval(timer);

            showPage("page3");

            return;

        }

        gsap.fromTo(".countdown",
        {
            scale:0,
            opacity:0
        },
        {
            scale:1,
            opacity:1,
            duration:.5
        });

        count.innerHTML=number;

    },1000);

}

// -------------------------------
// Gift
// -------------------------------

gift.addEventListener("click",()=>{

    gift.classList.add("open");


    confetti({

        particleCount:200,

        spread:180

    });


    setTimeout(()=>{

        showPage("page4");

        startTyping();

    },1200);


});

// -------------------------------
// Typing
// -------------------------------

let typedStarted=false;

function startTyping(){

    if(typedStarted) return;

    typedStarted=true;

    new Typed("#typing",{

        strings:[

`Happy Birthday Yashika ❤️<br><br>

Today is your special day ✨<br>

I hope your life is always filled with happiness,
success, and beautiful memories.<br><br>

Thank you for being my best friend.
Keep smiling always because your smile makes everything better. 💖<br><br>

Have the most amazing birthday ever! 🎂✨`

        ],

        typeSpeed:45,

        showCursor:false

    });

}

// -------------------------------
// Blow Candle
// -------------------------------

// =====================================
// BLOW CANDLE
// =====================================

if (blowBtn) {

    blowBtn.addEventListener("click", () => {

        if (blowBtn.disabled) {
            return;
        }

        blowBtn.disabled = true;

        // Blow out flame
        if (flame) {
            flame.classList.add("blown");
        }

        blowBtn.innerHTML = "✨ Wish Made! ✨";

        // Small celebration
        if (typeof confetti === "function") {

            confetti({
                particleCount: 180,
                spread: 100,
                origin: {
                    y: 0.55
                }
            });

            setTimeout(() => {

                confetti({
                    particleCount: 250,
                    spread: 150,
                    origin: {
                        y: 0.4
                    }
                });

            }, 500);

        }

        // Go to final page
        setTimeout(() => {

            showPage("page8");

        }, 2200);

    });

}

// =====================================
// LETTER ENVELOPE
// =====================================

const envelope = document.getElementById("envelope");
const letterNext = document.querySelector(".letter-next");

if (envelope) {

    envelope.addEventListener("click", () => {

        if (envelope.classList.contains("open")) {
            return;
        }

        envelope.classList.add("open");

        // Little heart celebration
        if (typeof confetti === "function") {

            confetti({
                particleCount: 80,
                spread: 100,
                origin: {
                    y: 0.6
                }
            });

        }

        setTimeout(() => {

            if (letterNext) {
                letterNext.classList.add("show");
            }

        }, 1800);

    });

}

// -------------------------------
// Replay
// -------------------------------

replay.addEventListener("click",()=>{

    location.reload();

});
