import React from 'react';

const AnnouncementSummary = ({announcement}) => {
  return (
    <div className="card z-depth-0 announcement-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{announcement.title} </span>
            <p>Posted by Business Owner</p>
            <p className="grey-text">Date Posted Here</p>
          </div>
    </div>
  )
}

export default AnnouncementSummary;