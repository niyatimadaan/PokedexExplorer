import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AutocompleteMultiSelectSearchBox({listToSearch, selectedValue, setSelectedValue}:{listToSearch: string[], selectedValue: string, setSelectedValue: any}) {
  return (
    // <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={listToSearch}
        sx={{ minWidth: 300 }}
        // getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        onChange={(event, newValue) => {
            console.log(newValue);
            setSelectedValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Pokemons"
          />
        )}
      />
      // {/* <Autocomplete
      //   multiple
      //   id="tags-filled"
      //   options={top100Films.map((option) => option.title)}
      //   defaultValue={[top100Films[13].title]}
      //   freeSolo
      //   renderTags={(value: readonly string[], getTagProps) =>
      //     value.map((option: string, index: number) => {
      //       const { key, ...tagProps } = getTagProps({ index });
      //       return (
      //         <Chip variant="outlined" label={option} key={key} {...tagProps} />
      //       );
      //     })
      //   }
      //   renderInput={(params) => (
      //     <TextField
      //       {...params}
      //       variant="filled"
      //       label="freeSolo"
      //       placeholder="Favorites"
      //     />
      //   )}
      // /> */}
    // </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

