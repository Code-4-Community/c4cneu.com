import React from 'react';
import { Helmet } from 'react-helmet';

import { Container, Typography } from '@material-ui/core';
import Hero from './Hero';
import { ReactComponent as SVG } from '../svg/404.svg';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>404 : Page Not Found</title>
      </Helmet>
      <Hero
        title="Page not found"
        subtitle="Oops! Sorry, we couldn't find the page you're looking for."
        SvgNode={SVG}
      />

      <Typography variant="body1">
        Double check your URL, or click on one of the links above to navigate to
        a different page.
      </Typography>
    </Container>
  );
};

export default NotFound;
