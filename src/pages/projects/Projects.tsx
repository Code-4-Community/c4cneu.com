import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import { Container, Grid } from '@material-ui/core';

import ProjectCard from './ProjectCard';
import { ReactComponent as ProjectsSvg } from './projects.svg';

import ProjectJSON from './ProjectJSON';

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
          { 
            ProjectJSON.cards.map((value, index) => {
              return <ProjectCard
                title={value.title}
                paragraph={value.paragraph}
                appDesc={value.appDesc}
                path={value.path}
                abbr={value.abbr}
                learnMore={value.learnMore}
                key={index} 
              />
            })
          }
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
