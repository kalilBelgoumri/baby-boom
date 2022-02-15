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

export default function CardLogin({ btn, avatar, typo1, typo2, typo3, typo4 }) {
  return (
    <div className="">
      <Card>
        <CardContent className="flex flex-col">
          <div>
            <Typography
              sx={{ fontSize: 20, textAlign: "center" }}
              color="text.black"
              gutterBottom
            >
              <div className="flex gap-3 items-center">
                <div className="flex">{avatar}</div>
                <div className="flex text-sm lg:text-lg">{typo1}</div>
              </div>
            </Typography>
          </div>
          <div className="flex flex-col justify-center mt-10 mb-5">
            <Typography sx={{ mb: 2 }} color="text.secondary">
              <div className="flex text-sm lg:text-lg">{typo2}</div>
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              <div className="flex text-sm lg:text-lg">{typo3}</div>
            </Typography>
            <Typography sx={{ mb: 2 }} color="text.secondary">
              <div className="flex text-sm lg:text-lg">{typo4}</div>
            </Typography>
          </div>
        </CardContent>
        <div className="mb-10">
          <div className="flex justify-center">{btn}</div>
        </div>
      </Card>
    </div>
  );
}
