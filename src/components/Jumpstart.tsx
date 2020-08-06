import React from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Grid, Typography, Button } from '@material-ui/core'
import Hero from './Hero'
import { ReactComponent as JumpstartSvg } from '../svg/jumpstart.svg'
import JumpstartAccordion from './JumpstartAccordion'

const useStyles = makeStyles({
  section: {
    marginTop: '10vh',
    marginBottom: '10vh'
  },
  subtext: {
    marginTop: '1.5vh'
  },
  flexSection: {
    marginTop: '5vh',
    marginBottom: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    textTransform: 'none'
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const Jumpstart: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Helmet>
        <title>Write Title Here</title>
        <meta name='description' content='Write a description for SEO here' />
      </Helmet>
      <Hero
        subtitle='Our brand new full-stack development program for first time developers.'
        title='Jumpstart'
        SvgNode={JumpstartSvg}
      />

      <Grid
        container
        justify='space-between'
        alignItems='flex-start'
        direction='row'
        className={classes.section}
        spacing={3}
      >
        <Grid item md={6}>
          <Typography variant='h4'>What is Jumpstart?</Typography>
          <Typography variant='body1' className={classes.subtext}>
            Jumpstart is our new program for teaching the basics of web
            development for beginners. We've planned a 10-week course + project
            to go through a lot of the fundamentals you'll want to know for
            developing a web application using technologies like React,
            Typescript, Vertx, and Java. If you're interested in learning about
            how a production web application works, feel free to join us! A
            basic understanding of programming is required (Java recommended),
            and you'll learn everything else you need from our weekly workshops.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant='h4'>What will I learn?</Typography>
          <Typography variant='body1' className={classes.subtext}>
            Throughout the Jumpstart course, we'll be helping you build a
            functioning web application with a React + Typescript frontend and
            Vertx + Java backend. We'll be going through Git and the terminal,
            HTML + CSS + Javascript, REST requests and APIs, databases, cloud
            deployment, and testing. Don't worry if any of that doesn't make
            sense. By the end of this course we'll have you comfortable with
            each of those topics.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant='h4'>What's the project?</Typography>
          <Typography variant='body1' className={classes.subtext}>
            Throughout the duration of the program we'll be making a blog-like
            application. In the application, people will be able to view posts,
            create posts, clap! (like), comment, and do a few other things.
            That's not to say that you have to make one too, but we'll be
            providing help, examples, and weekly catch-up code for that (we'd
            still love to help you out with your project though!). There also
            won't be any work requirements, and you can even extend the project
            as much as you'd like!
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant='h4'>Wait, what's catch-up code?</Typography>
          <Typography variant='body1' className={classes.subtext}>
            Every week we'll be providing catch-up code to everyone before the
            start of the next meeting, to make sure everyone is caught up with
            where we are hoping they would be. The intention here is to help
            those who are stuck somewhere on their project, missed the last
            meeting, or were too busy during the week to make enough progress
            stay caught up with their project and prevent them from falling
            behind. With great power comes great responsibility, though. This
            means that you don't have to do anything, but we can 100% guarantee
            that you won't learn as much as if you had done the work.
          </Typography>
        </Grid>
      </Grid>

      <Typography variant='h3' align='center'>
        Want to join?
      </Typography>

      <Box className={classes.flexSection}>
        <Button
          variant='text'
          className={classes.button}
          component="a"
          href='https://c4cneu.com'
        >
          <Typography variant='h4' color='primary'>
            Sign me up!
          </Typography>
        </Button>
      </Box>
      {/* 
      <Box className={classes.section}>
        <JumpstartAccordion
          sections={[
            {
              title: 'Week 1',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 2',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 3',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 4',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 5',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 6',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 7',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 8',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 9',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
            {
              title: 'Week 10',
              body:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
            },
          ]}
        />
      </Box> */}
    </Container>
  )
}

export default Jumpstart
