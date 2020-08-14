import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { ReactComponent as SVG } from '../svg/people.svg';

import Member from './Member';
import Hero from './Hero';

/*
Template for future page components.
Use MUI's CSS-in-JS makeStyles() as shown below for more complex CSS/
Otherwise, use <Box> components where possible for inline styling.
Every page must have a Helmet tag for SEO purposes.
*/

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
});

const Template: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" className={classes.hero}>
        <Helmet>
          <title>People</title>
          <meta name="People" content="Meet the people of Code4Comunity" />
        </Helmet>
        <Hero
          title="People"
          subtitle="Meet the people of Code4Comunity"
          SvgNode={SVG}
        />
      </Container>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Member
              name="Liam Moynihan"
              position="President"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Liam-M.jpg"
              linkedin="https://www.linkedin.com/in/liam-moynihan-b75806123/"
              email="moynihan.li@northeastern.edu"
            />
            <Member
              name="Jack Blanc"
              position="Director of Engineering"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Jack-B.jpg"
              linkedin="https://www.linkedin.com/in/blancjack/"
              email="blanc.ja@northeastern.edu"
            />
            <Member
              name="Reine Nisheiwat"
              position="Director of Design"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Reine-N.jpg"
              linkedin="https://www.linkedin.com/in/reinenish/"
              email="nisheiwat.r@northeastern.edu"
            />
            <Member
              name="Sadaf Khansalar"
              position="Club Operations & Administration Director"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Sadaf-K.jpg"
              linkedin="https://www.linkedin.com/in/sadafkhansalar/"
              email="khansalar.s@northeastern.edu"
            />
            <Member
              name="Abby Emison"
              position="Recruitment & Community Engagement Director"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Abby-E.jpg"
              linkedin="https://www.linkedin.com/in/abigail-emison-26b448125/"
              email="emison.a@northeastern.edu"
            />
            <Member
              name="Jack Tonina"
              position="School Liaison"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Jack-T.jpg"
              linkedin="https://www.linkedin.com/in/jack-tonina-6328b9147/"
              email="tonina.j@northeastern.edu"
            />
            <Member
              name="Justin Konecny"
              position="Technical Lead"
              image="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/Justin-K.jpg"
              linkedin="https://www.linkedin.com/in/justin-konecny/"
              email="konecny.j@northeastern.edu"
            />
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Template;
