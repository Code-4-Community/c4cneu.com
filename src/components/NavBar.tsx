import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  ButtonGroup,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { ReactComponent as C4CSvg } from '../svg/C4C.svg';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  navBarLogo: {
    height: 50,
    margin: 0,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  navlinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: '100%',
  },
  disableLinkColor: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  navlink: {
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    textTransform: 'none',
    fontWeight: 300,
  },
  logo: {
    '&:hover': {
      background: 'transparent',
    },
  },
});

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [onHomePage, setOnHomePage] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const currentPath = location.pathname;
    setOnHomePage(currentPath === '/');
  }, [location]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            className={classes.logo}
            color="inherit"
            aria-label="menu"
            disabled={onHomePage}
            disableRipple
            disableTouchRipple
            component={Link}
            to="/"
          >
            <C4CSvg className={classes.navBarLogo} />
          </IconButton>

          <div className={classes.navlinks}>
            <Hidden xsDown>
              <ButtonGroup
                variant="text"
                aria-label="text primary button group"
              >
                <Button component={Link} to="/apply">
                  <Typography variant="h6" className={classes.navlink}>
                    Apply
                  </Typography>
                </Button>
                {/* <Button component={Link} to="/projects">
                  <Typography variant="h6" className={classes.navlink}>
                    Projects
                  </Typography>
                </Button> */}
                <Button component={Link} to="/jumpstart">
                  <Typography variant="h6" className={classes.navlink}>
                    Jumpstart
                  </Typography>
                </Button>
                {/* <Button component={Link} to="/board">
                  <Typography variant="h6" className={classes.navlink}>
                    Board
                  </Typography>
                </Button> */}
                <Button component={Link} to="/faq">
                  <Typography variant="h6" className={classes.navlink}>
                    FAQ
                  </Typography>
                </Button>
              </ButtonGroup>
            </Hidden>
            <Hidden smUp>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon fontSize="large" />
              </IconButton>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/apply">
                  <Typography variant="body1">Apply</Typography>
                </MenuItem>
                {/* <MenuItem onClick={handleClose} component={Link} to="/projects">
                  <Typography variant="body1">Projects</Typography>
                </MenuItem> */}
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/jumpstart"
                >
                  <Typography variant="body1">Jumpstart</Typography>
                </MenuItem>
                {/* <MenuItem onClick={handleClose} component={Link} to="/board">
                  <Typography variant="body1">Board</Typography>
                </MenuItem> */}
                <MenuItem onClick={handleClose} component={Link} to="/faq">
                  <Typography variant="body1">FAQ</Typography>
                </MenuItem>
              </Menu>
            </Hidden>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
