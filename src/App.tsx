import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
