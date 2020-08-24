import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../Hero';
import { Container, Grid } from '@material-ui/core';

import ProjectCard from './ProjectCard';
import { ReactComponent as ProjectsSvg } from '../../svg/projects.svg';

const Projects: React.FC = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="C4C delivers web applications to Boston-based nonprofits." />
        </Helmet>
        <Hero
          subtitle="Take a look at some of the work we've done."
          title="Projects"
          SvgNode={ProjectsSvg}
        />
      </Container>
      <Container maxWidth="md">
        <Grid
          container
          justify="center" 
          alignItems="flex-start" 
          spacing={1}
        >
          <ProjectCard title={"Lucy's Love Bus"} paragraph={"Lucy’s Love Bus improves quality of life for children with cancer \
                        or other life-threatening illnesses with integrative therapies like massage, meditation, \
                        acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s \
                        pain and anxiety during and after traditional medical treatments. \
                        \
                        The Sajni Center is a space of hope and healing for children with life-threatening illness or chronic \
                        medical conditions and their families. Here they host events for the children and their families. We created \
                        the event planning and ticket purchasing system for all the events hosted by Lucy's Love Bus."}
            appDesc={"Event Registration System"}
            path="./llb.png"
            abbr="LLB"
            learnMore="https://www.lovebusprograms.org/" />

          <ProjectCard title={"Speak For The Trees"} paragraph={"Speak for the Trees Boston aims to improve the size and health \
                of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. \
                They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. \
                C4C built a block reservation system, allowing SFFT's volunteers to reserve blocks of trees that they will \
                be able to inventory and then mark them as complete when they are finished collecting the required data."}
            appDesc={"Tree Inventory System"}
            path="./sfft.png"
            abbr="SFFT"
            learnMore="https://app.sfttbos.org" />
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
