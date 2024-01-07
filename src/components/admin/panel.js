import React, { useState } from "react";
import '../../assets/css/Panel.css'
import Sidebar from "../sidebar/sidebar";
import Dashboard from "./dashboard/dashboard";

const Panel = () => {
    const [selectedPanel, setSelectedPanel] = useState(0);

    const handleItemSelected = (index) => {
        // Do something with the selected item index in the parent component
        console.log(`Item ${index} selected in the parent component`);
        setSelectedPanel(index);
    };

    return (
        <div className="panel-container">
            <Sidebar onItemSelect={handleItemSelected} />
            {selectedPanel === 0 && <Dashboard />}
        </div>
    )
}
export default Panel;