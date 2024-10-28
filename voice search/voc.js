const voiceBtn = document.getElementById('voice-btn');
const resultsDiv = document.getElementById('results');

voiceBtn.addEventListener('click', () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    resultsDiv.textContent = `You said: ${transcript}`;

    // Send the transcript to your search engine or NLP backend
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify({ query: transcript })
    })
    .then(response => response.json())
    .then(data => {
      // Handle the search results
      resultsDiv.textContent = data.results;
    })
    .catch(error => {
      console.error('Error:', error);
      resultsDiv.textContent = 'An error occurred';
    });
  };

  recognition.start();
});
