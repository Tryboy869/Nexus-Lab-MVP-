document.getElementById('send-btn').addEventListener('click', async () => {
  const input = document.getElementById('user-input');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('You', userMessage);
  input.value = '';

  const reply = await getGPTResponse(userMessage);
  appendMessage('Lobo', reply);
});

function appendMessage(sender, text) {
  const chat = document.getElementById('chat-container');
  const msg = document.createElement('div');
  msg.className = 'bg-gray-800 p-2 rounded';
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(msg);
}
