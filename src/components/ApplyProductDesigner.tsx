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
import { QuoteBlock } from './QuoteBlock';

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

const ApplyProductDesigner: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Product Designer</title>
        <meta
          name="description"
          content="Apply to be a Web Developer at Code4Community."
        />
      </Helmet>

      <Hero
        title="Product Designer"
        subtitle="Make designs that matter. Define a project."
        SvgNode={SVG}
      />

      <Grid container spacing={3}>
        <Grid item sm={8}>
          <Box mb={3}>
            <Typography variant="h6">What you'll be doing</Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              Product Designers are the main stakeholders for the design/UI of
              our projects. As a designer, you'll get to work with our software
              developers to create intuitive, user friendly products that meet
              the needs of our non profit partners and their members. You'll
              have the creative freedom to own, iterate, and improve the product
              using the feedback from our product teams and partners to achieve
              a high quality user experience. While your journey will start with
              mock-ups of the product, you will be continuously reiterating at
              different fidelity levels to ensure that the designs are
              translatable to working, codable products.
            </Typography>
          </Box>

          <Box mb={1}>
            <Typography variant="h6">What we’re looking for</Typography>
            <Typography variant="body1" gutterBottom className={classes.text}>
              A great designer is someone who places the user at the forefront
              of the ideation and creation process. We want candidates
              interested in problem solving and are skilled at communicating
              ideas to team members. Although having web design experience is a
              bonus, we value candidates that showcase a learning spirit,
              dedication to the iterative process, and a receptive nature to
              understand product needs and developer capabilities.
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6">
              Our ideal canditiate is someone who...
            </Typography>
            <Typography variant="body1" className={classes.text}>
              <ul className={classes.list}>
                <li>
                  Motivated to learn new technologies and grow as a product
                  designer
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

        <Grid item sm={4} className={classes.application}>
          <Stepper
            className={classes.stepper}
            activeStep={-1}
            orientation="vertical"
          >
            <Step key={1} active>
              <StepLabel>
                Prepare your resume and read through our website
              </StepLabel>
            </Step>
            <Step key={2} active>
              <StepLabel>Send in your application</StepLabel>
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
                Apply to be a Product Designer
              </Typography>
            </Button>
          </Box>
        </Grid>
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

export default ApplyProductDesigner;
