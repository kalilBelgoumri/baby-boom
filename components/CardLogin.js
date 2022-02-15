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
    <div className="px-10">
      <Card className="">
        <CardContent className="flex flex-col">
          <div className="flex">
            <Typography
              sx={{ fontSize: 20, textAlign: "center" }}
              color="text.black"
              gutterBottom
            >
              <div className="flex gap-3 items-center">
                <div className="flex">{avatar}</div>
                <div className="flex text-sm md:text-lg">{typo1}</div>
              </div>
            </Typography>
          </div>
          <div className="flex flex-col justify-center mt-10">
            <Typography sx={{ mb: 2 }} color="text.secondary">
              <div className="flex text-sm md:text-lg">{typo2}</div>
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              <div className="flex text-sm md:text-lg">{typo3}</div>
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              <div className="flex text-sm md:text-lg">{typo4}</div>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
