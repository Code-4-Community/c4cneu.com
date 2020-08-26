import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './components/Home';
import Apply from './components/Apply';
import ApplyDeveloper from './components/ApplyDeveloper';
import ApplyProductDesigner from './components/ApplyProductDesigner';
import ApplyBrandDesigner from './components/ApplyBrandDesigner';
import Partner from './components/Partner';
import Projects from './components/Projects';
import Jumpstart from './components/Jumpstart';
import Events from './components/Events';
import People from './components/People';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { ThemeProvider } from '@material-ui/core';

import theme from './theme';
const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta
            name="keywords"
            content="C4C,code,for,community,code4community,codeforcommunity,northeastern,boston"
          />
        </Helmet>

        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/apply" exact component={Apply} />
            <Route path="/apply/developer" exact component={ApplyDeveloper} />
            <Route
              path="/apply/product-designer"
              exact
              component={ApplyProductDesigner}
            />
            <Route
              path="/apply/brand-designer"
              exact
              component={ApplyBrandDesigner}
            />

            <Route path="/partner" exact component={Partner} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/jumpstart" exact component={Jumpstart} />
            <Route path="/events" exact component={Events} />
            <Route path="/people" exact component={People} />
            <Route path="/faq" exact component={FAQ} />

            <Route path="*" exact component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
