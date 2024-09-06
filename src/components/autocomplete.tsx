import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteSearchBox({listToSearch, selectedValue, setSelectedValue}:{listToSearch: string[], selectedValue: string, setSelectedValue: any}) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        value={selectedValue}
        onChange={(event, newValue) => {
            console.log(newValue);
            setSelectedValue(newValue);
        }}
        options={listToSearch}
            // .map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
  );
}