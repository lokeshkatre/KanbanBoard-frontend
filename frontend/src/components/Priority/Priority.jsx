import React, { useContext } from 'react'
import './priority.css'
import threeDotIcon from '../../Assets/icons_FEtask/3 dot menu.svg'
import addIcon from '../../Assets/icons_FEtask/add.svg'
import noPriorityIcon from '../../Assets/icons_FEtask/No-priority.svg';
import highPriorityIcon from '../../Assets/icons_FEtask/Img - High Priority.svg'
import lowPriorityIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg'
import mediumPriorityIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg'
import urgentPriorityIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg'
import { DataContext } from '../../DataContext';
import PriorityCard from '../PriorityCard/PriorityCard';


const Priority = ({ selectedOrdering }) => {

    const data = useContext(DataContext);
    if (!data) return <p className='loading'>Loading...</p>; // Handle loading state

    if (!data) return <p id='loading'>Loading.....</p>;
    const { users, tickets } = data;
    const noPriorityCount = tickets.filter(ticket => ticket.priority === 4).length;
    const urgentCount = tickets.filter(ticket => ticket.priority === 0).length;
    const highCount = tickets.filter(ticket => ticket.priority === 1).length;
    const mediumCount = tickets.filter(ticket => ticket.priority === 2).length;
    const lowCount = tickets.filter(ticket => ticket.priority === 3).length;

    // Sort tickets based on selectedOrdering
    const sortedTickets = [...tickets].sort((a, b) => {
        if (selectedOrdering === 'title') {
            return a.title.localeCompare(b.title); // Sort by title
        } else if (selectedOrdering === 'priority') {
            return a.priority - b.priority; // Sort by numeric priority
        }
        return 0; // No sorting if no valid ordering selected
    });

    return (
        <div className='priority'>
            <div className='column'>
                <div className='column_content'>
                    <div className="content_details">
                        <div className='title'>
                            <div className='title_content'>
                                <img src={noPriorityIcon} alt="backlog" />
                                <p>No priority</p>
                                <p id='count'>{noPriorityCount}</p>
                            </div>
                            <div className='title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threedot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.priority === 4 && (
                                            < PriorityCard
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            /> // Ensure key is provided
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='column_content'>
                    <div className="content_details">
                        <div className='title'>
                            <div className='title_content'>
                                <img src={urgentPriorityIcon} alt="todo" />
                                <p>Urgent</p>
                                <p id='count'>{urgentCount}</p>

                            </div>
                            <div className='title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threedot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.priority === 0 && (
                                            < PriorityCard
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            /> // Ensure key is provided
                                        )
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className='column_content'>
                    <div className="content_details">
                        <div className='title'>
                            <div className='title_content'>
                                <img src={highPriorityIcon} alt="in-progress" />
                                <p>High</p>
                                <p id='count'>{highCount}</p>

                            </div>
                            <div className='title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threeDot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.priority === 1 && (
                                            < PriorityCard
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            /> // Ensure key is provided
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='column_content'>
                    <div className="content_details">
                        <div className='title'>
                            <div className='title_content'>
                                <img src={mediumPriorityIcon} alt="done" />
                                <p>Medium</p>
                                <p id='count'>{mediumCount}</p>

                            </div>
                            <div className='title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threeDot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.priority === 2 && (
                                            < PriorityCard
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            /> // Ensure key is provided
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='column_content'>
                    <div className="content_details">
                        <div className='title'>
                            <div className='title_content'>
                                <img src={lowPriorityIcon} alt="cancelled" />
                                <p>Low</p>
                                <p id='count'>{lowCount}</p>
                            </div>
                            <div className='title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threeDot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.priority === 3 && (
                                            < PriorityCard
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            /> // Ensure key is provided
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Priority