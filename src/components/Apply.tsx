import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ApplyGrid from './ApplyGrid';

const useStyles = makeStyles({
  heading: {
    fontWeight: 'bold',
  },
});

const Apply: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Apply</title>
        <meta
          name="description"
          content="Apply to join Code4Community and help create software for non-profits in Boston."
        />
      </Helmet>

      <Box my={4}>
        <Typography className={classes.heading} variant="h2">
          Open Roles
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          We want <b>your</b> talent. Help us provide software solutions to
          non-profits in need.
        </Typography>
        <ApplyGrid />
      </Box>
    </Container>
  );
};

export default Apply;
