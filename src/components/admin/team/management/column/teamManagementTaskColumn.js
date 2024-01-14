import React from 'react';
import TeamManagementTask from '../task/header/task';
import options from '../../../../../assets/media/options.png'
const TeamManagementTaskColumn = ({
  columnTitle,
  taskList,
  userIcon,
  commentIcon,
  fileIcon,
  counter,
}) => {
  return (
    <div className="team-management-task-column">
      <div className="team-management-task-column-header">
        <div className="team-management-task-column-header-title">
          {columnTitle}
        </div>
        <div className="team-management-task-column-header-counter">
          {counter}
        </div>
        <div className="team-management-task-column-header-settings-container">
          <img className="team-management-task-column-header-settings-icon" src={options} alt="Options" />
        </div>
      </div>

      <div className="team-management-task-container">
        {taskList.map((task) => (
          <TeamManagementTask
            key={task.id}
            userIcon={userIcon}
            commentIcon={commentIcon}
            fileIcon={fileIcon}
            taskTitle={task.taskTitle}
            taskDescription={task.taskDescription}
            taggedUsers={task.taggedUsers}
          />
        ))}

        
      </div>
    </div>
  );
};

export default TeamManagementTaskColumn;
