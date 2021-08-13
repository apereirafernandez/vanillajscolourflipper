const colours = [
    "blue",
    "yellow",
    "green",
    "red",
    "black",
    "rgba(100,180,200)",
    "#F15025",
];

const btn = document.getElementById("btn");

const colour = document.querySelector(".color");

btn.addEventListener("click", () => {
    // get random num between 0 and 3

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * colours.length);
};
