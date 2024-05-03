// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {


  let voiceSelect = document.getElementById("voice-select");

  function populateVoices() { //from resource given
    let allVoices = speechSynthesis.getVoices();
    for (let i = 0; i < allVoices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${allVoices[i].name} (${allVoices[i].lang})`;
      option.setAttribute("data-lang", allVoices[i].lang);
      option.setAttribute("data-name", allVoices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) { //from resource given
    speechSynthesis.onvoiceschanged = populateVoices;
  }




  
  let checkText = document.getElementById("text-to-speak");
  let storedText;
  checkText.addEventListener("input", (event) => {
    storedText = checkText.value
  });

  let button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    let selectedOption =voiceSelect.selectedOptions[0].getAttribute("data-name");
    let utterance = new SpeechSynthesisUtterance(storedText);
    let allVoices = speechSynthesis.getVoices();
    for (let i = 0; i < allVoices.length; i++) {
      if (allVoices[i].name === selectedOption){
        utterance.voice = allVoices[i];
      }
    }
    speechSynthesis.speak(utterance);

    if (speechSynthesis.speaking){
        let imgChange = document.querySelector("img");
        imgChange.src = "assets/images/smiling-open.png";
    }

    utterance.addEventListener("end", (event) => {
      let imgChange = document.querySelector("img");
      imgChange.src = "assets/images/smiling.png";
    });
  });

  while (speechSynthesis.paused){
    let imgChange = document.querySelector("img");
    imgChange.src = "assets/images/smiling.png";  
  }

}