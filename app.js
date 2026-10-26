const button = document.querySelector("#shareIcon");
const share = document.querySelector(".desktopImages");

button.addEventListener("click", () => {
    share.classList.toggle("hidden");
});
