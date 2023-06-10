// Arreglo de cartas
let cards = [
  {
    id: 1,
    name: "Bulbasaur",
    attack: 49,
    defense: 49,
    type: "Grass",
    pokedexNumber: 1,
    evolution: "Ivysaur",
    ability: "Overgrow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "Ivysaur",
    attack: 62,
    defense: 63,
    type: "Grass",
    pokedexNumber: 2,
    evolution: "Venusaur",
    ability: "Overgrow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "Venusaur",
    attack: 82,
    defense: 83,
    type: "Grass",
    pokedexNumber: 3,
    evolution: null,
    ability: "Overgrow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 4,
    name: "Charmander",
    attack: 52,
    defense: 43,
    type: "Fire",
    pokedexNumber: 4,
    evolution: "Charmeleon",
    ability: "Blaze",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 5,
    name: "Charmeleon",
    attack: 64,
    defense: 58,
    type: "Fire",
    pokedexNumber: 5,
    evolution: "Charizard",
    ability: "Blaze",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 6,
    name: "Charizard",
    attack: 84,
    defense: 78,
    type: "Fire",
    pokedexNumber: 6,
    evolution: null,
    ability: "Blaze",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 7,
    name: "Squirtle",
    attack: 48,
    defense: 65,
    type: "Water",
    pokedexNumber: 7,
    evolution: "Wartortle",
    ability: "Torrent",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 8,
    name: "Wartortle",
    attack: 63,
    defense: 80,
    type: "Water",
    pokedexNumber: 8,
    evolution: "Blastoise",
    ability: "Torrent",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: 9,
    name: "Blastoise",
    attack: 83,
    defense: 100,
    type: "Water",
    pokedexNumber: 9,
    evolution: null,
    ability: "Torrent",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: 10,
    name: "Caterpie",
    attack: 30,
    defense: 35,
    type: "Bug",
    pokedexNumber: 10,
    evolution: "Metapod",
    ability: "Shield Dust",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    id: 11,
    name: "Metapod",
    attack: 20,
    defense: 55,
    type: "Bug",
    pokedexNumber: 11,
    evolution: "Butterfree",
    ability: "Shed Skin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    id: 12,
    name: "Butterfree",
    attack: 45,
    defense: 50,
    type: "Bug",
    pokedexNumber: 12,
    evolution: null,
    ability: "Compound Eyes",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 13,
    name: "Weedle",
    attack: 35,
    defense: 30,
    type: "Bug",
    pokedexNumber: 13,
    evolution: "Kakuna",
    ability: "Shield Dust",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    id: 14,
    name: "Kakuna",
    attack: 25,
    defense: 50,
    type: "Bug",
    pokedexNumber: 14,
    evolution: "Beedrill",
    ability: "Shed Skin",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    id: 15,
    name: "Beedrill",
    attack: 90,
    defense: 40,
    type: "Bug",
    pokedexNumber: 15,
    evolution: null,
    ability: "Swarm",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    id: 16,
    name: "Pidgey",
    attack: 45,
    defense: 40,
    type: "Flying",
    pokedexNumber: 16,
    evolution: "Pidgeotto",
    ability: "Keen Eye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    id: 17,
    name: "Pidgeotto",
    attack: 60,
    defense: 55,
    type: "Flying",
    pokedexNumber: 17,
    evolution: "Pidgeot",
    ability: "Keen Eye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    id: 18,
    name: "Pidgeot",
    attack: 80,
    defense: 75,
    type: "Flying",
    pokedexNumber: 18,
    evolution: null,
    ability: "Keen Eye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    id: 19,
    name: "Rattata",
    attack: 56,
    defense: 35,
    type: "Normal",
    pokedexNumber: 19,
    evolution: "Raticate",
    ability: "Run Away",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 20,
    name: "Raticate",
    attack: 81,
    defense: 60,
    type: "Normal",
    pokedexNumber: 20,
    evolution: null,
    ability: "Run Away",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
  {
    id: 21,
    name: "Spearow",
    attack: 60,
    defense: 30,
    type: "Flying",
    pokedexNumber: 21,
    evolution: "Fearow",
    ability: "Keen Eye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  },
  {
    id: 22,
    name: "Fearow",
    attack: 90,
    defense: 65,
    type: "Flying",
    pokedexNumber: 22,
    evolution: null,
    ability: "Keen Eye",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
  {
    id: 23,
    name: "Ekans",
    attack: 60,
    defense: 44,
    type: "ison",
    pokedexNumber: 23,
    evolution: "Arbok",
    ability: "Intimidate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  {
    id: 24,
    name: "Arbok",
    attack: 85,
    defense: 69,
    type: "Poison",
    pokedexNumber: 24,
    evolution: null,
    ability: "Intimidate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  },
  {
    id: 25,
    name: "Pikachu",
    attack: 55,
    defense: 40,
    type: "Electric",
    pokedexNumber: 25,
    evolution: "Raichu",
    ability: "Static",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 26,
    name: "Raichu",
    attack: 90,
    defense: 55,
    type: "Electric",
    pokedexNumber: 26,
    evolution: null,
    ability: "Static",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  },
  {
    id: 27,
    name: "Sandshrew",
    attack: 75,
    defense: 85,
    type: "Ground",
    pokedexNumber: 27,
    evolution: "Sandslash",
    ability: "Sand Veil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  },
  {
    id: 28,
    name: "Sandslash",
    attack: 100,
    defense: 110,
    type: "Ground",
    pokedexNumber: 28,
    evolution: null,
    ability: "Sand Veil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  },
  {
    id: 29,
    name: "Nidoran♀",
    attack: 47,
    defense: 52,
    type: "Poison",
    pokedexNumber: 29,
    evolution: "Nidorina",
    ability: "Poison Point",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  },
  {
    id: 30,
    name: "Nidorina",
    attack: 63,
    defense: 67,
    type: "Poison",
    pokedexNumber: 30,
    evolution: "Nidoqueen",
    ability: "Poison Point",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  },
  {
    id: 31,
    name: "Nidoqueen",
    attack: 92,
    defense: 87,
    type: "Poison",
    pokedexNumber: 31,
    evolution: null,
    ability: "Poison Point",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  },
  {
    id: 32,
    name: "Nidoran♂",
    attack: 57,
    defense: 40,
    type: "Poison",
    pokedexNumber: 32,
    evolution: "Nidorino",
    ability: "Poison Point",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  },
  {
    id: 33,
    name: "Nidorino",
    attack: 72,
    defense: 57,
    type: "Poison",
    pokedexNumber: 33,
    evolution: "Nidoking",
    ability: "Poison Point",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  },
  {
    id: 34,
    name: "Nidoking",
    attack: 102,
    defense: 77,
    type: "Poison",
    pokedexNumber: 34,
    evolution: null,
    ability: "Poison Point",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  },
  {
    id: 35,
    name: "Clefairy",
    attack: 45,
    defense: 48,
    type: "Fairy",
    pokedexNumber: 35,
    evolution: "Clefable",
    ability: "Cute Charm",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  },
  {
    id: 36,
    name: "Clefable",
    attack: 70,
    defense: 73,
    type: "Fairy",
    pokedexNumber: 36,
    evolution: null,
    ability: "Cute",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  },
  {
    id: 37,
    name: "Vulpix",
    attack: 41,
    defense: 40,
    type: "Fire",
    pokedexNumber: 37,
    evolution: "Ninetales",
    ability: "Flash Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  },
  {
    id: 38,
    name: "Ninetales",
    attack: 76,
    defense: 75,
    type: "Fire",
    pokedexNumber: 38,
    evolution: null,
    ability: "Flash Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
  {
    id: 39,
    name: "Jigglypuff",
    attack: 45,
    defense: 48,
    type: "Normal",
    pokedexNumber: 39,
    evolution: "Wigglytuff",
    ability: "Cute Charm",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    id: 40,
    name: "Wigglytuff",
    attack: 70,
    defense: 45,
    type: "Normal",
    pokedexNumber: 40,
    evolution: null,
    ability: "Cute Charm",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  },
  {
    id: 41,
    name: "Zubat",
    attack: 45,
    defense: 35,
    type: "Poison",
    pokedexNumber: 41,
    evolution: "Golbat",
    ability: "Inner Focus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    id: 42,
    name: "Golbat",
    attack: 80,
    defense: 70,
    type: "Poison",
    pokedexNumber: 42,
    evolution: null,
    ability: "Inner Focus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  },
  {
    id: 43,
    name: "Oddish",
    attack: 50,
    defense: 55,
    type: "Grass",
    pokedexNumber: 43,
    evolution: "Gloom",
    ability: "Chlorophyll",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  },
  {
    id: 44,
    name: "Gloom",
    attack: 65,
    defense: 70,
    type: "Grass",
    pokedexNumber: 44,
    evolution: "Vileplume",
    ability: "Chlorophyll",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  },
  {
    id: 45,
    name: "Vileplume",
    attack: 80,
    defense: 85,
    type: "Grass",
    pokedexNumber: 45,
    evolution: null,
    ability: "Chlorophyll",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  },
  {
    id: 46,
    name: "Paras",
    attack: 70,
    defense: 55,
    type: "Bug",
    pokedexNumber: 46,
    evolution: "Parasect",
    ability: "Effect Spore",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  },
  {
    id: 47,
    name: "Parasect",
    attack: 95,
    defense: 80,
    type: "Bug",
    pokedexNumber: 47,
    evolution: null,
    ability: "Effect Spore",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  },
  {
    id: 48,
    name: "Venonat",
    attack: 55,
    defense: 50,
    type: "Bug",
    pokedexNumber: 48,
    evolution: "Venomoth",
    ability: "Compound Eyes",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  },
  {
    id: 49,
    name: "Venomoth",
    attack: 65,
    defense: 60,
    type: "Bug",
    pokedexNumber: 49,
    evolution: null,
    ability: "Compound Eyes",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  },
  {
    id: 50,
    name: "Diglett",
    attack: 55,
    defense: 25,
    type: "Ground",
    pokedexNumber: 50,
    evolution: "Dugtrio",
    ability: "Sand Veil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  },
  {
    id: 51,
    name: "Dugtrio",
    attack: 80,
    defense: 50,
    type: "Ground",
    pokedexNumber: 51,
    evolution: null,
    ability: "Sand Veil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  },
  {
    id: 52,
    name: "Meowth",
    attack: 45,
    defense: 35,
    type: "Normal",
    pokedexNumber: 52,
    evolution: "Persian",
    ability: "Pickup",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    id: 53,
    name: "ian",
    attack: 70,
    defense: 60,
    type: "Normal",
    pokedexNumber: 53,
    evolution: null,
    ability: "Limber",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  },
  {
    id: 54,
    name: "Psyduck",
    attack: 52,
    defense: 48,
    type: "Water",
    pokedexNumber: 54,
    evolution: "Golduck",
    ability: "Damp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    id: 55,
    name: "Golduck",
    attack: 82,
    defense: 78,
    type: "Water",
    pokedexNumber: 55,
    evolution: null,
    ability: "Damp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  },
  {
    id: 56,
    name: "Mankey",
    attack: 80,
    defense: 35,
    type: "Fighting",
    pokedexNumber: 56,
    evolution: "Primeape",
    ability: "Vital Spirit",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  },
  {
    id: 57,
    name: "Primeape",
    attack: 105,
    defense: 60,
    type: "Fighting",
    pokedexNumber: 57,
    evolution: null,
    ability: "Vital Spirit",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  },
  {
    id: 58,
    name: "Growlithe",
    attack: 70,
    defense: 45,
    type: "Fire",
    pokedexNumber: 58,
    evolution: "Arcanine",
    ability: "Intimidate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  },
  {
    id: 59,
    name: "Arcanine",
    attack: 110,
    defense: 80,
    type: "Fire",
    pokedexNumber: 59,
    evolution: null,
    ability: "Intimidate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    id: 60,
    name: "Poliwag",
    attack: 50,
    defense: 40,
    type: "Water",
    pokedexNumber: 60,
    evolution: "Poliwhirl",
    ability: "Water Absorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  {
    id: 61,
    name: "Poliwhirl",
    attack: 65,
    defense: 65,
    type: "Water",
    pokedexNumber: 61,
    evolution: "Poliwrath",
    ability: "Water Absorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  },
  {
    id: 62,
    name: "Poliwrath",
    attack: 95,
    defense: 95,
    type: "Water",
    pokedexNumber: 62,
    evolution: null,
    ability: "Water Absorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  },
  {
    id: 63,
    name: "Abra",
    attack: 20,
    defense: 15,
    type: "Psychic",
    pokedexNumber: 63,
    evolution: "Kadabra",
    ability: "Synchronize",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    id: 64,
    name: "Kadabra",
    attack: 35,
    defense: 30,
    type: "Psychic",
    pokedexNumber: 64,
    evolution: "Alakazam",
    ability: "Synchronize",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    id: 65,
    name: "Alakazam",
    attack: 50,
    defense: 45,
    type: "Psychic",
    pokedexNumber: 65,
    evolution: null,
    ability: "Synchronize",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
];


// export default cards;
module.exports = cards;