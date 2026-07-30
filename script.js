// ========================================
// YASHIKA BIRTHDAY WEBSITE
// Complete JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // ELEMENTS
    // ========================================

    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".nextBtn");

    const music = document.getElementById("music");
    const gift = document.getElementById("gift");
    const blowBtn = document.getElementById("blowBtn");
    const flame = document.getElementById("flame");
    const replay = document.getElementById("replay");

    const envelope = document.getElementById("envelope");
    const letterNext = document.querySelector(".letter-next");

    let currentPage = "page1";
    let typedStarted = false;
    let countdownRunning = false;


    // ========================================
    // SHOW PAGE
    // ========================================

    function showPage(pageId) {

        const targetPage = document.getElementById(pageId);

        if (!targetPage) {
            console.error("Page not found:", pageId);
            return;
        }

        pages.forEach((page) => {
            page.classList.remove("active");
        });

        targetPage.classList.add("active");

        currentPage = pageId;

        console.log("Showing:", pageId);
    }


    // ========================================
    // PLAY MUSIC
    // ========================================

    function playMusic() {

        if (!music) {
            return;
        }

        if (music.paused) {

            music.play().catch((error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            });

        }

    }


    // ========================================
    // ALL NEXT BUTTONS
    // ========================================

    nextButtons.forEach((button) => {

        button.addEventListener("click", function () {

            console.log(
                "Button clicked:",
                this.innerText
            );

            const nextPage =
                this.getAttribute("data-next");

            if (!nextPage) {

                console.error(
                    "This button has no data-next attribute."
                );

                return;

            }

            // Start music after user interaction
            playMusic();

            // Go to requested page
            showPage(nextPage);


            // ====================================
            // PAGE 2 → COUNTDOWN
            // ====================================

            if (nextPage === "page2") {

                startCountdown();

            }


            // ====================================
            // PAGE 4 → TYPING
            // ====================================

            if (nextPage === "page4") {

                startTyping();

            }

        });

    });


    // ========================================
    // COUNTDOWN
    // ========================================

    function startCountdown() {

        if (countdownRunning) {
            return;
        }

        countdownRunning = true;

        const count =
            document.querySelector(".countdown");

        if (!count) {

            console.error(
                "Countdown element not found."
            );

            countdownRunning = false;

            return;

        }

        let number = 3;

        count.innerHTML = number;

        count.style.transform = "scale(1)";
        count.style.opacity = "1";


        const timer = setInterval(() => {

            number--;

            if (number <= 0) {

                clearInterval(timer);

                countdownRunning = false;

                showPage("page3");

                return;

            }

            count.innerHTML = number;

            // Animate if GSAP exists
            if (typeof gsap !== "undefined") {

                gsap.fromTo(
                    count,
                    {
                        scale: 0.3,
                        opacity: 0
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5
                    }
                );

            }

        }, 1000);

    }


    // ========================================
    // GIFT
    // ========================================

    if (gift) {

        gift.addEventListener("click", () => {

            console.log("Gift clicked");

            // Prevent double click
            if (gift.classList.contains("opening")) {
                return;
            }

            gift.classList.add("opening");


            // Confetti
            if (typeof confetti === "function") {

                confetti({
                    particleCount: 200,
                    spread: 180,
                    origin: {
                        y: 0.6
                    }
                });

            }


            // Go to birthday message
            setTimeout(() => {

                showPage("page4");

                startTyping();

            }, 1200);

        });

    }


    // ========================================
    // TYPING MESSAGE
    // ========================================

    function startTyping() {

        if (typedStarted) {
            return;
        }

        typedStarted = true;

        const typingElement =
            document.getElementById("typing");

        if (!typingElement) {

            console.error(
                "Typing element not found."
            );

            return;

        }


        // If Typed.js loaded
        if (typeof Typed !== "undefined") {

            new Typed("#typing", {

                strings: [

                    `Happy Birthday Yashika ❤️<br><br>

                    Today is your special day ✨<br><br>

                    I hope your life is always filled
                    with happiness, success,
                    and beautiful memories.<br><br>

                    Thank you for being my best friend.
                    Keep smiling always because
                    your smile makes everything better. 💖<br><br>

                    Have the most amazing birthday ever! 🎂✨`

                ],

                typeSpeed: 35,

                showCursor: false,

                contentType: "html"

            });

        } else {

            // Fallback if Typed.js doesn't load

            typingElement.innerHTML = `

                Happy Birthday Yashika ❤️<br><br>

                Today is your special day ✨<br><br>

                I hope your life is always filled
                with happiness, success,
                and beautiful memories.<br><br>

                Thank you for being my best friend.
                Keep smiling always because
                your smile makes everything better. 💖<br><br>

                Have the most amazing birthday ever! 🎂✨

            `;

        }

    }


    // ========================================
    // LETTER / ENVELOPE
    // ========================================

    if (envelope) {

        envelope.addEventListener("click", () => {

            console.log("Envelope clicked");

            if (envelope.classList.contains("open")) {
                return;
            }

            envelope.classList.add("open");


            // Confetti

            if (typeof confetti === "function") {

                confetti({
                    particleCount: 80,
                    spread: 100,
                    origin: {
                        y: 0.6
                    }
                });

            }


            // Show next button

            setTimeout(() => {

                if (letterNext) {

                    letterNext.classList.add("show");

                }

            }, 1800);

        });

    }


    // ========================================
    // BLOW CANDLE
    // ========================================

    if (blowBtn) {

        blowBtn.addEventListener("click", () => {

            console.log("Candle button clicked");


            if (blowBtn.disabled) {
                return;
            }

            blowBtn.disabled = true;


            // Blow out flame

            if (flame) {

                flame.classList.add("blown");

            }


            // Change button

            blowBtn.innerHTML =
                "✨ Wish Made! ✨";


            // First confetti

            if (typeof confetti === "function") {

                confetti({

                    particleCount: 180,

                    spread: 100,

                    origin: {
                        y: 0.55
                    }

                });


                // Second celebration

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


            // Final page

            setTimeout(() => {

                showPage("page8");

            }, 2200);

        });

    }


    // ========================================
    // REPLAY
    // ========================================

    if (replay) {

        replay.addEventListener("click", () => {

            console.log("Replay clicked");

            location.reload();

        });

    }


    // ========================================
    // INITIAL PAGE
    // ========================================

    showPage("page1");

    console.log(
        "🎂 Yashika Birthday Website Loaded Successfully!"
    );

});
