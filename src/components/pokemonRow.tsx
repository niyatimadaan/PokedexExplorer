import { Divider, Stack } from "@mui/material";
import { Pokemon } from "@prisma/client";

type PokemonRowProps = {
  pokemon: Pokemon;
};

export const PokemonRow = ({ pokemon }: PokemonRowProps) => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    // divider={<Divider orientation="vertical" flexItem />}
    spacing={2}
    sx={{
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "15px",
      fontSize: "1.2em",
      flexWrap: "wrap",
    }}
  >
    {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}> */}
    <img src={pokemon.image} alt={pokemon.name} width={50} />
    <div>{pokemon.id}</div>
    <div>{pokemon.name}</div>
    <div>{pokemon.types.join(", ")}</div>
    <div>{pokemon.sprite}</div>
    {/* </div> */}
  </Stack>
);
