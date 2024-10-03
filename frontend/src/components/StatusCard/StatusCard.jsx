import React from 'react'
import './statusCard.css'
import noPriorityIcon from '../../Assets/icons_FEtask/No-priority.svg';
import highPriorityIcon from '../../Assets/icons_FEtask/Img - High Priority.svg';
import lowPriorityIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg';
import mediumPriorityIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg';
import urgentPriorityIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import userIcon from '../../Assets/icons_FEtask/user.svg';

const StatusCard = (props) => {

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
    <div className='statuscard'>
      <div className="statuscard-top">
        <h6>{props.id}</h6>
        <img src={userIcon} alt="user" />
      </div>
      <div className="statuscard-title">
        <p>{trimTitle(props.title, 50)}</p>
      </div>
      <div className="statuscard-tag">
        <img src={getPriorityIcon(props.priority)} alt="priority-icon" />
        <p><div id='circle'></div>{trimTitle(props.tag, 30)}</p>
      </div>
    </div>
  )
}

export default StatusCard