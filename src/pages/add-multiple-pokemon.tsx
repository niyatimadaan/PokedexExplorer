import { trpc } from "@/utils/trpc";

const pokemonList = [
  {
    id: 21,
    name: "Spearow",
    types: ["normal", "flying"],
    sprite: "https://pokemon.com/pictures/spiro.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png",
  },
  {
    id: 22,
    name: "Fearow",
    types: ["normal", "flying"],
    sprite: "https://pokemon.com/pictures/fearow.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png",
  },
  {
    id: 23,
    name: "Ekans",
    types: ["poison"],
    sprite: "https://pokemon.com/pictures/ekans.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png",
  },
  {
    id: 24,
    name: "Arbok",
    types: ["poison"],
    sprite: "https://pokemon.com/pictures/arbok.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png",
  },
  {
    id: 25,
    name: "Pikachu",
    types: ["electric"],
    sprite: "https://pokemon.com/pictures/pikachu.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
  },
  {
    id: 26,
    name: "Raichu",
    types: ["electric"],
    sprite: "https://pokemon.com/pictures/raichu.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",
  },
  {
    id: 27,
    name: "Sandshrew",
    types: ["ground"],
    sprite: "https://pokemon.com/pictures/sandshrew.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png",
  },
  {
    id: 28,
    name: "Sandslash",
    types: ["ground"],
    sprite: "https://pokemon.com/pictures/sandslash.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png",
  },
  {
    id: 29,
    name: "Nidoran",
    types: ["poison"],
    sprite: "https://pokemon.com/pictures/nidoran_f.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png",
  },
  {
    id: 30,
    name: "Nidorina",
    types: ["poison"],
    sprite: "https://pokemon.com/pictures/nidorina.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png",
  },
  {
    id: 31,
    name: "Nidoqueen",
    types: ["poison", "ground"],
    sprite: "https://pokemon.com/pictures/nidoqueen.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png",
  },
  {
    id: 32,
    name: "Nidoran♂",
    types: ["poison"],
    sprite: "https://pokemon.com/pictures/nidoran_m.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/032.png",
  },
  {
    id: 33,
    name: "Nidorino",
    types: ["poison"],
    sprite: "https://pokemon.com/pictures/nidorino.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png",
  },
  {
    id: 34,
    name: "Nidoking",
    types: ["poison", "ground"],
    sprite: "https://pokemon.com/pictures/nidoking.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png",
  },
  {
    id: 35,
    name: "Clefairy",
    types: ["fairy"],
    sprite: "https://pokemon.com/pictures/clefairy.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png",
  },
  {
    id: 36,
    name: "Clefable",
    types: ["fairy"],
    sprite: "https://pokemon.com/pictures/clefable.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png",
  },
  {
    id: 37,
    name: "Vulpix",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/vulpix.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png",
  },
  {
    id: 38,
    name: "Ninetales",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/ninetales.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png",
  },
  {
    id: 39,
    name: "Jigglypuff",
    types: ["normal", "fairy"],
    sprite: "https://pokemon.com/pictures/jigglypuff.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png",
  },
  {
    id: 40,
    name: "Wigglytuff",
    types: ["normal", "fairy"],
    sprite: "https://pokemon.com/pictures/wigglytuff.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/040.png",
  },
  {
    id: 41,
    name: "Zubat",
    types: ["poison", "flying"],
    sprite: "https://pokemon.com/pictures/zubat.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png",
  },
  {
    id: 42,
    name: "Golbat",
    types: ["poison", "flying"],
    sprite: "https://pokemon.com/pictures/golbat.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/042.png",
  },
  {
    id: 43,
    name: "Diglett",
    types: ["ground"],
    sprite: "https://pokemon.com/pictures/diglett.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/043.png",
  },
  {
    id: 44,
    name: "Dugtrio",
    types: ["ground"],
    sprite: "https://pokemon.com/pictures/dugtrio.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/044.png",
  },
  {
    id: 45,
    name: "Meowth",
    types: ["normal"],
    sprite: "https://pokemon.com/pictures/meowth.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png",
  },
  {
    id: 46,
    name: "Persian",
    types: ["normal"],
    sprite: "https://pokemon.com/pictures/persian.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png",
  },
  {
    id: 47,
    name: "Psyduck",
    types: ["water"],
    sprite: "https://pokemon.com/pictures/psyduck.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/047.png",
  },
  {
    id: 48,
    name: "Golduck",
    types: ["water"],
    sprite: "https://pokemon.com/pictures/golduck.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/048.png",
  },
  {
    id: 49,
    name: "Mankey",
    types: ["fighting"],
    sprite: "https://pokemon.com/pictures/mankey.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/049.png",
  },
  {
    id: 50,
    name: "Primeape",
    types: ["fighting"],
    sprite: "https://pokemon.com/pictures/primeape.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png",
  },
  {
    id: 51,
    name: "Growlithe",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/growlithe.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/051.png",
  },
  {
    id: 52,
    name: "Arcanine",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/arcanine.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png",
  },
  {
    id: 53,
    name: "Poliwag",
    types: ["water"],
    sprite: "https://pokemon.com/pictures/poliwag.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/053.png",
  },
  {
    id: 54,
    name: "Poliwhirl",
    types: ["water"],
    sprite: "https://pokemon.com/pictures/poliwhirl.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png",
  },
  {
    id: 55,
    name: "Poliwrath",
    types: ["water", "fighting"],
    sprite: "https://pokemon.com/pictures/poliwrath.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/055.png",
  },
  {
    id: 56,
    name: "Machop",
    types: ["fighting"],
    sprite: "https://pokemon.com/pictures/machop.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/056.png",
  },
  {
    id: 57,
    name: "Machoke",
    types: ["fighting"],
    sprite: "https://pokemon.com/pictures/machoke.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/057.png",
  },
  {
    id: 58,
    name: "Machamp",
    types: ["fighting"],
    sprite: "https://pokemon.com/pictures/machamp.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png",
  },
  {
    id: 59,
    name: "Bellsprout",
    types: ["grass", "poison"],
    sprite: "https://pokemon.com/pictures/bellsprout.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png",
  },
  {
    id: 60,
    name: "Weepinbell",
    types: ["grass", "poison"],
    sprite: "https://pokemon.com/pictures/weepinbell.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png",
  },
  {
    id: 61,
    name: "Victreebel",
    types: ["grass", "poison"],
    sprite: "https://pokemon.com/pictures/victreebel.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/061.png",
  },
  {
    id: 62,
    name: "Tentacool",
    types: ["water", "poison"],
    sprite: "https://pokemon.com/pictures/tentacool.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/062.png",
  },
  {
    id: 63,
    name: "Tentacruel",
    types: ["water", "poison"],
    sprite: "https://pokemon.com/pictures/tentacruel.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png",
  },
  {
    id: 64,
    name: "Geodude",
    types: ["rock", "ground"],
    sprite: "https://pokemon.com/pictures/geodude.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/064.png",
  },
  {
    id: 65,
    name: "Graveler",
    types: ["rock", "ground"],
    sprite: "https://pokemon.com/pictures/graveler.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png",
  },
  {
    id: 66,
    name: "Golem",
    types: ["rock", "ground"],
    sprite: "https://pokemon.com/pictures/golem.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png",
  },
  {
    id: 67,
    name: "Ponyta",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/ponyta.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png",
  },
  {
    id: 68,
    name: "Rapidash",
    types: ["fire"],
    sprite: "https://pokemon.com/pictures/rapidash.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png",
  },
  {
    id: 69,
    name: "Slowpoke",
    types: ["water", "psychic"],
    sprite: "https://pokemon.com/pictures/slowpoke.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png",
  },
  {
    id: 70,
    name: "Slowbro",
    types: ["water", "psychic"],
    sprite: "https://pokemon.com/pictures/slowbro.png",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/070.png",
  },
];

export default function AddMultiplePokemon() {
  const addMultiplePokemon = trpc.addMultiplePokemon.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const pokemons = pokemonList.map((pokemon) => ({
      name: pokemon.name,
      types: pokemon.types,
      sprite: pokemon.sprite,
      image: pokemon.image,
    }));
    await addMultiplePokemon.mutateAsync(pokemons);
  };

  return (
    <div>
      <h1>Add Multiple Pokémon</h1>
      I think there are enough Pokémon in the list already. What do you think?
      {/* <form onSubmit={handleSubmit}>
          <button type="submit">Add Pokémon</button>
        </form> */}
    </div>
  );
}
