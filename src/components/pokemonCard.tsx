import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pokemon } from "@prisma/client";
import { Divider } from "@mui/material";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card sx={{ maxWidth: 320, alignContent: "center" }}>
      <CardMedia
        sx={{ 
            height: 270,
        }}
        image={pokemon.image}
        title={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Type : {pokemon.types.join(", ")}
          <Divider />
          Sprite : {pokemon.sprite}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
