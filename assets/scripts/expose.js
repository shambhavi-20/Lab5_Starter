// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti()
  let Horn = document.getElementById("horn-select");

  Horn.addEventListener("change", (event) => {
    let imgChange = document.querySelector("img");
    let audioChange = document.getElementsByClassName("hidden")[0];
    if (Horn.value == "air-horn"){
      imgChange.src = "assets/images/air-horn.svg";
      audioChange.src = "assets/audio/air-horn.mp3";
    }
    if (Horn.value == "car-horn"){
      imgChange.src = "assets/images/car-horn.svg";
      audioChange.src = "assets/audio/car-horn.mp3";   
    }
    if (Horn.value == "party-horn"){
      imgChange.src = "assets/images/party-horn.svg";
      audioChange.src = "assets/audio/party-horn.mp3";
    }
  });


  let volChange = document.getElementById("volume");
  volChange.addEventListener("input", updateValue);
  function updateValue() {
    let imgChange = document.querySelector("#volume-controls img");
    let audioChange = document.getElementsByClassName("hidden")[0];
    if (this.value == 0){
      imgChange.src = "assets/icons/volume-level-0.svg";
    }
    else if (this.value >= 1 && this.value < 33){
      imgChange.src = "assets/icons/volume-level-1.svg";
    }
    else if (this.value >= 33 && this.value < 67){
      imgChange.src = "assets/icons/volume-level-2.svg";
    }
    else {
      imgChange.src = "assets/icons/volume-level-3.svg";
    }
    audioChange.volume = volChange.value/100;
  }

  let button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    let audioChange = document.getElementsByClassName("hidden")[0];
      audioChange.play();

    if (Horn.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });

}