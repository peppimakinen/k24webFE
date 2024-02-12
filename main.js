import './style.css';

const jokeContainer = document.querySelector('.show_joke');
const chuckButton = document.querySelector('.chuck');

chuckButton.addEventListener('click', fetchJoke);

function fetchJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Verkkovastaus ei ollut kunnossa');
      }
      return response.json();
    })
    .then((data) => {
      displayJoke(data.value);
    })
    .catch((error) => {
      console.error('Fetch-operaatiossa ilmeni ongelma:', error);
    });
}

function displayJoke(joke) {
  jokeContainer.textContent = joke;
}
