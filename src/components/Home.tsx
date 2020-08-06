import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
} from '@material-ui/core';
import { TextQuoteBlock } from './TextQuoteBlock';

import { Link } from 'react-router-dom';

// @ts-ignore
import Typical from 'react-typical';

//need to declare module
// @ts-ignore
import Fade from 'react-reveal/Fade';

import { ReactComponent as ImpactfulSvg } from '../svg/impactful.svg';
const useStyles = makeStyles({
  homeLogo: {
    width: '16rem',
    margin: '0.5em',
  },

  landing: {
    height: '70vh',
    marginBottom: '15vh',
  },

  body: {
    fontSize: '24x',
    lineHeight: '31px',
  },

  section: {
    marginTop: '10vh',
    marginBottom: '10vh',
  },
  partnerLogos: {
    maxWidth: '100%',
    margin: 'auto',
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  partnerLogoGrid: {
    padding: '2em',
    display: 'flex',
    justifytContent: 'center',
  },
  bigImage: {
    maxWidth: '100%',
    maxHeight: '50vh',
  },
  landingTitle: {
    fontWeight: 400,
  },
  landingSubtitle: {
    fontWeight: 200,
  },
  logoWrapper: {
    marginBottom: '1em',
  },
  endActions: {
    paddingTop: '4em',
    paddingBottom: '8em',
  },
  endAction: {
    textTransform: 'none',
  },
  partners: {
    paddingTop: '1em',
  },
  typical: {
    margin: 0,
    color: '#5B54DA',
    fontWeight: 600,
  },
  endSection: {
    paddingTop: '15vh',
    paddingBottom: '15vh',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const typePause = 3000;
  React.useEffect(() => {
    clearInterval();
    clearTimeout();
  }, []);
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Code4Community</title>
        <meta
          name="description"
          content="The Code4Community homepage. Code4Community. Designing software solutions for non-profit organizations in Boston."
        />
      </Helmet>

      <Grid container alignItems="center" className={classes.landing}>
        {/* <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          className={classes.logoWrapper}
        >
          <Typography variant='h2' className={classes.landingTitle}>
            Code
          </Typography>
          <C4CSvg className={classes.homeLogo} />
          <Typography variant='h2' className={classes.landingTitle}>
            Community
          </Typography>
        </Grid> */}

        <div>
          <Typography
            variant="h3"
            align="left"
            className={classes.landingTitle}
            gutterBottom
          >
            Designing software solutions for
            <Typical
              className={classes.typical}
              steps={[
                'non profits in Boston.',
                typePause,
                'children fighting cancer.',
                typePause,
                "the future of Boston's urban forest.",
                typePause,
                'people and causes we love.',
                typePause * 2,
              ]}
              loop={Infinity}
              wrapper={'p'}
            />
          </Typography>

          <Typography
            variant="h5"
            gutterBottom
            className={classes.landingSubtitle}
          >
            Learn more about Code4Community's mission below.
          </Typography>
        </div>
      </Grid>
      <Divider />

      <Fade>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.section}
          spacing={3}
        >
          <Grid item sm={7}>
            <Typography variant="h4" gutterBottom>
              Impactful, deliberate and compassionate software at no cost.
            </Typography>
            <Typography variant="body1">
              C4C strives to deliver work engineered with excellence and led by
              inclusive inclusive design principles to ensure our solutions are
              intuitive, performant, and deliver the best user experience.
            </Typography>
          </Grid>
          <Grid item sm={5}>
            <ImpactfulSvg className={classes.bigImage} />
          </Grid>
        </Grid>
      </Fade>
      <Divider />
      <Fade>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.section}
          spacing={3}
        >
          <Grid item md={5} justify="center">
            <img
              className={classes.bigImage}
              src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/NortheasternNotchedNLatin.png"
              alt="Content Block"
            />
          </Grid>
          <Grid item md={7}>
            <Typography variant="h4" gutterBottom>
              Northeastern University’s only student led collective for
              charitable software development.
            </Typography>
            <Typography variant="body1">
              C4C strives to deliver work engineered with excellence and led by
              inclusive design principles to ensure our solutions are intuitive,
              performant, and deliver the best user experience.
            </Typography>
          </Grid>
        </Grid>
      </Fade>

      <Divider />
      <Fade>
        <div className={classes.section}>
          <Typography variant="h3" align="center">
            Our Partners
          </Typography>

          <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing={3}
            className={classes.partners}
          >
            <Grid item sm={6}>
              <a
                href="https://lucyslovebus.org/"
                className={classes.partnerLogoGrid}
              >
                <img
                  src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png"
                  alt="Lucy's Love Bus Logo"
                  className={classes.partnerLogos}
                />
              </a>
            </Grid>
            <Grid item sm={6}>
              <a
                href="https://bostontrees.org/"
                className={classes.partnerLogoGrid}
              >
                <img
                  src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/speakforthetrees_logo_original_RGB.jpg"
                  alt="Speak for the Trees"
                  className={classes.partnerLogos}
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </Fade>
      <Divider />

      <Grid container className={classes.section}>
        <Fade>
          <TextQuoteBlock
            quote="This is a quote thats only made out of text. No images. Looks nice I think, very elegant and minimal. A little boring - admittedly."
            name="Ryan Jung"
            title="Web Developer - c4cneu.com"
          />
        </Fade>
        <Fade>
          <TextQuoteBlock
            quote="This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer."
            name="Ryan Jung"
            title="Web Developer - c4cneu.com"
          />
        </Fade>

        <Fade>
          <TextQuoteBlock
            quote="This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer."
            name="Ryan Jung"
            title="Web Developer - c4cneu.com"
          />
        </Fade>
      </Grid>
      <Fade>
        <div className={classes.endSection}>
          <Typography variant="h3" align="center">
            Want to work together?
          </Typography>
          <Typography variant="h3" align="center" className={classes.typical}>
            Let's Talk.
          </Typography>

          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.endActions}
          >
            <Button size="large" variant="text" component={Link} to={'/apply'}>
              <Typography variant="h4" className={classes.endAction}>
                Join our awesome team
              </Typography>
            </Button>

            <Button
              size="large"
              variant="text"
              component={Link}
              to={'/jumpstart'}
            >
              <Typography variant="h4" className={classes.endAction}>
                Jumpstart your career
              </Typography>
            </Button>
            {/* <Button size="large" variant="text" component={Link} to={'/apply'}>
              <Typography variant="h4" className={classes.endAction}>
                Become one of our partners
              </Typography>
            </Button> */}
            {/* 
        <Button size='large' variant='contained' color='primary'>
          <Typography variant='h5' className={classes.endAction}>
            See our work
          </Typography>{' '}
        </Button> */}
          </Grid>
        </div>
      </Fade>
    </Container>
  );
};

export default Home;
