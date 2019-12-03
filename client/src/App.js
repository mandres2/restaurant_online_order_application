import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import AnnouncementDetails from './components/announcements/AnnouncementDetails';
import CreateAnnouncement from './components/announcements/CreateAnnouncement';
import AboutRestaurant from './components/about/aboutRestaurant';
import CustomerNavBar from './components/layout/customerNavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CustomerNavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/announcement/:id' component={AnnouncementDetails} />
            <Route path='/create' component={CreateAnnouncement} />
            <Route path='/about' component={AboutRestaurant} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
