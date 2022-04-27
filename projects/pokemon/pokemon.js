// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('.container');

for (let i = 1; i <= 151; i++) {
  const pokemonBox = document.createElement('div');
  pokemonBox.classList.add('poke-box');
  const pokemonImg = document.createElement('img');
  pokemonImg.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
  const pokemonNum = document.createElement('p');
  pokemonNum.innerText = `NO.${i}`;
  pokemonBox.append(pokemonImg);
  pokemonBox.append(pokemonNum);
  container.append(pokemonBox);
}
