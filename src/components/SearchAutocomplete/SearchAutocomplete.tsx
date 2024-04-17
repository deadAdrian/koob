"use client";

import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

interface Props {
  label: string;
  api: { fetch: Function };
}

export default function SearchAutocomplete({ label, api }: Readonly<Props>) {
  const [shrinkSearchLabel, setShrinkSearchLabel] = useState(false);
  const [searchOptions, setSearchOptions] = useState<
    readonly { label: string }[]
  >([]);
  const [openSearch, setOpenSearch] = useState(false);
  const loading = openSearch && searchOptions.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const result = await api.fetch();

      if (active) {
        setSearchOptions(result);
      }
    })();
  }, [loading]);

  useEffect(() => {
    if (!openSearch) {
      setSearchOptions([]);
    }
  }, [openSearch]);

  return (
    <Autocomplete
      open={openSearch}
      onOpen={() => {
        setOpenSearch(true);
      }}
      onClose={() => {
        setOpenSearch(false);
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      loading={loading}
      disablePortal
      options={searchOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputLabelProps={{
            shrink: shrinkSearchLabel,
            sx: {
              left: shrinkSearchLabel ? "0rem" : "1.5rem",
            },
          }}
          onFocus={() => {
            setShrinkSearchLabel(true);
          }}
          onBlur={(e) => {
            setShrinkSearchLabel(!!e.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
