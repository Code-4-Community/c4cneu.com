import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from '@material-ui/core';

import theme from './theme';

const Home = lazy(() => import('./components/Home'));
const Apply = lazy(() => import('./components/Apply'));
const ApplyDeveloper = lazy(() => import('./components/ApplyDeveloper'));
const ApplyProductDesigner = lazy(() =>
  import('./components/ApplyProductDesigner')
);
const ApplyBrandDesigner = lazy(() =>
  import('./components/ApplyBrandDesigner')
);

const Partner = lazy(() => import('./components/Partner'));
const Projects = lazy(() => import('./components/Projects'));
const Jumpstart = lazy(() => import('./components/Jumpstart'));
const Events = lazy(() => import('./components/Events'));
const Board = lazy(() => import('./components/Board'));
const FAQ = lazy(() => import('./components/FAQ'));
const NotFound = lazy(() => import('./components/NotFound'));
const NavBar = lazy(() => import('./components/NavBar'));
const Footer = lazy(() => import('./components/Footer'));

const renderLoader = () => <></>;

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

        <Suspense fallback={renderLoader()}>
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
              <Route path="/board" exact component={Board} />
              <Route path="/faq" exact component={FAQ} />

              <Route path="*" exact component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
