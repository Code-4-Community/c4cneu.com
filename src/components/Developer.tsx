import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';
import Hero from './Hero';
import { ReactComponent as SVG } from '../svg/developer.svg';

const useStyles = makeStyles({
  image: {
    width: '100%',
    borderRadius: 10,
    margin: 'auto',
  },
  list: {
    marginTop: 0,
  },
  stepper: {
    paddingTop: '1rem',
  },
  application: {},
  text: {
    //fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },
  picture: {
    borderRadius: '10em',
    maxWidth: '10em',
  },
  pictureWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1em',
  },
  blockQuote: {
    borderLeft: '4px solid gray',
    paddingLeft: '0.5em',
    marginBottom: '1em',
  },
  leftQuote: {
    position: 'relative',
    fontSize: '8em',
  },
  applyButton: {
    textTransform: 'none',
    fontWeight: 500,
  },
});

const Developer: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Developer</title>
        <meta
          name="description"
          content="Apply to be a Web Developer at Code4Community."
        />
      </Helmet>

      <Hero
        title="Web Developer"
        subtitle="Write code to make an impact. Learn the web development process with us."
        SvgNode={SVG}
      />

      <Grid container spacing={3}>
        <Grid item sm={8}>
          <Box mb={3}>
            <Typography variant="h6">What you'll be doing</Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              Web Developers at C4C are responsible for creating and maintaing
              software products for our partner organizations. We will walk you
              through the software development process through Jumpstart, a
              full-stack web development program meant for first-time
              developers. After training, you can expect to be joining one of
              our tightly-knit teams working on real projects that our partners
              will depend on.
            </Typography>
          </Box>

          <Box mb={1}>
            <Typography variant="h6">What we’re looking for</Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              What we want most out of our developers is dedication. We welcome
              developers of all skill levels and especially encourage freshman
              to apply.
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1" gutterBottom className={classes.text}>
              We don't believe coding challenges belong in our interview
              process. If you are an experienced developer, we are much more
              concerned with personal projects and past experiences than your
              algorithmic prowess.
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6">
              Our ideal canditiate is someone who...
            </Typography>
            <Typography variant="body1" className={classes.text}>
              <ul className={classes.list}>
                <li>This thing that you should be able to do</li>
                <li>And this other thing thats fun and cool</li>
                <li>Another not too intimidating requirement</li>
                <li>Is a good team player</li>
                <li>Cares about doing good for the community</li>
              </ul>
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={4} className={classes.application}>
          <Stepper
            className={classes.stepper}
            activeStep={-1}
            orientation="vertical"
          >
            <Step key={1} active>
              <StepLabel>
                Prepare your resume, read through our website!
              </StepLabel>
            </Step>
            <Step key={2} active>
              <StepLabel>Send in your application.</StepLabel>
            </Step>
            <Step key={3} active>
              <StepLabel>Wait for us to contact you!</StepLabel>
            </Step>
          </Stepper>
          <Box paddingLeft={'24px'} marginBottom={'2em'}>
            <Button
              variant="contained"
              color="primary"
              href="http://c4cneu.com"
              target="_blank"
            >
              <Typography variant="body1" className={classes.applyButton}>
                Apply to be a Developer
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item sm={3} className={classes.pictureWrapper}>
          <img
            src="http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg"
            alt="A developer at Code4Community"
            className={classes.picture}
          />
        </Grid>

        <Grid item sm>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography
              variant="body1"
              align="left"
              className={classes.blockQuote}
            >
              This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer.
            </Typography>
            <Typography variant="subtitle1" align="left">
              Ryan Jung
            </Typography>
            <Typography variant="subtitle2" align="left">
              Web Developer - c4cneu.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Developer;