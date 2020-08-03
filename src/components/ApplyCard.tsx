import React from 'react';
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Fade,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface RoleProps {
  title: string;
  children: React.ReactNode;
  to: string;
  enterTime: number;
}

const useStyles = makeStyles({
  card: {
    padding: 0,
    margin: 'auto',
  },
  content: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  heading: {
    fontWeight: 'bold',
  },
  disableLinkColor: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
});
// CSS for underline animation
//https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/#technique-4-using-transform
const StyledButton = withStyles(() =>
  createStyles({
    root: {
      padding: 0,
      borderBottom: '1px solid grey',

      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
    label: {
      overflow: 'hidden',
      '& > span': {
        position: 'absolute',

        overflow: 'hidden',

        transform: 'translateX(-100%)',
        transition: 'transform 275ms ease',
        borderBottom: '1px solid black',
        paddingTop: 1,
      },

      '& > span:before': {
        display: 'inline-block',
        content: 'attr(data-content)',

        color: '#555',
        opacity: 0,

        transform: 'translateX(100%)',
      },

      '&:hover > span': {
        transform: 'translateX(0)',
      },
      '&:hover > span::before': {
        transform: 'translateX(0)',
      },
    },
    text: {
      fontWeight: 'normal',
      textTransform: 'none',
    },
  })
)(Button);

const ApplyCard: React.FC<RoleProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid item sm={4}>
      <Fade in timeout={props.enterTime}>
        <Card className={classes.card} elevation={0}>
          <CardContent className={classes.content}>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              {props.title}
            </Typography>

            <Typography variant="body1">{props.children}</Typography>
          </CardContent>
          <CardActions className={classes.content}>
            <Link className={classes.disableLinkColor} to={props.to}>
              <StyledButton size="large" disableRipple>
                <span aria-hidden="true" data-content="Learn More"></span>Learn
                More
              </StyledButton>
            </Link>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  );
};

export default ApplyCard;
