import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BusinessOwnerNavBar from './components/layout/businessOwnerNavBar'
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BusinessOwnerNavBar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
