const duckSound = new Audio('/Sounds/duckQuack.mp3');

document.getElementById("heroImgButton").addEventListener("click", () => {
  duckSound.play();
});