import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Grid,
  Typography,
  Box,
  Link,
} from '@material-ui/core';
import { ReactComponent as SVG } from '../../svg/events.svg';
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

const Events: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();

  const eventsDocsLink =
    'https://docs.google.com/document/d/1CbTWfAhkmy7l-BbuaZJ1lSIsheUOcVfQRaBQPGAZRH4/edit?usp=sharing';
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Events</title>
        <meta
          name="description"
          content="Upcoming events held by Code4Community."
        />
      </Helmet>
      <Hero
        title="Events"
        subtitle="Join our weekly events to grow your skills and learn more about Code4Community."
        SvgNode={SVG}
      />

      <Grid container>
        <Grid item md={6}>
          <Box pb={3}>
            <Typography variant="h6">About our events</Typography>
            <Typography variant="body1">
              Code4Community sponsors weekly events for all our club members. We
              hold general club events, company visits, panels/discussions, and
              a special series of web development workshops called the{' '}
              <Link component={RouterLink} to="/jumpstart">
                Jumpstart
              </Link>{' '}
              program. Stay tuned for more events by checking our official event
              schedule and joining our{' '}
              <Link
                href="https://c4cneu.us4.list-manage.com/subscribe?u=4b534cd2e8fe8be8150d03977&id=b1915b8b8b"
                target="_blank"
              >
                mailing list
              </Link>
              .
            </Typography>
          </Box>
        </Grid>
        <Grid item xs className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            href={eventsDocsLink}
            target="_blank"
          >
            <Typography variant="h6">View the event schedule</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Events;
