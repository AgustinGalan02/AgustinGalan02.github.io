document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://rickandmortyapi.com/api/';

    const characterList = document.getElementById('character-list');
    const nameFilterForm = document.getElementById('name-filter-form');
    const statusFilterForm = document.getElementById('status-filter-form');
    const speciesFilterForm = document.getElementById('species-filter-form');
    const typeFilterForm = document.getElementById('type-filter-form');
    const genderFilterForm = document.getElementById('gender-filter-form');

    nameFilterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        fetchCharacters({ name });
    });

    statusFilterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const status = document.getElementById('status').value.trim().toLowerCase();
        if (isValidStatus(status)) {
            fetchCharacters({ status });
        } else {
            displayError('Invalid status. Please select alive, dead, or unknown.');
        }
    });

    speciesFilterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const species = document.getElementById('species').value.trim();
        fetchCharacters({ species });
    });

    typeFilterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const type = document.getElementById('type').value.trim();
        fetchCharacters({ type });
    });

    genderFilterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const gender = document.getElementById('gender').value.trim().toLowerCase();
        if (isValidGender(gender)) {
            fetchCharacters({ gender });
        } else {
            displayError('Invalid gender. Please select female, male, genderless, or unknown.');
        }
    });

    function fetchCharacters(filters) {
        let url = `${baseUrl}character/?`;
        for (let key in filters) {
            if (filters[key] !== '') {
                url += `${key}=${filters[key]}&`;
            }
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayCharacters(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayError('Failed to fetch characters. Please try again.');
            });
    }

    function displayCharacters(characters) {
        characterList.innerHTML = ''; // Limpiar el contenido anterior

        if (characters.length === 0) {
            characterList.innerHTML = '<p>No characters found.</p>';
            return;
        }

        characters.forEach(character => {
            const characterElement = document.createElement('div');
            characterElement.classList.add('character');

            const imageElement = document.createElement('img');
            imageElement.src = character.image;
            imageElement.alt = character.name;
            characterElement.appendChild(imageElement);

            const characterInfo = document.createElement('div');
            characterInfo.classList.add('character-info');

            const nameElement = document.createElement('h3');
            nameElement.textContent = character.name;
            characterInfo.appendChild(nameElement);

            const statusElement = document.createElement('p');
            statusElement.textContent = `Status: ${character.status}`;
            characterInfo.appendChild(statusElement);

            const speciesElement = document.createElement('p');
            speciesElement.textContent = `Species: ${character.species}`;
            characterInfo.appendChild(speciesElement);

            const genderElement = document.createElement('p');
            genderElement.textContent = `Gender: ${character.gender}`;
            characterInfo.appendChild(genderElement);

            characterElement.appendChild(characterInfo);
            characterList.appendChild(characterElement);
        });
    }

    function displayError(message) {
        characterList.innerHTML = `<p>${message}</p>`;
    }

    function isValidStatus(status) {
        const validStatuses = ['alive', 'dead', 'unknown'];
        return validStatuses.includes(status);
    }

    function isValidGender(gender) {
        const validGenders = ['female', 'male', 'genderless', 'unknown'];
        return validGenders.includes(gender);
    }
});
