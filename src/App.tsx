import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
