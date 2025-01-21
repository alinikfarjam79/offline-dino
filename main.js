let dino = document.querySelector('.dino');
let background = document.querySelector('.container');
let text = document.querySelector('h1');
let reseat = document.querySelector('h2');
let dinoPosition = 12;
let counter = 0;
let isJumping = false;
let isGameOver = false;

window.addEventListener('keydown', (e) => {

    if (e.keyCode === 32) {
        if (!isJumping) {
            isJumping = true;
            let timer = setInterval(() => {
                if (counter === 15) {
                    clearInterval(timer);
                    let downTimer = setInterval(() => {
                        if (counter === 0) {
                            clearInterval(downTimer);
                            isJumping = false;
                        }
                        counter--;
                        dinoPosition = (dinoPosition - 4) * 0.9;
                        dino.style.bottom = `${dinoPosition}px`;
                    });
                }
                counter++;
                dinoPosition = (dinoPosition + 25) * 0.9;
                dino.style.bottom = `${dinoPosition}px`;

            }, 20)
        }
    }
})

function createCactus() {
    if (isGameOver == false) {
        let cactusPosition = 1500;
        let cactus = document.createElement('div');
        cactus.classList.add('cactus')
        background.appendChild(cactus);
        cactus.style.left = cactusPosition + 'px';

        let timer = setInterval(() => {

            if (cactusPosition < 60 && cactusPosition > 0 && dinoPosition < 60) {
                clearInterval(timer);
                isGameOver = true;
                text.innerText = 'Game over'
                reseat.innerText = 'reseat';
                reseat.addEventListener('click', () => {
                    location.reload();
                })
                background.removeChild(cactus);
                background.style.animationName = 'dd';
            }
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }, 20);


        setTimeout(createCactus, 4000)

    }
}
createCactus()