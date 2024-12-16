const projectName = document.getElementById('imeProjekta');
const projectDescription = document.getElementById('opisProjekta');
const jezik = document.getElementById('jezikProjekta');
const prevButton = document.getElementById('backBtn');
const nextButton = document.getElementById('forwardBtn');

let repositories = [];
let currentIndex = 0;

fetch('https://api.github.com/users/HeskiA/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error('API error');
    }
    return response.json();
  })
  .then(data => {
    repositories = data;
    if (repositories.length > 0) {
      displayRepository(0);
    }
  })
  .catch(error => {
    console.error(error);
  });

function displayRepository(index) {
  const repo = repositories[index];
  projectName.textContent = `${repo.name}`;
  projectName.href = repo.html_url;
  projectDescription.textContent = repo.description ? `Opis: ${repo.description}` : 'Opis: Nema opisa.';
  jezik.textContent = repo.language ? `Jezik: ${repo.language}` : 'Jezik:';
  checkButtons();
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    displayRepository(currentIndex);
    prevButton.classList.remove('disabled');
  }
  checkButtons();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < repositories.length - 1) {
    currentIndex++;
    displayRepository(currentIndex);
    nextButton.classList.remove('disabled');
  }
  checkButtons();
});

function checkButtons() {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (currentIndex === repositories.length - 1) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}
