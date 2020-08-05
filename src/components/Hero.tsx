import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  illustration: {
    width: '100%',
    height: '100%',
  },
  root: {
    paddingTop: '2em',
    paddingBottom: '2em',
  },
  verticallyCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

interface HeroProps {
  title: string;
  subtitle: string;
  SvgNode: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, SvgNode }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid md={6} className={classes.verticallyCenter}>
        <Typography variant="h2" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          {subtitle}
        </Typography>
      </Grid>
      <Grid md={6}>
        <SvgNode className={classes.illustration} />
      </Grid>
    </Grid>
  );
};

export default Hero;
