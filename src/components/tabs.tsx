import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Search from "./search";
import SearchMultiplePokemon from "./multipleSearch";
import SearchType from "./pokedex";
import { Typography } from "@mui/material";

export default function MenuTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        centered
        selectionFollowsFocus
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="Search Pokemon" />
        <Tab value="2" label="Search Multiple pokemon" />
        <Tab value="3" label="Search Pokemon Type" />
      </Tabs>
      {value === "1" ? (
        <Box>
          <Typography variant="h4" color="darkslategray" fontSize="sm" fontWeight="lg" paddingX={5} paddingTop={5}>
            SEARCH POKEMON BY NAME
          </Typography>
          <Search />
        </Box>
      ) : value === "2" ? (
        <Box>
          <Typography variant="h4" color="darkslategray" fontSize="sm" fontWeight="lg" paddingX={5} paddingTop={5}>
            SEARCH MULTIPLE POKEMON BY NAME
          </Typography>
          <SearchMultiplePokemon />
        </Box>
      ) : (
        <Box>
          <Typography variant="h4" color="darkslategray" fontSize="sm" fontWeight="lg" paddingX={5} paddingTop={5}>
            SEARCH POKEMON BY TYPE
          </Typography>
          <SearchType />
        </Box>
      )}
    </Box>
  );
}
