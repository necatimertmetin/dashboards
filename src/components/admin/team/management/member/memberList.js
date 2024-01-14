import React, { useState } from "react";
import userIcon from '../../../../../assets/media/user.png';

const MemberList = ({ teamName, members, availableMemberCount, index, activeIndex, onTeamClick }) => {
    const handleTeamClick = () => {
        onTeamClick(teamName, availableMemberCount, index);
    };

    return (
        <div
            className={`member-list ${index === activeIndex ? 'active-member-list' : ''}`}
            onClick={handleTeamClick}
        >
            <div className="member-text-area">
                <div className="member-title">
                    {teamName ? teamName : `Team Members (${members.length})`}
                </div>
                <div className="member-description">
                    {availableMemberCount} available
                </div>
            </div>
            <div className="member-list-content">
                {members.map((member, index) => (
                    <div key={index} className="team-management-member">
                        {member && (
                            <img
                                className="member"
                                src={member.photo || userIcon}
                                alt={`user`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberList;
