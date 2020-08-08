import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography, Button } from '@material-ui/core';
import Hero from './Hero';
import { ReactComponent as JumpstartSvg } from '../svg/jumpstart.svg';
import JumpstartAccordion from './JumpstartAccordion';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  section: {
    marginTop: '10vh',
    marginBottom: '10vh',
  },
  subtext: {
    marginTop: '1.5vh',
  },
  flexSection: {
    marginTop: '5vh',
    marginBottom: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textTransform: 'none',
  },
  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Jumpstart: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Jumpstart</title>
        <meta
          name="description"
          content="Code4Community's Jumpstart is a brand new full-stack development program for first time developers."
        />
      </Helmet>
      <Hero
        subtitle="Our brand new full-stack development program for first time developers."
        title="Jumpstart"
        SvgNode={JumpstartSvg}
      />

      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        direction="row"
        className={classes.section}
        spacing={3}
      >
        <Grid item sm={6}>
          <Fade>
            <Typography variant="h4">What is Jumpstart?</Typography>
            <Typography variant="body1" className={classes.subtext}>
              Jumpstart is Code4Community's new program that focuses on teaching
              the basics of web development for beginners. We have planned a
              10-week course that runs through a lot of the fundamentals you'll
              want to know for developing a web application. Through the program's
              project, you will be learning technologies like React, Typescript,
              Vertx, and Java. A basic understanding of programming is required
              (Java recommended), and you'll learn everything else you need from
              our weekly workshops!
            </Typography>
          </Fade>
        </Grid>
        <Grid item sm={6}>
          <Fade>
            <Typography variant="h4">What will I learn?</Typography>
            <Typography variant="body1" className={classes.subtext}>
              Throughout the Jumpstart course, we'll be helping you build a
              functioning web application with a React and Typescript frontend and
              a Vertx and Java backend. We'll be going through Git, the terminal,
              HTML, CSS, Javascript, REST requests and APIs, databases, cloud
              deployment, and testing. Don't worry if any of that doesn't make
              sense. By the end of this course we'll have you comfortable with
              each of these topics.
            </Typography>
          </Fade>
        </Grid>
        <Grid item sm={6}>
          <Fade>
            <Typography variant="h4">What's the project?</Typography>
            <Typography variant="body1" className={classes.subtext}>
              Throughout the duration of the program we'll be making a blog-like
              web application. In our app, people will be able to view posts,
              create posts, "clap!" (like), comment, and more. You aren't required
              to follow along with our blog app, you can create whatever
              application you want! However, we'll be providing help, examples,
              and weekly catch-up code for our blog application - we'd still love
              to help you out with your project though. There also won't be any
              extra requirements, and you can even extend your project as much as
              you'd like!
            </Typography>
          </Fade>
        </Grid>
        <Grid item sm={6}>
          <Fade>
            <Typography variant="h4">Wait, what's catch-up code?</Typography>
            <Typography variant="body1" className={classes.subtext}>
              Every week we'll be providing catch-up code to everyone before the
              start of the next meeting, to make sure everyone is caught up with
              where we are hoping they would be. The intention here is to help
              those who are stuck somewhere on their project, missed the last
              meeting, or were too busy during the week to make enough progress
              stay caught up with their project and prevent them from falling
              behind. Although this means that you aren't required to finish your
              weekly progress, we can 100% guarantee that you won't learn as much
              by skipping the work.
            </Typography>
          </Fade>
        </Grid>
      </Grid>

      <Fade>
        <Typography variant="h3" align="center">
          Want to join?
        </Typography>
      </Fade>
      <Fade>
        <Box className={classes.flexSection}>
          <Button
            variant="outlined"
            className={classes.button}
            component="a"
            href="https://forms.gle/5AgQCcU5YpWgmEzr9"
            color="primary"
          >
            <Typography variant="h4">Sign up here!</Typography>
          </Button>
        </Box>
      </Fade>
      <Fade>
        <Box paddingBottom={5}>
          <Container maxWidth="sm">
            <JumpstartAccordion
              sections={[
                {
                  title:
                    'Sunday Sept. 27th - Project Overview and Terminal Setup',
                  body: `We'll be helping you set up the software you'll need to run the project and teaching you some basic terminal commands you'll need to be able to interact with your program.`,
                },
                {
                  title: 'Sunday Oct. 4th - Git and Frontend Basics',
                  body: `A quick tour of Git, one of the most useful tools for development, and the gist of HTML, CSS, and Javascript.`,
                },
                {
                  title: 'Sunday Oct. 11th - React',
                  body: `Yeah, that's right. We're going to be learning about that cool buzzword. (Trust us though, it makes frontend stuff easy and powerful).`,
                },
                {
                  title:
                    'Sunday Oct. 18th - Server, Requests, and Backend Basics',
                  body: `What makes communication possible. We'll talk about the basic idea of servers and REST requests, and then get you working with back end routing.`,
                },
                {
                  title:
                    'Sunday Oct. 25th - Testing and Advanced Backend Techniques',
                  body: `We know testing isn't as fun, but there are actually some pretty cool tools that you can use here. Also, we'll be going over other useful request types and ideas.`,
                },
                {
                  title: 'Sunday Nov. 1st - Advanced Frontend Techniques',
                  body: `Asynchronous frontend requests can sound scary, but we'll teach it in a way that shows that they really aren't (most of the time).`,
                },
                {
                  title: 'Sunday Nov. 8th - Database Basics',
                  body: `Do you want to know how to store things efficiently without keeping them just in memory? It's basically Excel, but better. And you can use it in code!`,
                },
                {
                  title: 'Sunday Nov. 15th - Advanced Database Concepts',
                  body: `Databases can get pretty complicated though, but it can help a lot in the long run.`,
                },
                {
                  title: 'Sunday Nov. 22nd - Cloud Deployment and Hosting',
                  body: `Are you brave enough to show your friends and family what you made?`,
                },
                {
                  title: 'Sunday Dec. 6th - Project Wrap Up ',
                  body: `Bye bye. We loved working with you. :')`,
                },
              ]}
            />
          </Container>
        </Box>
      </Fade>
    </Container>
  );
};

export default Jumpstart;
