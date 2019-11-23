import React from 'react';
import AnnouncementSummary from './AnnouncementSummary';

const AnnouncementList = () => {
  return (
    <div className="announcement-list section">
        <AnnouncementSummary />
        <AnnouncementSummary />
        <AnnouncementSummary />
        <AnnouncementSummary />
        <AnnouncementSummary />
        <AnnouncementSummary />
    </div>
  )
}

export default AnnouncementList;