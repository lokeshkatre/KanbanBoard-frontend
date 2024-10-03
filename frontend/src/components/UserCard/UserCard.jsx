import React from 'react';
import './usercard.css';
import backlogIcon from '../../Assets/icons_FEtask/Backlog.svg';
import todoIcon from '../../Assets/icons_FEtask/To-do.svg';
import inProgressIcon from '../../Assets/icons_FEtask/in-progress.svg';
import doneIcon from '../../Assets/icons_FEtask/Done.svg';
import cancelIcon from '../../Assets/icons_FEtask/Cancelled.svg';
import noPriorityIcon from '../../Assets/icons_FEtask/No-priority.svg';
import highPriorityIcon from '../../Assets/icons_FEtask/Img - High Priority.svg';
import lowPriorityIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg';
import mediumPriorityIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg';
import urgentPriorityIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg';

const UserCard = (props) => {
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

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 0:
        return urgentPriorityIcon;
      case 1:
        return highPriorityIcon;
      case 2:
        return mediumPriorityIcon;
      case 3:
        return lowPriorityIcon;
      default:
        return noPriorityIcon;
    }
  }

  const trimTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };
  
  return (
    <div className='usercard'>
      <h6>{props.id}</h6>
      <div className="usercard-title">
        <img src={getStatusIcon(props.status)} alt="status-icon" />
        <p>{trimTitle(props.title, 50)}</p>
      </div>
      <div className="usercard-tag">
        <img src={getPriorityIcon(props.priority)} alt="priority-icon" />
        <p><div id='circle'></div>{trimTitle(props.tag, 30)}</p>
      </div>
    </div>
  );
}

export default UserCard;
