import React from 'react';
import { Grid } from '@material-ui/core';

/*
This component is the card design of the apply page, keeping it here just in case we want to use aspects of this design later
*/

import ApplyCard from './ApplyCard';

const ApplyGrid: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <ApplyCard
          title="Software Developer"
          to="/apply/developer"
          enterTime={1000}
        >
          Developers write the code that make C4C projects a reality. Help us
          tackle tough technical problems while architecting the code that
          powers C4C!
        </ApplyCard>

        <ApplyCard
          title="Product Designer"
          to="/apply/product_designer"
          enterTime={1500}
        >
          Designers create the look and feel of our products. Take an idea from
          conception to delivery while defining our user's experience.
        </ApplyCard>

        <ApplyCard
          title="Brand Designer"
          to="/apply/brand_designer"
          enterTime={1750}
        >
          Brand Designers will innovate and refine C4C's identity. Guide our
          branding and content to align to C4C's mission and goals.
        </ApplyCard>

        {/*<ApplyCard title="Marketing Director" to="TODO" enterTime={1750}>*/}
        {/*  Join C4C's E-Board and lead the organization's social presence and*/}
        {/*  network growth*/}
        {/*</ApplyCard>*/}
      </Grid>
    </>
  );
};

export default ApplyGrid;
