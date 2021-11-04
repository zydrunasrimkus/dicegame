function randomNumber() {
    p1 = Math.floor(Math.random() * 6) + 1;
    p2 = Math.floor(Math.random() * 6) + 1;
    return p1, p2;
}

function clickMe() {
    p1 = randomNumber();
    p2 = randomNumber();

    document.querySelector(".dice .img1").setAttribute("src", "images/dice" + p1 + ".png");

    document.querySelector(".dice .img2").setAttribute("src", "images/dice" + p2 + ".png");

    if (p1 > p2) {
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    } else if (p1 < p2) {
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    } else {
        document.querySelector("h1").textContent = "Draw! 🤭";
    }
}