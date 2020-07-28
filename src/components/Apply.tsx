import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Box, Typography } from '@material-ui/core';

import ApplyTabs from './ApplyTabs';

const Apply: React.FC = () => {

  return (
    <Container maxWidth="md">
      <Helmet>
        <title>Write Title Here</title>
        <meta name="description" content="Write a description for SEO here" />
      </Helmet>

      <Box my={4}>
        <Box my={4}>
          <Typography variant="h3">Open Roles</Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            We need your talent to create amazing software. Help us serve
            non-profits here in Boston.
          </Typography>
        </Box>
        <ApplyTabs />
      </Box>
    </Container>
  );
};

export default Apply;
