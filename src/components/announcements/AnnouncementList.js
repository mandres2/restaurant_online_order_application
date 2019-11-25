import React from 'react';
import AnnouncementSummary from './AnnouncementSummary';

const AnnouncementList = ({announcements}) => {
  return (
    <div className="announcement-list section">
      { announcements && announcements.map(announcement => {
        return (
          <AnnouncementSummary announcement={announcement} key={announcement.id} />
        )
      })}
    </div>
  )
}

export default AnnouncementList;