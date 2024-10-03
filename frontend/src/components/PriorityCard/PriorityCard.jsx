import React from 'react'
import './prioritycard.css'
import backlogIcon from '../../Assets/icons_FEtask/Backlog.svg';
import todoIcon from '../../Assets/icons_FEtask/To-do.svg';
import inProgressIcon from '../../Assets/icons_FEtask/in-progress.svg';
import doneIcon from '../../Assets/icons_FEtask/Done.svg';
import cancelIcon from '../../Assets/icons_FEtask/Cancelled.svg';
import userIcon from '../../Assets/icons_FEtask/user.svg'

const PriorityCard = (props) => {

    const getStatusIcon = (status) => {
        switch (status) {
            case "Backlog":
                return backlogIcon;
            case "Todo":
                return todoIcon;
            case "In progress":
                return inProgressIcon;
            case "Done":
                return doneIcon;
            default:
                return cancelIcon;
        }
    };

    const trimTitle = (title, maxLength) => {
        return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
    };

    return (
        <div className='prioritycard'>
            <div className="prioritycard-top">
                <h6>{props.id}</h6>
                <img src={userIcon} alt="user" />
            </div>
            <div className="prioritycard-title">
                <img src={getStatusIcon(props.status)} alt="status-icon" />
                <p>{trimTitle(props.title, 50)}</p>
            </div>
            <div className="prioritycard-tag">
                <p><div id='circle'></div>{trimTitle(props.tag, 30)}</p>
            </div>
        </div>
    )
}

export default PriorityCard