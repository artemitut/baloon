let sectionTour = document.getElementById("katalog");
let btnScroll = document.querySelector(".btnKatalog");

function handleButtonClick() {
  sectionTour.scrollIntoView({ block: "start", behavior: "smooth" });
}
btnScroll.addEventListener("click", handleButtonClick);
