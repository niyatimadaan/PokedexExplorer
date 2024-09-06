import { useState } from "react";
import { trpc } from "../utils/trpc";
import { PokedexTable } from "./pokedexTable";
import { Button, Container, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AutocompleteMultiSelectSearchBox from "@/components/autocompleteMultiSelect";
import CardGrid from "@/components/cardGrid";

export default function SearchMultiplePokemon() {
  const [names, setNames] = useState("");
  const { data: allPokemons, refetch: refetchPokemonArray } = trpc.getAllPokemon.useQuery();
  const { data: pokemonArray, refetch } = trpc.getPokemonArray.useQuery(
    names.split(",").map((name) => name.trim()),
    { enabled: false }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{margin: 5}}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            placeholder="Enter Pokemon name"
            onChange={(e) => setNames(e.target.value)}
            value={names}
            sx={{ width: 300 }}
          />
          <AutocompleteMultiSelectSearchBox
            listToSearch={allPokemons?.map((obj) => obj.name) || []}
            selectedValue={names}
            setSelectedValue={(newValue: any) => setNames(newValue.join(", "))}
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Fetch Pokemon
          </Button>
        </Stack>
      </form>
      {pokemonArray && (
        <>
          <PokedexTable pokemonArray={pokemonArray} />
          <Container sx={{ maxWidth: "max-content", marginTop: 10 }}>
            <CardGrid pokemonArray={pokemonArray} />
          </Container>
        </>
      )}
    </div>
  );
}
