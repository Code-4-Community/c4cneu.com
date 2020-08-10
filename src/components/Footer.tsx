import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Divider, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ReactComponent as C4CSvg } from '../svg/C4C.svg';
/*
Template for future page components.
Use MUI's CSS-in-JS makeStyles() as shown below for more complex CSS/
Otherwise, use <Box> components where possible for inline styling.
Every page must have a Helmet tag for SEO purposes.
*/

const useStyles = makeStyles({
  root: {
    marginTop: '6em',
  },
  logo: {
    height: '2.75em',
    padding: '1em',
    margin: 'auto',
  },
  footerLink: {
    color: 'inherit',
  },
  location: {
    fontWeight: 300,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Divider />
      <Box minHeight="10em" paddingY={5}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography gutterBottom color="textSecondary" variant="subtitle2">
              <Link to="/apply" className={classes.footerLink}>
                Apply
              </Link>
              {' | '}
              <Link to="/jumpstart" className={classes.footerLink}>
                Jumpstart
              </Link>
              {' | '}
              <Link to="/faq" className={classes.footerLink}>
                FAQ
              </Link>
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              align="left"
              variant="subtitle2"
            >
              Contact us at c4cneu@gmail.com
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              gutterBottom
              color="textSecondary"
              align="right"
              variant="subtitle2"
            >
              <a
                href="https://github.com/Code-4-Community"
                className={classes.footerLink}
              >
                Github
              </a>
              {' | '}
              <a href="https://c4cneu.slack.com" className={classes.footerLink}>
                Slack
              </a>
              {' | '}
              <a
                href="https://www.facebook.com/c4cneu/"
                className={classes.footerLink}
              >
                Facebook
              </a>
              {' | '}
              <a
                href="http://instagram.com/c4cneu"
                className={classes.footerLink}
              >
                Instagram
              </a>
              {' | '}
              <a
                href="https://www.linkedin.com/company/code-4-community/"
                className={classes.footerLink}
              >
                LinkedIn
              </a>
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              align="right"
              variant="subtitle2"
            >
              Join our{' '}
              <a
                href="https://c4cneu.us4.list-manage.com/subscribe?u=4b534cd2e8fe8be8150d03977&id=b1915b8b8b"
                className={classes.footerLink}
              >
                mailing list
              </a>
            </Typography>
          </Grid>
          <Grid item xs>
            <Box display="flex" flexDirection="column" alignItems="center">
              <C4CSvg className={classes.logo} />
              <Typography
                color="textSecondary"
                align="center"
                variant="subtitle2"
              >
                Made with love by Code4Community
              </Typography>
              <Typography
                color="textSecondary"
                align="center"
                variant="subtitle2"
                className={classes.location}
              >
                Northeastern University, Boston MA
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
