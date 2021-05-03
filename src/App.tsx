import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Footer from './components/layout/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import GuardedRoute from './guards/GuardedRoute';
import { getIsAuthenticated } from './utils/auth.utils';

const App = () => {
  const isAuthenticated = getIsAuthenticated();
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <GuardedRoute
          path="/dashboard"
          component={Dashboard}
          auth={isAuthenticated}
        />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
