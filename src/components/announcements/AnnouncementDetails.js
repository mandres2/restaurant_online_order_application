import React from 'react'

const AnnouncementDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section announcement-details">
      <div className="card z-depth-0">
        <div className="class card-content">
          <span className="card-title">Announcement Title - {id} </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit veritatis ducimus deserunt quod quidem libero animi molestiae molestias, aliquid ipsam aspernatur suscipit assumenda eaque tempora ipsa, nemo consectetur? Culpa.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Restaurant Owner</div>
          <div>Date Posted</div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementDetails
