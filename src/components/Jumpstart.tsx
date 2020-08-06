import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Typography, Button } from '@material-ui/core';
import Hero from './Hero';
import { ReactComponent as JumpstartSvg } from '../svg/jumpstart.svg';
import JumpstartAccordion from './JumpstartAccordion';

const useStyles = makeStyles({
  section: {
    marginTop: '10vh',
    marginBottom: '10vh',
  },
  subtext: {
    marginTop: '1.5vh',
  },
  flexSection: {
    marginTop: '10vh',
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
        <title>Write Title Here</title>
        <meta name="description" content="Write a description for SEO here" />
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
        <Grid item md={6}>
          <Typography variant="h4">What is Jumpstart?</Typography>
          <Typography variant="body1" className={classes.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae eros laoreet nisl ornare dignissim at sit amet leo. Integer
            convallis malesuada elit, fringilla venenatis eros facilisis ut. Nam
            ut accumsan mauris. Aenean at odio dolor. In ultricies ipsum risus,
            nec porttitor turpis ornare in.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">What will I learn?</Typography>
          <Typography variant="body1" className={classes.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae eros laoreet nisl ornare dignissim at sit amet leo. Integer
            convallis malesuada elit, fringilla venenatis eros facilisis ut. Nam
            ut accumsan mauris. Aenean at odio dolor. In ultricies ipsum risus,
            nec porttitor turpis ornare in.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">Can I participate?</Typography>
          <Typography variant="body1" className={classes.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae eros laoreet nisl ornare dignissim at sit amet leo. Integer
            convallis malesuada elit, fringilla venenatis eros facilisis ut. Nam
            ut accumsan mauris. Aenean at odio dolor. In ultricies ipsum risus,
            nec porttitor turpis ornare in.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4">Something something</Typography>
          <Typography variant="body1" className={classes.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae eros laoreet nisl ornare dignissim at sit amet leo. Integer
            convallis malesuada elit, fringilla venenatis eros facilisis ut. Nam
            ut accumsan mauris. Aenean at odio dolor. In ultricies ipsum risus,
            nec porttitor turpis ornare in.
          </Typography>
        </Grid>
      </Grid>

      <Box className={classes.flexSection}>
        <Button variant="outlined" color="primary" className={classes.button}>
          <Typography variant="h4">Sign Me Up!</Typography>
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
  );
};

export default Jumpstart;
