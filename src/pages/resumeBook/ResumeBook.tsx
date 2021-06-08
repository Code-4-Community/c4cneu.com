import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import Hero from '../../components/Hero';
import { ReactComponent as ResumeSvg } from './resume.svg';

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
  },
});

const developerResumeBookURL =
  'https://c4cneu-public.s3.us-east-2.amazonaws.com/Developer+Resume+Book.pdf';
const designerResumeBookURL =
  'https://c4cneu-public.s3.us-east-2.amazonaws.com/Designer+Resume+Book.pdf';

const ResumeBook: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Resume Book</title>
        <meta
          name="description"
          content="The public resume book for C4C members."
        />
      </Helmet>
      <Hero
        subtitle="Take a look at Code4Community's members and their amazing skills."
        title="Resume Book"
        SvgNode={ResumeSvg}
      />

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Button
            className={classes.button}
            size="large"
            href={developerResumeBookURL}
            variant="outlined"
            color="primary"
          >
            <Typography variant="h5">Developer Resume Book</Typography>{' '}
          </Button>
        </Grid>

        <Grid item>
          <Button
            className={classes.button}
            size="large"
            href={designerResumeBookURL}
            variant="outlined"
            color="primary"
          >
            <Typography variant="h5">Designer Resume Book</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumeBook;
