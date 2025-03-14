document.addEventListener("DOMContentLoaded", () => {
    const handle = document.querySelector(".fillerHandle");
    const box = document.querySelector(".fillerBox");
    const balloonContainer = document.querySelector(".balloon-container");
    const fillerMouth = document.querySelector(".fillerMouth");


    const balloonImages = [
        "./images/greenBalloon.png",
        "./images/purpleballoon.png",
        "./images/orangeBalloon.png",
        "./images/yellowBalloon.png",
        "./images/redBalloon.png"
    ];

    let clickCount = 0;
    let activeBalloons = []; 

    function createBalloon() {
        const balloon = document.createElement("img");
        balloon.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
        balloon.classList.add("balloon");

        
        const mouthRect = fillerMouth.getBoundingClientRect();
        balloon.style.position = "absolute";
        balloon.style.left = `${mouthRect.left + 40}px`; 
        balloon.style.bottom = "220px";

        balloonContainer.appendChild(balloon);
        activeBalloons.push(balloon); 

        balloon.addEventListener("click", () => {
            balloon.classList.add("pop-effect");
            setTimeout(() => {
                balloon.remove();
                activeBalloons = activeBalloons.filter(b => b !== balloon);
            }, 200);
        });
    }

    handle.addEventListener("click", () => {
        handle.classList.add("pump-handle");
        box.classList.add("pump-box");

        setTimeout(() => {
            handle.classList.remove("pump-handle");
            box.classList.remove("pump-box");
        }, 200);

        clickCount++;


        if (clickCount % 4 === 1) {
            createBalloon(); 
        }

        let currentBalloon = activeBalloons[activeBalloons.length - 1];
        if (currentBalloon) {
            if (clickCount % 4 === 1) {
                currentBalloon.classList.add("balloon-stage-1");
            } else if (clickCount % 4 === 2) {
                currentBalloon.classList.add("balloon-stage-2");
            } else if (clickCount % 4 === 3) {
                currentBalloon.classList.add("balloon-stage-3");
            } else if (clickCount % 4 === 0) {
                currentBalloon.classList.add("floating-balloon");

                setTimeout(() => {
                    currentBalloon.remove();
                    activeBalloons = activeBalloons.filter(b => b !== currentBalloon);
                }, 4000); 
            }
        }
    });
});
