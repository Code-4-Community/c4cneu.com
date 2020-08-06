import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';
import { ReactComponent as SVG } from '../svg/C4C.svg';
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
  logo: {
    height: '2em',
    margin: 'auto',
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Divider />

      <Box minHeight="10em" paddingY={5}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography color="textSecondary" variant="subtitle2">
              Home | Apply | Jumpstart | FAQ
            </Typography>

            <Typography color="textSecondary" variant="subtitle2">
              Northeastern University, Boston, MA
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="textSecondary" variant="subtitle2">
              Github | Instragram | Slack | LinkedIn | Facebook
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Join our mailing list to get the lastest news on C4C.
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Contact us at c4cneu@email.com
            </Typography>
          </Grid>

          <Grid item xs={11}>
            <Typography color="textSecondary" variant="subtitle2">
              Made with love by Code4Community.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
