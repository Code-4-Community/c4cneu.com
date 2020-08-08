import React from 'react';
import { Helmet } from 'react-helmet';

import {
  CardActionArea,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Card,
  Container,
  Box,
  CardActions,
  makeStyles
}
  from '@material-ui/core';

const useStyles = makeStyles({
  example: {
    color: 'red',
  },
  'project-card': {},
  'project-img': {}
});

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="C4C delivers web applications to Boston-based nonprofits." />
      </Helmet>
      <Box my={4}>

        <Card className={classes['project-card']}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes['project-img']}
              image="./llb.png"
              alt="llb.png"
              title="LLB"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lucy's Love Bus
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lucy’s Love Bus improves quality of life for children with cancer or other life-threatening illnesses with
                integrative therapies like massage, meditation, acupuncture, music therapy, and therapeutic horseback riding.
                Integrative therapies ease children’s pain and anxiety during and after traditional medical treatments.
                The Sajni Center is a space of hope and healing for children with life-threatening illness or chronic
                medical conditions and their families. Here they host events for the children and their families. We created
                the event planning and ticket purchasing system for all the events hosted by Lucy's Love Bus.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>

        <Card className={classes['project-card']}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes['project-img']}
              image="./sfft.png"
              alt="sfft.png"
              title="SFFT"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Speak For The Trees
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area,
                with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data)
                trees, plant trees, and educate those about trees. C4C built a block reservation system, allowing SFFT's volunteers
                to reserve blocks of trees that they will be able to inventory and then mark them as complete when they are
                finished collecting the required data.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>

      </Box>
    </Container>
  );
};

export default Projects;
