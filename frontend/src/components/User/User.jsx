import React, { useContext } from 'react'
import './user.css'
import IndividualUser from '../IndividualUser/IndividualUser'
import { DataContext } from '../../DataContext'

const User = ({ selectedOrdering }) => {
  const data = useContext(DataContext);
  if (!data) return <p id='loading'>Loading...</p>; // Handle loading state

  const { users, tickets } = data;

  return (
    <div className='user'>
      <div className='user-column'>
        {users.map((user) => {
          // Filter tickets for the current user
          const userTickets = tickets.filter(ticket => ticket.userId === user.id);

          // Pass user data and their tickets to IndividualUser
          return (
            <IndividualUser
              key={user.id}
              name={user.name}
              tickets={userTickets}
              ordering={selectedOrdering}
            />
          );
        })}
      </div>
    </div>
  )
}

export default User