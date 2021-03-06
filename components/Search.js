import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Search({ className, onClick, inputRef }) {
  const [search, setSearch] = useState("");
  

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyCenter: "center",
        borderRadius: 8,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu" />
      <InputBase
        inputRef={inputRef}
        className={className}
        onClick={onClick}
        sx={{
          display: "flex",
          flex: 1,
          textAlign: "center",
          fontSize: 13,
          color: "black",
        }}
        placeholder="Chercher une Baby sitter ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon onClick={onClick} />
      </IconButton>
    </Paper>
  );
}
