import { useState } from "react";
import { trpc } from "../utils/trpc";

export default function AddPokemon() {
  const [name, setName] = useState("");
  const [types, setTypes] = useState("");
  const [sprite, setSprite] = useState("");
  const [image, setImage] = useState("");
  const addPokemon = trpc.addPokemon.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPokemon.mutateAsync({
      name,
      types: types.split(",").map((type) => type.trim()),
      sprite,
      image,
    });

    // Clear the form fields
    setName("");
    setTypes("");
    setSprite("");
  };

  return (
    <div>
      <h1>Add Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pokémon Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Pokémon name"
          />
        </div>
        <div>
          <label>Types (comma-separated)</label>
          <input
            value={types}
            onChange={(e) => setTypes(e.target.value)}
            placeholder="Enter types (e.g., grass, poison)"
          />
        </div>
        <div>
          <label>Sprite URL</label>
          <input
            value={sprite}
            onChange={(e) => setSprite(e.target.value)}
            placeholder="Enter sprite image URL"
          />
        </div>
        <div>
          <label>Sprite URL</label>
          <input
            value={sprite}
            onChange={(e) => setSprite(e.target.value)}
            placeholder="Enter sprite image URL"
          />
        </div>
        <button type="submit">Add Pokémon</button>
      </form>
    </div>
  );
}
