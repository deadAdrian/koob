import { css } from "@emotion/css";
import StyledNewBookForm from "./styles";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import SearchAutocomplete from "../SearchAutocomplete/SearchAutocomplete";


function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const fakeApi = {
  async fetch(){
    await sleep(1000);
    return [
      { label: "Harry Potter and the Sorcerer’s Stone" },
      { label: "Harry Potter and the Chamber of Secrets" },
      { label: "Harry Potter and the Prisoner of Azkaban" },
      { label: "Harry Potter and the Goblet of Fire" },
      { label: "Harry Potter and the Order of the Phoenix" },
      { label: "Harry Potter and the Half-Blood Prince" },
      { label: "Harry Potter and the Deathly Hallows" },
    ]
  }
}



export default function NewBookForm() {

  return (
    <section
      className={css`
        ${StyledNewBookForm()}
      `}
    >
      <SearchAutocomplete label="Search books" api={fakeApi}/>
    </section>
  );
}
