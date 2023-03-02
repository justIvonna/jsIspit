// Napišite aplikaciju koja po traženom terminu izlistava pronađene podatke. Aplikacija se sastoji od text input fielda, gumba za submit te liste rezultata.

// 1. Podaci trebaju biti dobiveni s iTunes search anice, npr. https://itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm&term=maroon (samo je “maroon” varijabilno)
// 2. Kad se u search upiše pojam i stisne Go, lista rezultata mora se updateati s imenom umjetnika i žanrom ako ga ima
// 3. U slučaju praznog rezultata, anica mora prikazati poruku da nema rezultata pretrage
// 4.Ne dozvoliti prazne unose, dodati error poruku ukoliko je unos prazan

const url =
    'https://itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm&term=';

const result = document.getElementById('results');
const btn = document.getElementById('btn');
const textContainer = document.getElementById('container');

btn.addEventListener('click', () => {
    let word = document.getElementById('inputField').value;
    // console.log(word);
    fetch(`${url}${word}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
});
