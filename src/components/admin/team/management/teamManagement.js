import React, { useState } from "react";
import '../../../../assets/css/TeamManagement.css';
import userIcon from '../../../../assets/media/image.jpg';
import createIcon from '../../../../assets/media/create.png';
import LocationRow from "../../../location/locationRow";
import arrow from '../../../../assets/media/right-arrow.png';
import options from '../../../../assets/media/more.png';
import TeamManagementTaskHeaderItem from "./task/header/taskHeaderItem";
import fileIcon from '../../../../assets/media/document.png';
import commentIcon from '../../../../assets/media/comment.png';
const TeamManagement = () => {

    const [allTeamsCollapsed, setAllTeamsCollapsed] = useState(false);
    const [teamListsCollapsed, setTeamListsCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState("value-1"); // Initial selected tab

    const tabTitles = [
        'Frontend',
        'Backend',
        'Mobile',
    ];

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


    const MemberList = ({ teamName, members, availableMemberCount }) => {
        return (
            <div className="member-list">
                <div className="member-text-area">
                    <div className="member-title">
                        {teamName ? (teamName) : (members.length('members'))}
                    </div>
                    <div className="member-description">
                        {availableMemberCount} available
                    </div>
                </div>
                <div className="member-list-content">
                    {members.online.map((member, index) => (
                        <div key={index} className="team-management-member">
                            <img
                                className="member online"
                                src={member.img}
                                alt={`user ${index + 1}`}
                            />
                        </div>
                    ))}

                    {members.away.map((member, index) => (
                        <div key={index} className="team-management-member">
                            <img
                                className="member away"
                                src={member.img}
                                alt={`user ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }


    const exampleMembers = {
        online: [
            { img: userIcon },
            { img: userIcon },
        ],
        away: [
            { img: userIcon },
            { img: userIcon },
        ],
    };

    const exampleAvailableMemberCount = 10;

    const createTabs = () => {
        return tabTitles.map((title, index) => {
            const tabId = `value-${index + 1}`;
            return (
                <label key={index} className={selectedTab === tabId ? 'selected' : ''}>
                    <input
                        value={tabId}
                        name="value-radio"
                        id={tabId}
                        type="radio"
                        checked={selectedTab === tabId}
                        onChange={() => setSelectedTab(tabId)}
                    />
                    <span>{title}</span>
                </label>
            );
        });
    };

    return (
        <div className="team-management-container">
            <LocationRow locationArray={locationRowArray} />

            <div className="team-management-container-header">
                <div className={`member-list  ${allTeamsCollapsed ? 'height-0' : ''}`} >
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
                <div className='horizontal-separator'>
                    <div className={`member-list-collapser`} onClick={() => {
                        setAllTeamsCollapsed(!allTeamsCollapsed)
                    }}>
                        <img className={`member-list-collapser-icon ${allTeamsCollapsed ? 'rotate-180' : ''}`} src={arrow} alt="<" />
                    </div>
                </div>
                <div className={`member-list-container ${teamListsCollapsed ? 'height-0' : ''}`}>
                    <MemberList teamName={'Bytes'} members={exampleMembers} availableMemberCount={exampleAvailableMemberCount} />
                    <MemberList teamName={'Alpha'} members={exampleMembers} availableMemberCount={exampleAvailableMemberCount} />
                    <MemberList teamName={'Ctrl Alt Elite'} members={exampleMembers} availableMemberCount={exampleAvailableMemberCount} />
                    <MemberList teamName={'Cool As Code'} members={exampleMembers} availableMemberCount={exampleAvailableMemberCount} />
                    <MemberList teamName={'Pixie Chicks'} members={exampleMembers} availableMemberCount={exampleAvailableMemberCount} />
                    <MemberList teamName={'Errors'} members={exampleMembers} availableMemberCount={exampleAvailableMemberCount} />

                </div>

                <div className="horizontal-separator">
                    <div className={`member-list-collapser`} onClick={() => {
                        setTeamListsCollapsed(!teamListsCollapsed)
                    }}>
                        <img className={`member-list-collapser-icon ${teamListsCollapsed ? 'rotate-180' : ''}`} src={arrow} alt="<" />
                    </div>
                </div>

            </div>

            <div className="team-management-tab-container">
                {createTabs()}
            </div>

            <div className="team-management-task-column-container">
                <div className="team-management-task-column">
                    <div className="team-management-task-column-header">
                        <div className="team-management-task-column-header-title">
                            TO DO
                        </div>
                        <div className="team-management-task-column-header-counter">
                            10
                        </div>
                        <div className="team-management-task-column-header-settings-container">
                            <img className="team-management-task-column-header-settings-icon" src={options} alt="asd" />
                        </div>
                    </div>

                    <div className="team-management-task-container">
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="team-management-task-column">
                    <div className="team-management-task-column-header">
                        <div className="team-management-task-column-header-title">
                            DEVELOPMENT
                        </div>
                        <div className="team-management-task-column-header-counter">
                            10
                        </div>
                        <div className="team-management-task-column-header-settings-container">
                            <img className="team-management-task-column-header-settings-icon" src={options} alt="asd" />
                        </div>
                    </div>

                    <div className="team-management-task-container">
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="team-management-task-column">
                    <div className="team-management-task-column-header">
                        <div className="team-management-task-column-header-title">
                            TEST
                        </div>
                        <div className="team-management-task-column-header-counter">
                            10
                        </div>
                        <div className="team-management-task-column-header-settings-container">
                            <img className="team-management-task-column-header-settings-icon" src={options} alt="asd" />
                        </div>
                    </div>

                    <div className="team-management-task-container">
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="team-management-task-column">
                    <div className="team-management-task-column-header">
                        <div className="team-management-task-column-header-title">
                            BLOCKED
                        </div>
                        <div className="team-management-task-column-header-counter">
                            10
                        </div>
                        <div className="team-management-task-column-header-settings-container">
                            <img className="team-management-task-column-header-settings-icon" src={options} alt="asd" />
                        </div>
                    </div>

                    <div className="team-management-task-container">
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="team-management-task-column">
                    <div className="team-management-task-column-header">
                        <div className="team-management-task-column-header-title">
                            DONE
                        </div>
                        <div className="team-management-task-column-header-counter">
                            10
                        </div>
                        <div className="team-management-task-column-header-settings-container">
                            <img className="team-management-task-column-header-settings-icon" src={options} alt="asd" />
                        </div>
                    </div>

                    <div className="team-management-task-container">
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-management-task">
                            <div className="team-management-task-header">
                                <TeamManagementTaskHeaderItem />
                                <TeamManagementTaskHeaderItem />
                            </div>
                            <div className="team-management-task-title">
                                Sort and Filter on Challenge Dashboard
                            </div>
                            <div className="team-management-task-description">
                                As a brand admin, I would like to look at the challenge stats on a page so that I can see the overall results of my brand's challenge.




                            </div>

                            <div className="team-management-task-tag-container">
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>
                                <div className="user-tag">
                                    <img className="user-tag-img" src={userIcon} alt="user" />
                                    Jhon Doe
                                </div>

                            </div>
                            <div className="team-management-task-attachment-container">
                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={commentIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>

                                <div className="team-management-task-attachment">
                                    <img className="team-management-task-attachment-icon" src={fileIcon} />
                                    <div>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default TeamManagement;