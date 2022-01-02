import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
export default function CardIndex({ img }) {
  return (
    <Card className="w-[70%] rounded-lg">
      <CardActionArea>
        <Image src={img} property="responsive" />
      </CardActionArea>
    </Card>
  );
}
