import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardLogin({ avatar, typo1, typo2, typo3, typo4 }) {
  return (
    <Card sx={{ minWidth: 500, minHeight: 275 }}>
      <CardContent className="flex flex-col">
        <div className="flex">
          <Typography
            sx={{ fontSize: 20, textAlign: "center" }}
            color="text.black"
            gutterBottom
          >
            {avatar}
            {typo1}
          </Typography>
        </div>
        <Typography variant="h4" component="div">
          {typo2}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {typo3}
        </Typography>
        <Typography variant="body2">{typo4}</Typography>
      </CardContent>
    </Card>
  );
}
