import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

/*
This component is the card design of the apply page, keeping it here just in case we want to use aspects of this design later
*/

const useStyles = makeStyles({
  example: {
    color: 'red',
  },
  card: {
    minWidth: 300,
    margin: 'auto',
  },
  grid: {
    marginTop: 10,
    marginBottom: 20,
  },
});

const Template: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Developer</Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Software Engineer
              </Typography>

              <Typography variant="body2">
                We need good developers. Here is text that describes what being
                a developer is like. Short sentences, big picture stuff, very
                persuasive.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Apply
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Developer</Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Software Engineer
              </Typography>

              <Typography variant="body2">
                We need good developers. Here is text that describes what being
                a developer is like. Short sentences, big picture stuff, very
                persuasive.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Apply
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Developer</Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Software Engineer
              </Typography>

              <Typography variant="body2">
                We need good developers. Here is text that describes what being
                a developer is like. Short sentences, big picture stuff, very
                persuasive.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Apply
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Developer</Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                Software Engineer
              </Typography>

              <Typography variant="body2">
                We need good developers. Here is text that describes what being
                a developer is like. Short sentences, big picture stuff, very
                persuasive.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Apply
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Template;
