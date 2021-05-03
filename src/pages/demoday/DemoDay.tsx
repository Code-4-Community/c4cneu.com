import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Grid,
  Typography,
  Box,
  Link, Card, CardContent,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ReactComponent as SVG } from './demoday.svg';
import { Link as RouterLink } from 'react-router-dom';

import Hero from '../../components/Hero';

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  link: {},
});

const DemoDay: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();

  const rsvpLink = 'https://forms.gle/eX4qspbypvKVVfEM7';
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Demo Day</title>
        <meta
          name="description"
          content="Upcoming events held by Code4Community."
        />
      </Helmet>
      <Hero
        title="Demo Day 2021"
        subtitle="Join us in celebrating what C4C has accomplished over the last year."
        SvgNode={SVG}
      />

      <Grid container>
        <Grid item md={6}>
          <Box pb={3}>
            <Typography variant="h6">About this event</Typography>
            <Typography variant="body1">
              May 27th at 6:00 p.m. EST
              Held over virtually Zoom
            </Typography>
          </Box>
        </Grid>
        <Grid item xs className={classes.buttonContainer}>
          <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href={rsvpLink}
              target="_blank"
          >
            <Typography variant="h6">RSVP Now</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DemoDay;
