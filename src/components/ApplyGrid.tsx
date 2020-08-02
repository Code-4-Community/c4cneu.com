import React from 'react';
import { Grid } from '@material-ui/core';

/*
This component is the card design of the apply page, keeping it here just in case we want to use aspects of this design later
*/

import ApplyCard from './ApplyCard';

const Template: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <ApplyCard title="UI/UX Designer" to="/apply/designer" enterTime={1000}>
          This is where we write a bunch of stuff about how we need good
          designers. Design is super important! Lets show people how much we
          value design - and therefore their skillsket.
        </ApplyCard>
        <ApplyCard title="Web Developer" to="/apply/developer" enterTime={1500}>
          We need good developers. Here is text that describes what being a
          developer is like. Short sentences, big picture stuff, very
          persuasive.
        </ApplyCard>

        <ApplyCard title="Role Three" to="/apply/unknown" enterTime={1750}>
          The description of the role. It has to be decently long, but should
          really just be a short summary. Three to five sentences should be
          okay.
        </ApplyCard>
        <ApplyCard title="Role Four" to="/apply/unknown" enterTime={2000}>
          The description of the role. It has to be decently long, but should
          really just be a short summary. Three to five sentences should be
          okay.
        </ApplyCard>
        <ApplyCard title="Role Five" to="/apply/unknown" enterTime={2250}>
          The description of the role. It has to be decently long, but should
          really just be a short summary. Three to five sentences should be
          okay.
        </ApplyCard>
      </Grid>
    </>
  );
};

export default Template;
