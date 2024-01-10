import React from "react";
import '../../../../assets/css/TeamManagement.css';
import userIcon from '../../../../assets/media/image.jpg';
import createIcon from '../../../../assets/media/create.png';
import LocationRow from "../../../location/locationRow";
const TeamManagement = () => {

    const locationRowArray = [
        { title: 'ADMIN' },
        { title: 'Dashboard' },
    ];
    const availableMemberCount = 3;
    const generateMembers = (count) => {
        const members = [];

        for (let i = 0; i < count; i++) {
            const status = i % 17 === 0 ? 'online' : 'away'; // Sırayla online ve away durumları
            members.push({ img: userIcon, status });
        }

        return members;
    };
    const memberCount = 10;
    const members = generateMembers(memberCount);

    const onlineMembers = members.filter(member => member.status === 'online');
    const awayMembers = members.filter(member => member.status === 'away');

    return (
        <div className="team-management-container">
            <LocationRow locationArray={locationRowArray} />

            <div className="team-management-container-header">
                <div className="member-list">
                    <div className="member-text-area">
                        <div className="member-title">
                            {members.length} members
                        </div>
                        <div className="member-description">
                            {availableMemberCount} available
                        </div>
                    </div>
                    <div className="member-list-content">
                        {onlineMembers.map((member, index) => (
                            <div key={index} className="team-management-member">
                                <img
                                    className="member online"
                                    src={member.img}
                                    alt={`user ${index + 1}`}
                                />
                            </div>
                        ))}

                        {awayMembers.map((member, index) => (
                            <div key={index} className="team-management-member">
                                <img
                                    className="member away"
                                    src={member.img}
                                    alt={`user ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="member-list-create-team-button">
                        <img className="member-list-button-img" src={createIcon} alt="asd" />

                        Create Team
                    </div>
                </div>
                <div className="horizontal-separator" />
                <div className="member-list-container">
                    <div className="member-list">
                        <div className="member-text-area">
                            <div className="member-title">
                                {members.length} members
                            </div>
                            <div className="member-description">
                                {availableMemberCount} available
                            </div>
                        </div>
                        <div className="member-list-content">
                            {onlineMembers.map((member, index) => (
                                <div key={index} className="team-management-member">
                                    <img
                                        className="member online"
                                        src={member.img}
                                        alt={`user ${index + 1}`}
                                    />
                                </div>
                            ))}

                            {awayMembers.map((member, index) => (
                                <div key={index} className="team-management-member">
                                    <img
                                        className="member away"
                                        src={member.img}
                                        alt={`user ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="member-list-create-team-button">
                            <img className="member-list-button-img" src={createIcon} alt="asd" />

                            Create Team
                        </div>
                    </div>
                    <div className="member-list">
                        <div className="member-text-area">
                            <div className="member-title">
                                {members.length} members
                            </div>
                            <div className="member-description">
                                {availableMemberCount} available
                            </div>
                        </div>
                        <div className="member-list-content">
                            {onlineMembers.map((member, index) => (
                                <div key={index} className="team-management-member">
                                    <img
                                        className="member online"
                                        src={member.img}
                                        alt={`user ${index + 1}`}
                                    />
                                </div>
                            ))}

                            {awayMembers.map((member, index) => (
                                <div key={index} className="team-management-member">
                                    <img
                                        className="member away"
                                        src={member.img}
                                        alt={`user ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="member-list-create-team-button">
                            <img className="member-list-button-img" src={createIcon} alt="asd" />

                            Create Team
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default TeamManagement;