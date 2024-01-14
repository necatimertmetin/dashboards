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
import TeamManagementTask from "./task/header/task";
import TeamManagementTaskColumn from "./column/teamManagementTaskColumn";
import teams from '../teams.json';
import MemberList from "./member/memberList";
const TeamManagement = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [allTeamsCollapsed, setAllTeamsCollapsed] = useState(false);
    const [teamListsCollapsed, setTeamListsCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null); // Initial selected tab

    const teamData = teams;

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



    const [selectedTeamIndex, setSelectedTeamIndex] = useState();
    const [selectedTeamName, setSelectedTeamName] = useState();






    const createTabs = (activeTeamIndex) => {
        const activeTeamData = teams.teamManagement.teams[activeTeamIndex];

        // Log the data to the console
        console.log(activeTeamData);

        if (!activeTeamData || typeof activeTeamData !== "object") {
            return null; // or return <></> for an empty fragment
        }

        const teamKeys = Object.keys(activeTeamData);
        console.log('TEAMKEYS ', teamKeys)
        const tabId = `value-${activeTeamIndex + 1}`;
        return teamKeys.map((teamKey, index) => {
            // Skip rendering if the teamKey is "teamInfo"
            console.log(index);
            if (teamKey === "teamInfo") {
                return null;
            }

            return (
                <label key={index} className={selectedTab === teamKey ? 'selected' : ''}>
                    <input
                        value={index}
                        name="value-radio"
                        id={tabId}
                        type="radio"
                        checked={selectedTab === teamKey}
                        onChange={() => {
                            tabClicked(teamKey);
                        }}
                    />
                    <span>{teamKey.charAt(0).toUpperCase() + teamKey.slice(1)}</span>
                </label>
            );
        });

    };

    const tabClicked = (teamKey) => {
        setSelectedTab(teamKey)
        console.log("selectedTab = ", teamKey)
        console.log("activeTeam = ", selectedTeamName)
    }




    const yourTaskList = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        taskTitle: `Task ${index + 1}`,
        taskDescription: `Task ${index + 1} description`,
        taggedUsers: [`User ${index + 1}`, `User ${index + 2}`],
    }));

    const taskList = Array.from({ length: 3 }, (_, index) => ({
        id: index + 1,
        taskTitle: `Task ${index + 1}`,
        taskDescription: `Task ${index + 1} description`,
        taggedUsers: [`User ${index + 1}`, `User ${index + 2}`],
    }));

    const columns = teamData.teamManagement.teams.map((team, teamIndex) => {
        
        if (teamIndex !== selectedTeamIndex) {
            return null; // Skip if it's not the selected team
        }
        const selectedTabData = team[selectedTab];
        if (!selectedTabData || !selectedTabData.columns) {
            return null; // Skip if the selected tab or its columns are not available
        }
        
        return selectedTabData.columns.map((column, columnIndex) => (
            <TeamManagementTaskColumn
                key={`${teamIndex}-column-${columnIndex}`}
                columnTitle={column.columnTitle}
                taskList={column.taskList}
                userIcon={column.userIcon}
                commentIcon={commentIcon}
                fileIcon={fileIcon}
                counter={column.counter}
            />
        ));
    });
    
    console.log(teams.teamManagement.teams);

    const calculateTotalMembers = (teams) => {
        let totalMembers = 0;

        Object.values(teams).forEach((team) => {
            totalMembers += team.teamInfo.numMembers;
        });

        return totalMembers;
    };

    const flattenMembers = (teams) => {
        let allMembers = [];

        Object.values(teams.teamManagement.teams).forEach((team) => {
            allMembers = allMembers.concat(team.teamInfo.members);
        });

        return allMembers;
    };
    // ...

    // Toplam üye sayısını hesapla
    const totalAvailableMembersCount = calculateTotalMembers(teams.teamManagement.teams);


    // Console'a yazdırma
    return (
        <div className="team-management-container">
            <LocationRow locationArray={locationRowArray} />

            <div className="team-management-container-header">
                <div className={`member-list  ${allTeamsCollapsed ? 'height-0' : ''}`} >
                    <div className="member-text-area">
                        <div className="member-title">
                            {totalAvailableMembersCount} members
                        </div>
                        <div className="member-description">
                            {availableMemberCount} available
                        </div>
                    </div>
                    <div className="member-list-content">
                        {flattenMembers(teams).map((member, index) => (
                            <div key={index} className={`team-management-member ${member.status}`}>
                                <img
                                    className="member"
                                    src={member.photo || userIcon}
                                    alt={`user ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="member-list-create-team-button">
                        <img className="member-list-button-img" src={createIcon} alt="Create Team" />
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
                    {Object.values(teamData.teamManagement.teams).map((team, index) => (
                        <MemberList
                            key={`${team.teamInfo.teamName}-${index}`}
                            teamName={team.teamInfo.teamName}
                            members={team.teamInfo.members}
                            availableMemberCount={team.teamInfo.numMembers}
                            index={index}
                            activeIndex={activeIndex}
                            onTeamClick={(teamName, availableMemberCount, index) => {
                                console.log(`Team Name: ${teamName}, Index: ${index}`);
                                setActiveIndex(index);
                                setSelectedTeamIndex(index);
                                setSelectedTeamName(team.teamInfo.teamName);
                            }}
                        />
                    ))}

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
                {createTabs(selectedTeamIndex, selectedTeamName)}
            </div>
            {selectedTab === null ? ' ' : <div className="team-management-task-column-container">{columns}</div>}

        </div>
    )
}
export default TeamManagement;