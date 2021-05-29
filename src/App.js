import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles'

function App() {
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <div className={classes.header}>
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad, cum veritatis tenetur exercitationem officiis!
          </Typography>
        </div>
        <div className={classes.buttons} >
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                View Photo
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary Action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {
            img.map((index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, veniam.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
      <Container className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem minus debitis adipisci id, error facere.
        </Typography>
      </Container>
    </>
  );
}

export default App;
