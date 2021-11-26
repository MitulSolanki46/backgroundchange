const colors = [
    "red",
    "blue",
    "orange",
    "yellow",
    "purple",
    "chocolate",
    "white",
    "green",
    "magenta",
    "crimson",
    "deeppink",
    "deepskyblue",
    "brown",
    "chartreuse",
];
const changeBackgroundColor = function() {
    const randomColor = Math.trunc(Math.random() * 13) + 1;
    document.querySelector("body").style.backgroundColor = colors[randomColor];
    console.log(colors[randomColor]);
};
document.addEventListener("click", function() {
    changeBackgroundColor();
});