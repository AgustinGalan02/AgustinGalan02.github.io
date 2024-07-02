document.addEventListener('DOMContentLoaded', function() {

    // url API
    const apiUrl = 'https://rickandmortyapi.com/api/';

    // asociamos los elementos del html
    const characterList = document.getElementById('character-list');
    const filterForm = document.getElementById('filter-form');

    // submit del formulario
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const status = document.getElementById('status').value.trim().toLowerCase();
        const species = document.getElementById('species').value.trim();
        const type = document.getElementById('type').value.trim();
        const gender = document.getElementById('gender').value.trim().toLowerCase();


        // valores del filtro
        const filters = {
            name,
            status: isValidStatus(status) ? status : '',
            species,
            type,
            gender: isValidGender(gender) ? gender : ''
        };

        fetchCharacters(filters);
    });

    function fetchCharacters(filters) {
        let url = `${apiUrl}character/?`; // url base para solicitud datos de los personajes
        for (let key in filters) { // se agregan los filtros que estan vacios como parametros para la consulta a la api
            if (filters[key] !== '') {
                url += `${key}=${filters[key]}&`;
            }
        }

        fetch(url) // solicitud GET. Sila respuesta es ok, se convierte a json.
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response error');
                }
                return response.json();
            })
            .then(data => { // se muestran los resultados
                displayCharacters(data.results);
            })
            .catch(error => { // en caso de error se muestra el mismo en consola y pantalla
                console.log(error)
                displayError('No se encontro ningun personaje. Intente de nuevo');
            });
    }

    //funcion para mostrar personajes
    function displayCharacters(characters) {
        characterList.innerHTML = ''; // Limpiar el contenido anterior

        // para cada personaje
        characters.forEach(character => {
            // crear un nuevo div
            const characterElement = document.createElement('div');
            characterElement.classList.add('character');

            // imagen
            const imageElement = document.createElement('img');
            imageElement.src = character.image;
            imageElement.alt = character.name;
            characterElement.appendChild(imageElement);

            // div para la info
            const characterInfo = document.createElement('div');
            characterInfo.classList.add('character-info');

            // nombre 
            const nameElement = document.createElement('h3');
            nameElement.textContent = character.name;
            characterInfo.appendChild(nameElement);


            // status
            const statusElement = document.createElement('p');
            statusElement.textContent = `Status: ${character.status}`;
            characterInfo.appendChild(statusElement);


            // species
            const speciesElement = document.createElement('p');
            speciesElement.textContent = `Species: ${character.species}`;
            characterInfo.appendChild(speciesElement);


            // gender
            const genderElement = document.createElement('p');
            genderElement.textContent = `Gender: ${character.gender}`;
            characterInfo.appendChild(genderElement);

            // agregar el div de info al div del personaje
            characterElement.appendChild(characterInfo);

            // agregar el div del personaje a la lista de personajes en el DOM
            characterList.appendChild(characterElement);
        });
    }

    // funcion mostrar error
    function displayError(message) {
        characterList.innerHTML = `<p>${message}</p>`;
    }

    // funcion para validar el status del personaje
    function isValidStatus(status) {
        const validStatuses = ['alive', 'dead', 'unknown'];
        return validStatuses.includes(status);
    }

    // funcion para validar el genero del personaje
    function isValidGender(gender) {
        const validGenders = ['female', 'male', 'genderless', 'unknown'];
        return validGenders.includes(gender);
    }
});
