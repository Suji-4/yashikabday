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
You are one of the kindest people I know.
Thank you for being my best friend.
May your smile never fade,
your dreams come true,
and may this year bring you endless happiness. 🎂✨`

        ],

        typeSpeed:45,

        showCursor:false

    });

}

// -------------------------------
// Blow Candle
// -------------------------------

blowBtn.addEventListener("click",()=>{

    gsap.to(flame,{

        opacity:0,

        scale:0,

        duration:.6

    });

    confetti({

        particleCount:600,

        spread:360,

        origin:{y:.5}

    });

    setTimeout(()=>{

        showPage("page8");

    },2500);

});

// -------------------------------
// Replay
// -------------------------------

replay.addEventListener("click",()=>{

    location.reload();

});
