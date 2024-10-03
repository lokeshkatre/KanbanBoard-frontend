import React, { useContext } from 'react';
import './status.css';
import backlogIcon from '../../Assets/icons_FEtask/Backlog.svg';
import todoIcon from '../../Assets/icons_FEtask/To-do.svg';
import inProgressIcon from '../../Assets/icons_FEtask/in-progress.svg';
import doneIcon from '../../Assets/icons_FEtask/Done.svg';
import cancelIcon from '../../Assets/icons_FEtask/Cancelled.svg';
import addIcon from '../../Assets/icons_FEtask/add.svg';
import threeDotIcon from '../../Assets/icons_FEtask/3 dot menu.svg';
import { DataContext } from '../../DataContext';
import StatusCard from '../StatusCard/StatusCard';

const Status = ({ selectedOrdering }) => {
    const data = useContext(DataContext);
    if (!data) return <p className='loading'>Loading...</p>; // Handle loading state

    const { users, tickets } = data;

    // Calculate the count for each status
    const backlogCount = tickets.filter(ticket => ticket.status === "Backlog").length;
    const todoCount = tickets.filter(ticket => ticket.status === "Todo").length;
    const inProgressCount = tickets.filter(ticket => ticket.status === "In progress").length;
    const doneCount = tickets.filter(ticket => ticket.status === "Done").length;
    const cancelledCount = tickets.filter(ticket => ticket.status === "Cancelled").length;

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
        <div className='status'>
            <div className='status-column'>
                <div className='status-column_content'>
                    <div className="status-content_details">
                        <div className='status-title'>
                            <div className='status-title_content'>
                                <img src={backlogIcon} alt="backlog" />
                                <p>Backlog</p>
                                <p id='count'>{backlogCount}</p>
                            </div>
                            <div className='status-title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threedot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.status === "Backlog" && (
                                            <StatusCard
                                                key={ticket.id} // Ensure key is provided
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            />
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='status-column_content'>
                    <div className="status-content_details">
                        <div className='title'>
                            <div className='status-title_content'>
                                <img src={todoIcon} alt="todo" />
                                <p>Todo</p>
                                <p id='count'>{todoCount}</p>
                            </div>
                            <div className='status-title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threedot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.status === "Todo" && (
                                            <StatusCard
                                                key={ticket.id} // Ensure key is provided
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            />
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='status-column_content'>
                    <div className="status-content_details">
                        <div className='status-title'>
                            <div className='status-title_content'>
                                <img src={inProgressIcon} alt="in-progress" />
                                <p>In Progress</p>
                                <p id='count'>{inProgressCount}</p>
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
                                        ticket.status === "In progress" && (
                                            <StatusCard
                                                key={ticket.id} // Ensure key is provided
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            />
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='status-column_content'>
                    <div className="status-content_details">
                        <div className='status-title'>
                            <div className='status-title_content'>
                                <img src={doneIcon} alt="done" />
                                <p>Done</p>
                                <p id='count'>{doneCount}</p>
                            </div>
                            <div className='status-title_content'>
                                <img src={addIcon} alt="add" />
                                <img src={threeDotIcon} alt="threeDot" />
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.status === "Done" && (
                                            <StatusCard
                                                key={ticket.id} // Ensure key is provided
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            />
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='status-column_content'>
                    <div className="status-content_details">
                        <div className='status-title'>
                            <div className='status-title_content'>
                                <img src={cancelIcon} alt="cancelled" />
                                <p>Cancelled</p>
                                <p id="count">{cancelledCount}</p>
                            </div>
                        </div>
                        <div className='status-items'>
                            {
                                sortedTickets.map((ticket) => {
                                    return (
                                        ticket.status === "Cancelled" && (
                                            <StatusCard
                                                key={ticket.id} // Ensure key is provided
                                                id={ticket.id}
                                                users={users}
                                                tag={ticket.tag}
                                                title={ticket.title}
                                                status={ticket.status}
                                                priority={ticket.priority}
                                            />
                                        )
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Status;
