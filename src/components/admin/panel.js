import React, { useState } from "react";
import '../../assets/css/Panel.css'
import Sidebar from "../sidebar/sidebar";
import Dashboard from "./dashboard/dashboard";
import TeamManagement from "./team/management/teamManagement";
import Navbar from "./navbar/navbar";

const Panel = () => {
    const [selectedPanel, setSelectedPanel] = useState(0);
    const [navbarItems, setNavbarItems] = useState([]);
    const handleItemSelected = (index) => {
        // Do something with the selected item index in the parent component
        console.log(`Item ${index} selected in the parent component`);
        setSelectedPanel(index);
        if (index === 0) {
            setNavbarItems(['Dashboard',
                'Analysis',
                'Stats',]);
        }
        else if (index === 1) {
            setNavbarItems(['Dashboard',
            'Team Tasks',
            'Efficiency',]);
        }
    };
    return (
        <div className="panel-container">
            <Sidebar onItemSelect={handleItemSelected} />
            <div className="dashboard-container">
                <Navbar items={navbarItems} />
                {selectedPanel === 0 && <Dashboard />}
                {selectedPanel === 1 && <TeamManagement />}
            </div>

        </div>
    )
}
export default Panel;