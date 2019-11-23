const initState = {
  announcements: [
    {id: '1', title: 'Store Hours', content: 'Due to holiday schedule it will be open till 4PM'},
    {id: '2', title: 'Parking', content: 'Today parking is limited due to an event nearby'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ANNOUNCEMENT':
      console.log('created announcement', action.announcement);
  }
  return state
}

export default projectReducer;