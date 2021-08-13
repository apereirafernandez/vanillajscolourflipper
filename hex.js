const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025

const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()];
    }

    colour.textContent = hexColour;
    document.body.style.backgroundColor = hexColour;
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
};
