import React from 'react'
import './individualUser.css'
import addIcon from '../../Assets/icons_FEtask/add.svg'
import threeDotIcon from '../../Assets/icons_FEtask/3 dot menu.svg'
import userIcon from '../../Assets/icons_FEtask/user.svg'
import UserCard from '../UserCard/UserCard'


const IndividualUser = (props) => {

    const tickets = props.tickets;
    const count = tickets.length;

    const sortedTickets = [...tickets].sort((a, b) => {
        if (props.ordering === 'title') {
            return a.title.localeCompare(b.title); // Sort by title
        } else if (props.ordering === 'priority') {
            return a.priority - b.priority; // Sort by numeric priority
        }
        return 0; // No sorting if no valid ordering selected
    });

    return (
        <div className='individual-content'>
            <div className='individual-title'>
                <div className='individual-title_content'>
                    <img src={userIcon} alt="userIcon" />
                    <p>{props.name}</p>
                    <p className='count'>{count}</p>
                </div>
                <div className='individual-title_content'>
                    <img src={addIcon} alt="add" />
                    <img src={threeDotIcon} alt="threedot" />
                </div>
            </div>
            <div className='individual-ticketDetails'>
                {
                    sortedTickets.map((ticket) => {
                        return (
                            <UserCard
                            id={ticket.id}
                            title={ticket.title}
                            status={ticket.status}
                            priority={ticket.priority}
                            tag={ticket.tag}
                            />
                        )

                    })
                }
            </div>
        </div>
    )
}

export default IndividualUser