document.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector(".start");
    const cross = document.querySelector(".head-btn");
    const cross_second = document.querySelector(".head-btn-sec");
    const cross_timer = document.querySelector(".head-btn-timer");

    if (start) {
        start.addEventListener("click", () => {
            window.location.href = "./second.html";
        });
    }

    if (cross) {
        cross.addEventListener("click", () => {
            window.location.href = "https://www.google.com";
        });
    }

    if (cross_second) {
        cross_second.addEventListener("click", () => {
            window.location.href = "./index.html";
        });
    }

    if (cross_timer) {
        cross_timer.addEventListener("click", () => {
            window.location.href = "./second.html";
        });
    }



    const min5 = document.querySelector(".min5");
    const min7 = document.querySelector(".min7");
    const min9 = document.querySelector(".min9");
    const min11 = document.querySelector(".min11");



    // If you're on the selection page
    if (min5) {
        min5.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "timer.html?time=300";
        });
    }

    if (min7) {
        min7.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "timer.html?time=420";
        });
    }

    if (min9) {
        min9.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "timer.html?time=540";
        });
    }

    if (min11) {
        min11.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "timer.html?time=660";
        });
    }

    // Elements from timer.html (the timer page)
    const timerDisplay = document.getElementById("timer");

    if (timerDisplay) {
        const params = new URLSearchParams(window.location.search);
        const time = parseInt(params.get("time"));

        if (!time || isNaN(time)) {
            timerDisplay.textContent = "No time selected!";
            return;
        }

        let timeLeft = time;
        const countdown = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            timerDisplay.textContent = `Time Left: ${formatted}`;

            if (timeLeft === 0) {
                clearInterval(countdown);
                timerDisplay.textContent = "Time's up! 🥚";
                timerDisplay.style.color = "red";

                const alarm = document.getElementById("alarm-sound");
                if (alarm) {
                    alarm.play();
                    setTimeout(() => {
                        alarm.pause();
                        alarm.currentTime = 0;
                    }, 6000);
                }
            }


            timeLeft--;
        }, 1000);
    }




});