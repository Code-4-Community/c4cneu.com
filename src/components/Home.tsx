import React from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Grid, Button, Divider } from '@material-ui/core'
import { QuoteBlock } from './QuoteBlock'
import { ReactComponent as C4CSvg } from '../svg/C4C.svg'
import { Link } from 'react-router-dom'

// @ts-ignore
import Typical from 'react-typical'

//need to declare module
// @ts-ignore
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles({
  homeLogo: {
    width: '16rem',
    margin: '0.5em'
  },

  landing: {
    height: '65vh',
    marginBottom: '20vh'
  },

  body: {
    fontSize: '24x',
    lineHeight: '31px'
  },

  section: {
    marginTop: '10vh',
    marginBottom: '10vh'
  },
  partnerLogos: {
    maxWidth: '100%'
  },
  bigImage: {
    maxWidth: '100%'
  },
  landingTitle: {
    fontWeight: 400
  },
  landingSubtitle: {
    fontWeight: 200
  },
  logoWrapper: {
    marginBottom: '1em'
  },
  endActions: {
    paddingTop: '4em',
    paddingBottom: '8em'
  },
  endAction: {
    textTransform: 'none'
  },
  partners: {
    paddingTop: '3em'
  },
  typical: {
    margin: 0,
    textAlign: 'left',
    color: "#5B54DA",
    fontWeight: 500
  }
})

const Home: React.FC = () => {
  const classes = useStyles()
  const typePause = 3000
  return (
    <Container maxWidth='md'>
      <Helmet>
        <title>Code4Community</title>
        <meta
          name='description'
          content='The Code4Community homepage. Code4Community. Designing software solutions for non-profit organizations in Boston.'
        />
      </Helmet>

      <Grid container alignItems='center' className={classes.landing}>
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
            variant='h3'
            align='left'
            className={classes.landingTitle}
            gutterBottom
          >
            Designing software solutions for
            <Typical
              className={classes.typical}
              steps={[
                'non profits in Boston.',
                typePause,
                "children fighting cancer.",
                typePause,
               "the future of Boston's urban forest.",
                typePause,
                'people and causes we love.',
                typePause * 2
              ]}
              loop={Infinity}
              wrapper={'p'}
            />
          </Typography>

          <Typography
            variant='h5'
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
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.section}
          spacing={3}
        >
          <Grid item md={6}>
            <Typography variant='h4' gutterBottom>
              Impactful, deliberate and compassionate software at no cost.
            </Typography>
            <Typography variant='body1'>
              C4C strives to deliver work engineered with excellence and led by
              inclusive inclusive design principles to ensure our solutions are
              intuitive, performant, and deliver the best user experience.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              className={classes.bigImage}
              src='https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/laptop.png'
              alt='Content Block'
            />
          </Grid>
        </Grid>
      </Fade>
      <Divider />
      <Fade>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.section}
        >
          <Grid item md={6} justify='center'>
            <img
              className={classes.bigImage}
              src='https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/NortheasternNotchedNLatin.png'
              alt='Content Block'
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant='h4' gutterBottom>
              Northeastern University’s only student led collective for
              charitable software development.
            </Typography>
            <Typography variant='body1'>
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
          <Typography variant='h3' align='center'>
            Our Partners
          </Typography>

          <Grid
            container
            justify='center'
            alignItems='center'
            spacing={3}
            className={classes.partners}
          >
            <Grid item>
              <img
                src='https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_Logo.png'
                alt="Lucy's Love Bus Logo"
                className={classes.partnerLogos}
              />
            </Grid>
            <Grid item>
              <img
                src='https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/SFTT_Logo.png'
                alt='Speak for the Trees'
                className={classes.partnerLogos}
              />
            </Grid>
          </Grid>
        </div>
      </Fade>
      <Divider />

      <Grid container className={classes.section}>
        <Fade>
          <QuoteBlock
            imageURL='http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg'
            quote='This is a decently long quote about how impactful and cool it is
                  to be a part of Code4Community. Something about how you learned a
                  lot and grew as a developer.'
            name='Ryan Jung'
            title='Web Developer - c4cneu.com'
          />
        </Fade>
        <Fade>
          <QuoteBlock
            imageURL='http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg'
            quote='This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer.'
            name='Ryan Jung'
            title='Web Developer - c4cneu.com'
          />
        </Fade>
        <Fade>
          <QuoteBlock
            imageURL='http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg'
            quote='This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer.'
            name='Ryan Jung'
            title='Web Developer - c4cneu.com'
          />
        </Fade>

        <Fade>
          <QuoteBlock
            imageURL='http://images.fineartamerica.com/images-medium-large/close-up-of-cat-saulgranda.jpg'
            quote='This is a decently long quote about how impactful and cool it is
              to be a part of Code4Community. Something about how you learned a
              lot and grew as a developer.'
            name='Ryan Jung'
            title='Web Developer - c4cneu.com'
          />
        </Fade>
      </Grid>

      <div className={classes.section}>
        <Typography variant='h3' align='center'>
          Want to work together?
        </Typography>
        <Typography variant='h3' align='center'>
          <b>Let's Talk.</b>
        </Typography>

        <Grid
          container
          justify='space-around'
          alignItems='center'
          className={classes.endActions}
        >
          <Button size='large' variant='text' component={Link} to={'/apply'}>
            <Typography variant='h4' className={classes.endAction}>
              Join our awesome team.
            </Typography>
          </Button>

          <Button size='large' variant='text' component={Link} to={'/apply'}>
            <Typography variant='h4' className={classes.endAction}>
              Become our partner.
            </Typography>
          </Button>

          {/* 
        <Button size='large' variant='contained' color='primary'>
          <Typography variant='h5' className={classes.endAction}>
            See our work
          </Typography>{' '}
        </Button> */}
        </Grid>
      </div>
    </Container>
  )
}

export default Home
