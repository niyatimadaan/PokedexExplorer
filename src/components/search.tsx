import { useState } from "react";
import { trpc } from "../utils/trpc";
import { PokemonRow } from "./pokemonRow";
import Link from "next/link";
import AutocompleteSearchBox from "@/components/autocomplete";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PokemonCard from "@/components/pokemonCard";

export default function Search() {
  const [name, setName] = useState("");
  const { data: pokemon, refetch } = trpc.getPokemon.useQuery(name, { enabled: false });
  const { data: pokemonArray, refetch: refetchPokemonArray } = trpc.getAllPokemon.useQuery();

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
            onChange={(e) => setName(e.target.value)}
            value={name}
            sx={{ width: 300 }}
          />
          <AutocompleteSearchBox
            listToSearch={pokemonArray?.map((obj) => obj.name) || []}
            selectedValue={name}
            setSelectedValue={(e: any) => {
              console.log("e", e);
              setName(e);
            }}
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Fetch Pokemon
          </Button>
        </Stack>
      </form>
      {pokemon && <PokemonRow pokemon={pokemon} />}
      {pokemon && (
        <Container sx={{ maxWidth: "max-content" }}>
          <PokemonCard pokemon={pokemon} />
        </Container>
      )}
    </div>
  );
}
