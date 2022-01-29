import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Fuse from "fuse.js";
import users from "/users.json";

export default function Search({ className }) {
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
        className={className}
        sx={{
          display: "flex",
          flex: 1,
          alignContent: "center",
          justifyItems: "center",
          textAlign: "center",
          border: "#B538A8",
          fontSize: 20,
          color: "black",
        }}
        placeholder="Chercher une Baby sitter ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
