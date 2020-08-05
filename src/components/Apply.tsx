import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';
import ApplyGrid from './ApplyGrid';
import Hero from './Hero';
import { ReactComponent as SVG } from '../svg/apply.svg';

const Apply: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Apply</title>
        <meta
          name="description"
          content="Apply to join Code4Community and help create software for non-profits in Boston."
        />
      </Helmet>

      <Hero
        title="Open Positions"
        subtitle="Join us and make a difference helping non-profits in need."
        SvgNode={SVG}
      />
      <ApplyGrid />
    </Container>
  );
};

export default Apply;