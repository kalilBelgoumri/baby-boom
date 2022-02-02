import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardMediaUsers({
  image,
  typo,
  alt,
  typoCity,
  className,
}) {
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia component="img" image={image} alt={alt} />
      <CardContent
        className={className}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {typo}
        </Typography>
        <Typography
          sx={{
            color: "red",
            font: "bold",
          }}
          variant="body2"
          color="text.secondary"
        >
          {typoCity}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            color: "#B538A8",
            cursor: "pointer",
          }}
        >
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
