function openEnvelope() {
    let envelope = document.querySelector(".envelope");
    let poppers = document.querySelectorAll(".popper");
    let openSound = document.getElementById("openSound");
    let popperSound = document.getElementById("popperSound");

    if (!envelope.classList.contains("open")) {
        openSound.play(); // Play envelope opening sound
        setTimeout(() => {
            popperSound.play(); // Play party popper sound after 1 second
        }, 1000);
    }

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        poppers.forEach(popper => popper.style.opacity = "1");
        explodeConfetti("left");
        explodeConfetti("right");
    }
}

function explodeConfetti(position) {
    let baseX = position === "left" ? 20 : window.innerWidth - 40;
    let baseY = window.innerHeight - 80;

    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.background = getRandomColor();
        confetti.style.left = `${baseX}px`;
        confetti.style.top = `${baseY}px`;
        confetti.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
        confetti.style.setProperty("--y", `${Math.random() * -200}px`);
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1500);
    }
}

function getRandomColor() {
    let colors = ["#FF0000", "#FFD700", "#008000", "#0000FF", "#FF69B4", "#FF4500"];
    return colors[Math.floor(Math.random() * colors.length)];
}

