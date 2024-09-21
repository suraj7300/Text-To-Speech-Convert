const speakBtn = document.getElementById('speakBtn');
const textArea = document.getElementById('text');

speakBtn.addEventListener('click', () => {
    const text = textArea.value;

    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    } else {
        alert("Please enter some text!");
    }
});
