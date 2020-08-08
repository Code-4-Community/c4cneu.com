import * as React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  picture: {
    borderRadius: '10em',
    maxWidth: '10em',
  },
  pictureWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1em',
  },
  blockQuote: {
    borderLeft: '4px solid gray',
    paddingLeft: '0.5em',
    marginBottom: '1em',
  },
  leftQuote: {
    position: 'relative',
    fontSize: '8em',
  },
});

interface QuoteBlockProps {
  readonly imageURL: string;
  readonly quote: string;
  readonly name: string;
  readonly title: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  imageURL,
  quote,
  name,
  title,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={3} className={classes.pictureWrapper}>
        <img
          src={imageURL}
          alt="A developer at Code4Community"
          className={classes.picture}
        />
      </Grid>

      <Grid item sm>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Typography
            variant="body1"
            align="left"
            className={classes.blockQuote}
          >
            {quote}
          </Typography>
          <Typography variant="subtitle1" align="left">
            {name}
          </Typography>
          <Typography variant="subtitle2" align="left">
            {title}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
