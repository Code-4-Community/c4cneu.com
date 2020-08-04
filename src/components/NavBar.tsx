import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import c4clogo from '../C4C-Banner_Landing.jpeg';

const useStyles = makeStyles({
  navBarLogo: {
    height: 40,
    margin: 0,
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Tabs value={false} centered>
        <Box p="5px">
          <Link to="/">
            <img
              className={classes.navBarLogo}
              src={c4clogo}
              alt="Code4Community Logo"
            />
          </Link>
        </Box>
        <Tab label="Apply" component={Link} to="/apply" />
        <Tab label="Partner" component={Link} to="/partner" />
        <Tab label="Projects" component={Link} to="/projects" />
        <Tab label="Jumpstart" component={Link} to="/jumpstart" />
        <Tab label="Events" component={Link} to="/events" />
        <Tab label="Board" component={Link} to="/board" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
