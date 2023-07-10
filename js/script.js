const adobo = document.querySelector("#adobo");
const menudo = document.querySelector("#menudo");
const lechon = document.querySelector("#lechon");
const frontpage = document.querySelector(".frontPage");

adobo.addEventListener("click", () => {
    displayInfo(".adobo");
});
menudo.addEventListener("click", () => {
    displayInfo(".menudo");
});
lechon.addEventListener("click", () => {
    displayInfo(".lechon");
});

function displayInfo(param) {
    frontpage.style.display = "none";
    document.querySelector(param).style.display = "block";
}