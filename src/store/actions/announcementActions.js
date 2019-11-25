export const createAnnouncement = (announcement) => {
  return (dispatch, getState) => {
    // make asynchronous call to database
    dispatch({ type: 'CREATE_ANNOUNCEMENT', announcement });
  }
};