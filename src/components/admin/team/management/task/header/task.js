import React from 'react';
import TeamManagementTaskHeaderItem from './taskHeaderItem';

const TeamManagementTask = ({ userIcon, commentIcon, fileIcon, taskTitle, taskDescription, taggedUsers }) => {
    const renderUserTag = (username) => (
        <div className="user-tag">
            <img className="user-tag-img" src={userIcon} alt="user" />
            {username}
        </div>
    );

    const renderAttachment = (icon, count) => (
        <div className="team-management-task-attachment">
            <img className="team-management-task-attachment-icon" src={icon} />
            <div>{count}</div>
        </div>
    );

    return (
        <div className="team-management-task">
            <div className="team-management-task-header">
                <TeamManagementTaskHeaderItem />
                <TeamManagementTaskHeaderItem />
            </div>
            <div className="team-management-task-title">
                {taskTitle}
            </div>
            <div className="team-management-task-description">
                {taskDescription}
            </div>
            <div className="team-management-task-tag-container">
                {taggedUsers && taggedUsers.map((user) => (
                    renderUserTag(user)
                ))}


            </div>
            <div className="team-management-task-attachment-container">
                {renderAttachment(commentIcon, 10)}
                {renderAttachment(fileIcon, 10)}
            </div>
        </div>
    );
};

export default TeamManagementTask;
