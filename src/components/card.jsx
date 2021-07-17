import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const cards = [
  {
    name: "Vidly",
    explain:
      "Also used by this project was used by Mosh Hamedani in the course of the fake database as a pattern in the database, such as liking, deletion, in a way that is complete and as a situation.",
    img: "https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg",
    link: "https://vidly-seven.vercel.app/movies",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
];

const useStyles = makeStyles((theme) => ({
  img: {
    height: 100,
    maxWidth: 200,
    overflow: "hidden",
  },
  cardGrid: {
    display: "flex",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(16),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  cardButton: {
    flexGrow: 1,
    alignSelf: "flex-end",
    textAlign: "center",
  },
}));

export default function MuiCard() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.img}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>{card.explain}</Typography>
              </CardContent>
              <CardActions className={classes.cardContent}>
                <Button
                  className={classes.cardButton}
                  variant="contained"
                  color="primary"
                >
                  <a href={card.link} rel="noreferrer" target="_blank">
                    Open Project
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
