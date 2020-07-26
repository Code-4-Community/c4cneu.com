import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Box, Typography, Grid } from '@material-ui/core';
import c4clogo from '../C4C-Banner_Landing.jpeg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  homeLogo: {
    width: 'min(95vw, 800px)',
    margin: 0,
  },

  landing: {
    height: '75vh',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Code4Community</title>
        <meta
          name="description"
          content="The Code4Community homepage. Code4Community. Designing software solutions for non-profit organizations in Boston."
        />
      </Helmet>
      <Grid
        className={classes.landing}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <img
          className={classes.homeLogo}
          src={c4clogo}
          alt="Code4Community Logo"
        />

        <Typography variant="h5" align="center" gutterBottom>
          Designing software solutions for non-profit organizations in Boston
        </Typography>

        <Box marginY={5} width="100%">
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={0}
          >
            <Button
              variant="outlined"
              color="default"
              size="large"
              component={Link}
              to="/apply"
            >
              Get Involved
            </Button>

            <Button
              variant="outlined"
              color="default"
              size="large"
              component={Link}
              to="/apply"
            >
              Become A Partner
            </Button>
            <Button
              variant="outlined"
              color="default"
              size="large"
              component={Link}
              to="/apply"
            >
              See Our Work
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item sm>
          <Typography variant="h6">Subheading1</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            nisl pretium fusce id velit ut tortor pretium. Nulla aliquet enim
            tortor at. Sit amet est placerat in. Semper feugiat nibh sed
            pulvinar proin gravida hendrerit lectus. Morbi enim nunc faucibus a
            pellentesque. Turpis massa sed elementum tempus. Nulla at volutpat
            diam ut venenatis tellus. Dignissim cras tincidunt lobortis feugiat
            vivamus at augue eget.{' '}
          </Typography>
        </Grid>
        <Grid item sm>
          <Typography variant="h6">Subheading2</Typography>
          <Typography variant="body1">
            Interdum consectetur libero id faucibus nisl tincidunt eget nullam
            non. Eu non diam phasellus vestibulum lorem sed risus ultricies
            tristique. Enim praesent elementum facilisis leo. Quisque egestas
            diam in arcu cursus euismod. Vestibulum mattis ullamcorper velit sed
            ullamcorper morbi tincidunt ornare. Sem integer vitae justo eget
            magna fermentum. Feugiat pretium nibh ipsum consequat nisl vel.
            Lorem sed risus ultricies tristique nulla aliquet enim tortor. Vel
            pretium lectus quam id leo in vitae turpis.
          </Typography>{' '}
        </Grid>
        <Grid item sm>
          <Typography variant="h6">Subheading3</Typography>
          <Typography variant="body1">
            Non pulvinar neque laoreet suspendisse interdum consectetur. Proin
            nibh nisl condimentum id venenatis a condimentum. Neque gravida in
            fermentum et sollicitudin ac orci. Condimentum lacinia quis vel
            eros. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
            massa. Tellus pellentesque eu tincidunt tortor aliquam nulla
            facilisi cras fermentum. Ultrices in iaculis nunc sed augue. Metus
            aliquam eleifend mi in. Quam adipiscing vitae proin sagittis. Purus
            gravida quis blandit turpis cursus.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
