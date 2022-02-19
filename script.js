const BASE_URL='https://akabab.github.io/superhero-api/api'
const JSON_URL= BASE_URL + '/all.json'
const IMG_URL= 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api'
const main= document.getElementById('main')


function getSuperHero(URL) {
    fetch(URL).then(res => res.json()).then(data => {
        showSuperHero(data);
        console.log(data);
    })
    
}
getSuperHero(JSON_URL);

function showSuperHero(data){
    main.innerHTML=' ';
    data.forEach(superHero => {
        const name = superHero.name;
        const {strength, speed, power, combat, durability, intelligence} = superHero.powerstats;
        const superHeroEl= document.createElement('div');
        superHeroEl.classList.add('superHero');
        superHeroEl.innerHTML=`<img src="${superHero.images.lg}" alt="${name}" class="img">

    <div class="superHeroInfo">
        <h3>${name}</h3>
     </div>

    <div class="details">
    <div id="D1">
    <div class="attribute-container"><p class="attributes">Strength: <p class="inner-attribute"> ${" " + strength}</p></p></div>
    <div class="attribute-container"><p class="attributes">Speed:<p class="inner-attribute">${" " + speed}</p></div>
    </div>

    <div id="D2">
    <div class="attribute-container"><p class="attributes">Power: <p class="inner-attribute"> ${" " + power}</p></p></div>
    <div class="attribute-container"><p class="attributes">Combat:<p class="inner-attribute">${" " + combat}</p></p></div>
    </div>

    <div id="D3">
    <div class="attribute-container"><p class="attributes">Durability: <p class="inner-attribute"> ${" " + durability}</p></p></div>
    <div class="attribute-container"><p class="attributes">Intelligence:<p class="inner-attribute">${" " + intelligence}</p></p></div>
    </div>
    </div>
    
    `

    main.appendChild(superHeroEl);
    }
    );

};
