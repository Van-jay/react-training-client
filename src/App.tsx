import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/auth">
          <Auth />
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
