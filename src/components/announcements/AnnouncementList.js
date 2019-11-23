import React from 'react';

const AnnouncementList = () => {
  return (
    <div className="announcement-list section">
        <div className="card z-depth-0 announcement-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Announcement Title #1</span>
            <p>Posted by Business Owner</p>
            <p className="grey-text">Date #1 Posted Here</p>
          </div>
        </div>

        <div className="card z-depth-0 announcement-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Announcement Title #2</span>
            <p>Posted by Business Owner</p>
            <p className="grey-text">Date #2 Posted Here</p>
          </div>
        </div>

        <div className="card z-depth-0 announcement-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">Announcement Title #3</span>
            <p>Posted by Business Owner</p>
            <p className="grey-text">Date #3 Posted Here</p>
          </div>
        </div>
    </div>
  )
}

export default AnnouncementList;