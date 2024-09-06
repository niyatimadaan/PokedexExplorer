import { useState } from "react";
import { trpc } from "../utils/trpc";
import { PokedexTable } from "./pokedexTable";
import { Button, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function SearchType() {
  const [type, setType] = useState("");
  const { data: pokemonArray, refetch } = trpc.getPokemonByType.useQuery(type, { enabled: false });

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <form onSubmit={handleFilter}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{margin: 5}}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            placeholder="Enter Pokemon type, Eg:grass"
            onChange={(e) => setType(e.target.value)}
            value={type}
            sx={{ width: 300 }}
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Fetch Pokemon
          </Button>
        </Stack>
      </form>
      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
}
