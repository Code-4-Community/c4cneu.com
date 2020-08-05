import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { QuoteBlock } from './QuoteBlock';
import { ReactComponent as C4CSvg } from '../svg/C4C.svg';

const useStyles = makeStyles({
  homeLogo: {
    width: '16rem',
    margin: '0.5em',
  },

  landing: {
    height: '75vh',
  },

  body: {
    fontSize: '24x',
    lineHeight: '31px',
  },

  section: {
    marginTop: '30vh',
  },
  partnerLogos: {
    padding: '30px',
  },
  landingTitle: {
    fontWeight: 400,
    fontSize: '5em'
  },
  landingSubtitle: {
    fontWeight: 200,

  },
  logoWrapper: {
    marginBottom: '1em',
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.logoWrapper}
        >
          <Typography variant="h2" className={classes.landingTitle}>
            Code
          </Typography>
          <C4CSvg className={classes.homeLogo} />
          <Typography variant="h2" className={classes.landingTitle}>
            Community
          </Typography>
        </Grid>

        <Typography variant="h4" align="center" className={classes.landingSubtitle} gutterBottom >
          Designing software solutions for non-profit organizations in Boston
        </Typography>

        {/*<Box marginY={5} width="100%">*/}
        {/*  <Grid*/}
        {/*    container*/}
        {/*    direction="row"*/}
        {/*    justify="space-around"*/}
        {/*    alignItems="center"*/}
        {/*    spacing={0}*/}
        {/*  >*/}
        {/*    <Button*/}
        {/*      variant="outlined"*/}
        {/*      color="default"*/}
        {/*      size="large"*/}
        {/*      component={Link}*/}
        {/*      to="/apply"*/}
        {/*    >*/}
        {/*      Get Involved*/}
        {/*    </Button>*/}

        {/*    <Button*/}
        {/*      variant="outlined"*/}
        {/*      color="default"*/}
        {/*      size="large"*/}
        {/*      component={Link}*/}
        {/*      to="/apply"*/}
        {/*    >*/}
        {/*      Become A Partner*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*      variant="outlined"*/}
        {/*      color="default"*/}
        {/*      size="large"*/}
        {/*      component={Link}*/}
        {/*      to="/apply"*/}
        {/*    >*/}
        {/*      See Our Work*/}
        {/*    </Button>*/}
        {/*  </Grid>*/}
        {/*</Box>*/}
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.section}
      >
        <Grid item md={6}>
          <Typography variant="h4">
            Impactful, deliberate and compassionate software at no cost
          </Typography>
          <Typography className={classes.body}>
            C4C strives to deliver work engineered with excellence and led by
            inclusive inclusive design principles to ensure our solutions are
            intuitive, performant, and deliver the best user experience.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <img
            src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/laptop.png"
            alt="Content Block"
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        className={classes.section}
      >
        <Grid item md={6} justify="center">
          <img
            src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/NortheasternNotchedNLatin.png"
            alt="Content Block"
          />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">
            Northeastern University’s only student led collective for charitable
            software development.
          </Typography>
          <Typography variant="h6">
            C4C strives to deliver work engineered with excellence and led by
            inclusive design principles to ensure our solutions are intuitive,
            performant, and deliver the best user experience.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.section}
      >
        <Grid item xs={6}>
          <Typography variant="h4">See who we work with</Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_Logo.png"
            alt="Lucy's Love Bus Logo"
            className={classes.partnerLogos}
          />
          <img
            src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/SFTT_Logo.png"
            alt="Speak for the Trees"
            className={classes.partnerLogos}
          />
        </Grid>
      </Grid>

      <Grid container className={classes.section}>
        <QuoteBlock
          imageURL="http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg"
          quote="This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer."
          name="Ryan Jung"
          title="Web Developer - c4cneu.com"
        />
        <QuoteBlock
          imageURL="http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg"
          quote="This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer."
          name="Ryan Jung"
          title="Web Developer - c4cneu.com"
        />
        <QuoteBlock
          imageURL="http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg"
          quote="This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer."
          name="Ryan Jung"
          title="Web Developer - c4cneu.com"
        />
        <QuoteBlock
          imageURL="http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg"
          quote="This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer."
          name="Ryan Jung"
          title="Web Developer - c4cneu.com"
        />
      </Grid>
    </Container>
  );
};

export default Home;
