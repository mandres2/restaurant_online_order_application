import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BusinessOwnerNavBar from './components/layout/businessOwnerNavBar'
import Dashboard from './components/dashboard/Dashboard';
import RestaurantMenu from './components/menu/restaurantMenu';
import AnnouncementDetails from './components/announcements/AnnouncementDetails';
import CreateAnnouncement from './components/announcements/CreateAnnouncement';
import AboutRestaurant from './components/about/aboutRestaurant';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BusinessOwnerNavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/menu' component={RestaurantMenu} />
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
