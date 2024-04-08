var speech = new SpeechSynthesisUtterance();

        function speak(){
            speech.text = textTospeech.value;
            speech.rate = 1;
            speech.volume = 1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        }

var input = document.getElementById("textTospeech");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});