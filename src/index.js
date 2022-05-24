import './style.css';
import submitData from './modules/submitfile.js';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Oawl0gMZlyz9hcMNVFKE/scores';

function render(file) {
  const allfiles = file.result;
  const container = document.querySelector('.numbers');
  container.innerHTML = '';
  allfiles.forEach((list) => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${list.user}: ${list.score}</p>`;
    container.appendChild(li);
  });
}

async function getData() {
  const response = await fetch(apiUrl, {
    method: 'GET',
  });
  const data = await response.json();
  render(data);
}

async function createGame() {
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ name: 'My new game' }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

window.onload = getData();

document.addEventListener('click', (button) => {
  if (button.target.id === 'submit') {
    const name = document.getElementById('username').value;
    const score = document.getElementById('scores').value;
    if (name !== '' && score !== '') {
      submitData(apiUrl, name, score);
      document.getElementById('username').value = '';
      document.getElementById('scores').value = '';
    }
  }
  if (button.target.id === 'refresh') {
    getData();
  }
});
createGame();
