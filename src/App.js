import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import logo from "./images/logo.PNG";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const cards = [
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
  {
    name: "Project Name",
    explain: "Summary",
    img: "https://source.unsplash.com/random",
    link: "https://www.w3schools.com",
  },
];

const tutorialSteps = [
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Açıklama gir",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  stepper: {
    paddingTop: "3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  MobileStepper: {
    width: "400px",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(16),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 100,
    maxWidth: 200,
    overflow: "hidden",
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
  appbar: {
    display: "flex",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    top: "auto",
    bottom: 0,
  },

  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container alignItems="center" justify="space-between">
                <Link color="inherit" href="https://material-ui.com/">
                  <img src={logo} alt="" width="100" height="50" />
                </Link>
                <Typography variant="h6">{"  "}Serif Colakel</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div className={classes.stepper}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <MobileStepper
          className={classes.MobileStepper}
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>

      <Container className={classes.cardGrid} maxWidth="lg">
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
                    className={classes.cardContent}
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

      <AppBar className={classes.appbar} position="fixed" color="primary">
        <Toolbar className={classes.tool}>
          <Typography variant="h6">
            <Typography variant="subtitle1" align="center" color="default">
              You can reach me at the addresses below.
            </Typography>
          </Typography>
        </Toolbar>
        <Typography
          spacing={1}
          variant="subtitle2"
          color="default"
          align="center"
        >
          <Link color="inherit" href="https://material-ui.com/">
            <InstagramIcon />
          </Link>

          <Link color="inherit" href="https://material-ui.com/">
            <FacebookIcon />
          </Link>

          <Link color="inherit" href="https://material-ui.com/">
            <LinkedInIcon />
          </Link>

          <Link color="inherit" href="https://material-ui.com/">
            <GitHubIcon />
          </Link>
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}
