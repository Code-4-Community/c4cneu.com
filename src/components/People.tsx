import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { ReactComponent as SVG } from '../svg/people.svg';

import Member from './Member';
import PeopleData from './PeopleData';
import Hero from './Hero';

// @ts-ignore
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  example: {
    color: 'red',
  },
  root: {
    alignContent: 'center',
    textAlign: 'center',
    paddingBottom: 50,
    background: '#fff',
  },
  title: {
    margin: 20,
  },
  hero: {
    marginBottom: 10,
  },
  positionTitle: {
    fontSize: '40px',
    margin: '30px 0px',
  },
});

const People: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" className={classes.hero}>
        <Helmet>
          <title>People</title>
          <meta name="People" content="Meet the people of Code4Community." />
        </Helmet>
        <Hero
          title="People"
          subtitle="Meet the people of Code4Community."
          SvgNode={SVG}
        />
      </Container>
      <Fade>
        <Container maxWidth="md">
          <div className={classes.root}>
            <Typography
              variant="h3"
              align="left"
              className={classes.positionTitle}
            >
              E-Board
            </Typography>
            <Grid container justify="center" alignItems="center" spacing={3}>
              {PeopleData.map(person => <Member name={person.name} position={person.position} image={person.image} linkedin={person.linkedin} email={person.email} />)}
            </Grid>
          </div>
        </Container>
      </Fade>
    </div>
  );
};

export default People;
