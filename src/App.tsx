import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/home/Home';
import Apply from './pages/apply/Apply';
import ApplyDeveloper from './pages/apply/developer/ApplyDeveloper';
import ApplyProductDesigner from './pages/apply/product-designer/ApplyProductDesigner';
import ApplyBrandDesigner from './pages/apply/brand-designer/ApplyBrandDesigner';
import Projects from './pages/projects/Projects';
import Jumpstart from './pages/jumpstart/Jumpstart';
import Events from './pages/events/Events';
import People from './pages/people/People';
import FAQ from './pages/faq/FAQ';
import ResumeBook from './pages/resumeBook/ResumeBook';
import NotFound from './pages/notfound/NotFound';
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
            <Route path="/projects" exact component={Projects} />
            <Route path="/jumpstart" exact component={Jumpstart} />
            <Route path="/events" exact component={Events} />
            <Route path="/people" exact component={People} />
            <Route path="/faq" exact component={FAQ} />
            <Route path="/resume-book" exact component={ResumeBook} />
            <Route path="*" exact component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
