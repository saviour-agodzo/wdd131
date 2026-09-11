const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// Add
// const menuButton = document.querySelector("#menu");

// menuButton.addEventListener("click", () => {
//     alert("JavaScript is connected!");
// });


