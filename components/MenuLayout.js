import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import firebase from "../firebase/Firebase";

export default function PositionedMenu({
  logout,
  profile,
  connexion,
  enregistrer,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ArrowDropDownCircleIcon sx={{ color: "black" }} />
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {firebase.isLoggedIN() && (
          <MenuItem onClick={handleClose}>{profile}</MenuItem>
        )}
        {firebase.isLoggedIN() && (
          <MenuItem onClick={handleClose}>{logout}</MenuItem>
        )}
        {!firebase.isLoggedIN() && (
          <MenuItem onClick={handleClose}>{connexion}</MenuItem>
        )}
        {!firebase.isLoggedIN() && (
          <MenuItem onClick={handleClose}>{enregistrer}</MenuItem>
        )}
      </Menu>
    </div>
  );
}
