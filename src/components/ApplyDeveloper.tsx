import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import Hero from './Hero';
import { ReactComponent as SVG } from '../svg/developer.svg';
import { TextQuoteBlock } from './TextQuoteBlock';
import CTA from './CTA';

const useStyles = makeStyles({
  image: {
    width: '100%',
    borderRadius: 10,
    margin: 'auto',
  },
  list: {
    marginTop: 0,
    '& > li': {
      marginBottom: '0.25em',
    },
  },
  stepper: {
    paddingTop: '2.5em',
    paddingRight: '0',
    maxWidth: '16em',
  },
  application: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
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
    maxWidth: '16em',
  },
});

const ApplyDeveloper: React.FC = () => {
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
        title="Software Developer"
        subtitle="Write code to make an impact. Learn the web development process with us."
        SvgNode={SVG}
      />

      <Grid container spacing={3}>
        <Grid item sm={7}>
          <Box mb={5}>
            <Typography variant="h5" gutterBottom>
              What you'll be doing
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              Software Developers at C4C are responsible for creating and
              maintaing software products for our partner organizations.
              Developers work in AGILE, collaboartive teams and are exposed to
              every aspect of the product development cycle. Developers can
              expect to spend roughly 5 hours a week working collaborating on
              tickets and have ths ability to specialize in QA, DevOps, or
              project management.
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography variant="h5" gutterBottom>
              What we’re looking for
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              A great developer is someone who is highly motivated and willing
              to learn. Although exposure to software development practices
              through co-ops, internships, or personal projects, is a big plus,
              we ultimately value the passion to improve as a software
              developer. We don't believe coding challenges belong in our
              interview process, and we never factor school year into our
              decisions. The ideal candidate is passionate about developing and
              learns from their team and empowers the developers around them.
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography variant="h5" gutterBottom>
              Our ideal canditiate is someone who...
            </Typography>
            <Typography variant="body1" className={classes.text}>
              <ul className={classes.list}>
                <li>
                  Motivated to learn new technologies and grow as a software
                  engineer
                </li>
                <li>Passionate about helping the Boston community</li>
                <li>
                  A strong communicator who facilitates collaboration amongst
                  the production team
                </li>
                <li>
                  Interested in being a part of the entire product life cycle:
                  software inception to completion
                </li>
                <li>
                  Dedicated to the C4C mission and has excellent follow through
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={5} className={classes.application}>
          <CTA />
        </Grid>
        <TextQuoteBlock
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

export default ApplyDeveloper;
