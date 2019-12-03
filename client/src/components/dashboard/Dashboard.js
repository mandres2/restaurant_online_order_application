import React, { Component } from 'react';
import Notifications from './Notifications';
import AnnouncementList from '../announcements/AnnouncementList';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { announcements } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
        {/* for small screens -> 12 columns and for medium size screens let it be 6 columns  */}
          <div className="col s12 m6">
            <AnnouncementList announcements={announcements} />
          </div>
          <div className="col s12 m5 offset-m1"></div>
            <Notifications />
        </div>
      </div>
    )
  }
}

export default Dashboard;
