const dogs = [
    { name: 'Sammy' },
    { name: 'Roscoe' },
    { name: 'Artichoke' },
    { name: 'Pookie' },
]

async function main() {
    displayDogs();
}

main()

function displayDogs() {
    for (let dog of dogs) {
        const dogUI = document.createElement('li');
        dogUI.className = 'list-group-item';
        dogUI.innerText = dog.name;

        document.getElementById('dogs-list').appendChild(dogUI);
    }
}
