import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './components/Home';
import Apply from './components/Apply';
import Developer from './components/Developer';
import Partner from './components/Partner';
import Projects from './components/Projects';
import Jumpstart from './components/Jumpstart';
import Events from './components/Events';
import Board from './components/Board';

import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';

import theme from './theme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.text.primary,
    },
  })
);

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const userPickedTheme = React.useMemo(
    () =>
      createMuiTheme({
        ...theme,
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={userPickedTheme}>
        <Helmet>
          <meta
            name="keywords"
            content="C4C,code,for,community,code4community,codeforcommunity,northeastern,boston"
          />
        </Helmet>
        <div className={classes.background}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/apply" exact component={Apply} />
              <Route path="/apply/developer" exact component={Developer} />
              <Route path="/apply/designer" exact component={Apply} />

              <Route path="/partner" exact component={Partner} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/jumpstart" exact component={Jumpstart} />
              <Route path="/events" exact component={Events} />
              <Route path="/board" exact component={Board} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
